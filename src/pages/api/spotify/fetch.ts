// pages/api/spotify/fetch.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const access_token = req.query.token as string;

  try {
    const [topTracks, recentlyPlayed, playlists] = await Promise.all([
      axios.get("https://api.spotify.com/v1/me/top/tracks", {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
      axios.get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
      axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
    ]);

    res.status(200).json({
      topTracks: topTracks.data,
      recentlyPlayed: recentlyPlayed.data,
      playlists: playlists.data,
    });
  } catch (err: any) {
    console.error("Error fetching data from Spotify:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch data from Spotify" });
  }
}
