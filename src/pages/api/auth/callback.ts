import axios from "axios";
import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

// MongoDB connection string from environment variables
const uri = process.env.DATABASE_URL as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string;
  const redirect_uri = "http://localhost:3000/api/auth/callback"; // must match Spotify settings

  // Initialize MongoDB client
  const client = new MongoClient(uri);
  
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB");
    
    const db = client.db();
    const usersCollection = db.collection("User");
    const playlistsCollection = db.collection("Playlist");
    const songsCollection = db.collection("Song");

    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirect_uri);

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
    console.log("✅ Access Token received");

    // 🎧 Fetch user's Spotify profile
    const userProfileResponse = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userProfile = userProfileResponse.data;
    console.log("👤 User Profile fetched:", userProfile.display_name);

    // Since clerkId is required in the schema
    const placeholderClerkId = `spotify_${userProfile.id}`;

    // Find existing user by spotifyUserId or email
    let user = await usersCollection.findOne({
      $or: [
        { spotifyUserId: userProfile.id },
        { email: userProfile.email }
      ]
    });

    if (!user) {
      // Create a new user based on Spotify profile
      const timestamp = new Date();
      const userToInsert = {
        email: userProfile.email,
        username: `spotify_${userProfile.id.substring(0, 8)}`, // Using truncated Spotify ID as username with prefix
        fullName: userProfile.display_name || '',
        imageUrl: userProfile.images?.[0]?.url || null,
        spotifyUserId: userProfile.id,
        clerkId: placeholderClerkId,
        createdAt: timestamp,
        updatedAt: timestamp,
        playlists: [] // Initialize empty playlists array
      };
      
      const result = await usersCollection.insertOne(userToInsert);
      user = { 
        ...userToInsert, 
        _id: result.insertedId 
      };
      console.log("✅ Created new user:", user._id);
    } else {
      // Update existing user with Spotify info
      await usersCollection.updateOne(
        { _id: user._id },
        { 
          $set: {
            spotifyUserId: userProfile.id,
            imageUrl: userProfile.images?.[0]?.url || user.imageUrl,
            fullName: userProfile.display_name || user.fullName,
            updatedAt: new Date()
          }
        }
      );
      console.log("✅ Updated existing user:", user._id);
    }

    // 🎵 Fetch user playlists
    const playlistsResponse = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlists = playlistsResponse.data.items;
    console.log(`🎶 ${playlists.length} playlists found`);

    // Stats to track import progress
    let importedCount = 0;
    let skippedCount = 0;
    let totalTracksImported = 0;

    // Process each playlist
    for (const playlist of playlists) {
      console.log(`Processing playlist: ${playlist.name}`);
      
      // Check if playlist already exists
      const existingPlaylist = await playlistsCollection.findOne({
        userId: user._id.toString(),
        spotifyPlaylistId: playlist.id
      });

      if (existingPlaylist) {
        console.log(`⏭️ Playlist "${playlist.name}" already exists, skipping`);
        skippedCount++;
        continue;
      }
      
      // Create a new playlist record
      const timestamp = new Date();
      const newPlaylist = {
        userId: user._id.toString(),
        name: playlist.name,
        source: "spotify", // assuming this is from Spotify
        destination: "local", // default value, adjust as needed
        status: "imported",
        songCount: playlist.tracks.total,
        playlistImage: playlist.images?.[0]?.url || null,
        spotifyPlaylistId: playlist.id,
        songs: [], // Initialize empty songs array
        createdAt: timestamp
      };
      
      const playlistResult = await playlistsCollection.insertOne(newPlaylist);
      const playlistId = playlistResult.insertedId;

      // Fetch all tracks for this playlist
      let nextUrl = `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`;
      let trackOrder = 0;

      while (nextUrl) {
        const trackResponse = await axios.get(nextUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = trackResponse.data;
        
        // Process and store each track
        for (const item of data.items) {
          if (item.track) {
            trackOrder++;
            
            const song = {
              playlistId: playlistId.toString(),
              title: item.track.name,
              artist: item.track.artists.map((artist: any) => artist.name).join(", "),
              album: item.track.album?.name,
              duration: item.track.duration_ms ? Math.round(item.track.duration_ms / 1000) : null,
              sourceUrl: item.track.external_urls?.spotify || null,
              order: trackOrder,
              spotifyTrackId: item.track.id,
              albumUrl: item.track.album?.images?.[0]?.url || null,
              createdAt: new Date()
            };
            
            await songsCollection.insertOne(song);
          }
        }
        
        nextUrl = data.next; // Continue pagination if more tracks exist
      }
      
      // Update the final song count
      await playlistsCollection.updateOne(
        { _id: playlistId },
        { $set: { songCount: trackOrder } }
      );
      
      importedCount++;
      totalTracksImported += trackOrder;
      console.log(`✅ Added ${trackOrder} songs to playlist "${playlist.name}"`);
    }

    // Set cookie for the access token
    res.setHeader(
      "Set-Cookie",
      serialize("spotify_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600,
        path: "/",
      })
    );
    
    // Instead of redirecting, add success information to the redirect URL
    console.log("✅ Data import complete, redirecting to dashboard with stats");
    
    // Redirect with import stats as query parameters
    res.redirect(`/dashboard?spotifyImport=success&importedPlaylists=${importedCount}&skippedPlaylists=${skippedCount}&totalTracks=${totalTracksImported}`);
    
  } catch (error: any) {
    console.error("❌ Error:", error.response?.data || error.message);
    // Redirect with error information
    res.redirect(`/dashboard?spotifyImport=error&message=${encodeURIComponent(error.message || "Failed to import Spotify playlists")}`);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("Closed MongoDB connection");
  }
}