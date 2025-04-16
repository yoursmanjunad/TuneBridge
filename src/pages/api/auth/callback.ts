// pages/api/auth/spotify/callback.ts
import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.body.code
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || "http://localhost:3000/callback/spotify"

  try {
    const params = new URLSearchParams()
    params.append("grant_type", "authorization_code")
    params.append("code", code)
    params.append("redirect_uri", redirect_uri)

    const tokenResponse = await axios.post("https://accounts.spotify.com/api/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
      },
    })

    const { access_token } = tokenResponse.data
    res.status(200).json({ accessToken: access_token })
  } catch (err) {
    console.error("Token exchange failed:", err)
    res.status(500).json({ error: "Token exchange failed" })
  }
}
