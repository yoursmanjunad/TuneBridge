import axios from "axios";
import { serialize } from "cookie";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;

  const redirect_uri = "http://localhost:3000/api/auth/callback"; // must match Spotify settings

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", redirect_uri);

  try {
    // 🔐 Exchange code for tokens
    const tokenResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString("base64"),
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;
    console.log("✅ Access Token:", accessToken);

    // 🎧 Fetch user's Spotify profile
    const userProfileResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userProfile = userProfileResponse.data;
    // console.log("👤 User Profile:", userProfile);

    // 🎵 Fetch user playlists
    const playlistsResponse = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlists = playlistsResponse.data.items;
    // console.log("🎶 User Playlists:", playlists);

    // ✅ Fetch and log songs in each playlist
    for (const playlist of playlists) {
      // console.log(`\n🎵 Playlist: ${playlist.name} by ${playlist.owner.display_name}`);

      const tracks: any[] = [];
      let nextUrl = `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`;

      while (nextUrl) {
        const trackResponse = await axios.get(nextUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = trackResponse.data;
        tracks.push(...data.items);
        nextUrl = data.next; // pagination
      }

      // const songNames = tracks.map((item) => item.track?.name);
      // console.log(`📀 ${songNames.length} Songs:`, songNames.slice(0, 10)); // log first 10
    }

    res.setHeader(
      "Set-Cookie",
      serialize("spotify_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/",
      })
    );
    res.redirect("/dashboard"); // or return JSON if needed
  } catch (error: any) {
    console.error("❌ Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
}
