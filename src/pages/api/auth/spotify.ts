// pages/api/auth/spotify.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
  const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/callback/spotify"
  const SCOPE = [
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "user-read-recently-played",
    "playlist-read-private",
    "playlist-read-collaborative"
  ].join(" ")

  const queryParams = new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID!,
    scope: SCOPE,
    redirect_uri: REDIRECT_URI,
  })

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams.toString()}`)
}
