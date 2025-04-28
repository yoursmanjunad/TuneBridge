import axios from "axios";
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
// import { MongoClient } from "mongodb";

// // MongoDB connection URI and DB name
// const MONGODB_URI = process.env.MONGODB_URI!;
// const MONGODB_DB = process.env.MONGODB_DB!;

// // Reuse connection in dev mode
// let cachedClient: MongoClient | null = null;
// async function connectToDatabase() {
//   if (cachedClient) {
//     return cachedClient;
//   }

//   const client = new MongoClient(MONGODB_URI);
//   await client.connect();
//   cachedClient = client;
//   return client;

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
    console.log("This is from export.ts line"); 

    // 🎧 Fetch user's Spotify profile
    const userProfileResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userProfile = userProfileResponse.data;

    // 🎵 Fetch user playlists
    const playlistsResponse = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlists = playlistsResponse.data.items;

    // ✅ Fetch and log songs in each playlist
    const playlistsWithTracks = [];

    for (const playlist of playlists) {
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

      playlistsWithTracks.push({
        playlistId: playlist.id,
        playlistName: playlist.name,
        ownerName: playlist.owner.display_name,
        tracks: tracks.map((item) => ({
          trackName: item.track?.name,
          trackId: item.track?.id,
          artistName: item.track?.artists?.map((artist: any) => artist.name).join(", "),
          albumName: item.track?.album?.name,
        })),
      });
    }

    // 🌟 Connect to MongoDB and insert data
    // const client = await connectToDatabase();
    // const db = client.db(MONGODB_DB);

    // const usersCollection = db.collection("users");

    // // Insert or Update User
    // await User.updateOne(
    //   { spotifyId: userProfile.id },
    //   {
    //     $set: {
    //       spotifyId: userProfile.id,
    //       displayName: userProfile.display_name,
    //       email: userProfile.email,
    //       profileImage: userProfile.images?.[0]?.url || null,
    //       playlists: playlistsWithTracks,
    //       updatedAt: new Date(),
    //     },
    //   },
    //   { upsert: true } // Create if not exist
    // );

    // 🌟 Save token in cookies
    res.setHeader(
      "Set-Cookie",
      serialize("spotify_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/",
      })
    );

    res.redirect("/dashboard"); // or send success JSON if you want
  } catch (error: any) {
    console.error("❌ Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
}
