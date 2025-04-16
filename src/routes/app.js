// routes/auth.js
import express from 'express'
import axios from 'axios'
const router = express.Router()

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const redirect_uri = "http://localhost:3000/api/auth/callback"

router.get("/login", (req, res) => {
  const scopes = [
    "user-read-recently-played",
    "user-top-read",
    "playlist-read-private",
    "user-library-read"
  ].join(" ")

  res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${redirect_uri}`)
})

router.get("/callback", async (req, res) => {
  const code = req.query.code || null

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    // @ts-ignore
    new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri,
      client_id: client_id,
      client_secret: client_secret,
    }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  const { access_token, refresh_token } = response.data

  // You can now fetch user profile with this token
  const user = await axios.get('https://api.spotify.com/v1/me', {
    headers: { Authorization: `Bearer ${access_token}` }
  })

  // Save tokens + user in DB
  res.json({ user: user.data, access_token, refresh_token })
})
