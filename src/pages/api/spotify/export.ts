import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
import {parse} from "cookie";
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const cookies = parse(req.headers.cookie || "");
    const accessToken = cookies.spotify_token;

  if (!accessToken) {
    return res.status(401).json({ error: "Missing Spotify Token" });
  }

  try {
    // 1️⃣ Get user profile
    const { data: userProfile } = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const { id: spotifyUserId, display_name, email, images } = userProfile;

    // 2️⃣ Upsert user into DB
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        clerkId: spotifyUserId, // or generate custom if you're not using Clerk
        email,
        username: display_name,
        fullName: display_name,
        imageUrl: images?.[0]?.url || null,
      },
    });

    // 3️⃣ Get user's playlists
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

      // 4️⃣ Create Playlist in DB
      const createdPlaylist = await prisma.playlist.create({
        data: {
          userId: user.id,
          name,
          source: external_urls.spotify,
          destination: "", // Leave blank for now if unused
          status: "imported", // or "active", "public", etc.
          songCount: tracks.total || 0,
        },
      });

      // 5️⃣ Fetch tracks of the playlist
      const { data: trackData } = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const tracksItems = trackData.items;

      for (let i = 0; i < tracksItems.length; i++) {
        const item = tracksItems[i];
        const track = item.track;

        if (!track) continue;

        await prisma.song.create({
          data: {
            playlistId: createdPlaylist.id,
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
    return res.status(200).json({ message: "✅ Data imported successfully" });
  } catch (error: any) {
    console.error("❌ Error exporting data:", error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to export Spotify data" });
  }
}
