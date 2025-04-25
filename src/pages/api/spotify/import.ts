// pages/api/spotify/import.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
import { parse } from "cookie";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookies = parse(req.headers.cookie || "");
  const accessToken = cookies.spotify_token;

  if (!accessToken) {
    return res.status(401).json({ error: "Missing Spotify access token" });
  }

  try {
    // 1️⃣ Get Spotify user profile
    const { data: userProfile } = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { id: spotifyUserId, display_name, email, images } = userProfile;

    // 2️⃣ Upsert user
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        clerkId: spotifyUserId,
        email,
        username: display_name,
        fullName: display_name,
        imageUrl: images?.[0]?.url || null,
      },
    });

    // 3️⃣ Fetch user playlists
    const { data: playlistsRes } = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const playlists = playlistsRes.items;

    for (const playlist of playlists) {
      const {
        id: playlistId,
        name,
        external_urls,
        tracks,
      } = playlist;

      // 4️⃣ Create playlist in DB
      const createdPlaylist = await prisma.playlist.create({
        data: {
          userId: user.id, // This is fine even for MongoDB since Prisma handles it as a string reference
          name,
          source: external_urls.spotify,
          destination: "",
          status: "imported",
          songCount: tracks.total || 0,
        },
      });

      // 5️⃣ Fetch playlist tracks
      const { data: trackData } = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const trackItems = trackData.items;

      for (let i = 0; i < trackItems.length; i++) {
        const item = trackItems[i];
        const track = item.track;

        if (!track) continue;

        await prisma.song.create({
          data: {
            playlistId: createdPlaylist.id, // This remains a string
            title: track.name,
            artist: track.artists.map((a: any) => a.name).join(", "),
            album: track.album?.name || "",
            duration: track.duration_ms,
            sourceUrl: track.external_urls.spotify,
            order: i + 1,
          },
        });
      }
    }

    return res.redirect("/dashboard?connected=success");
  } catch (error: any) {
    console.error("❌ Error importing Spotify data:", error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to import Spotify data" });
  }
}
