// pages/callback/spotify.tsx
import { useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function SpotifyCallback() {
  const router = useRouter()

  useEffect(() => {
    const fetchToken = async () => {
      const code = router.query.code as string
      if (!code) return

      try {
        const response = await axios.post("/api/auth/spotify/callback", { code })
        const { accessToken } = response.data

        // Store in localStorage or cookie
        localStorage.setItem("spotifyAccessToken", accessToken)

        // Redirect to dashboard or fetch songs
        router.push("/dashboard")
      } catch (err) {
        console.error("OAuth Callback Error:", err)
      }
    }

    fetchToken()
  }, [router])

  return <div>Connecting to Spotify...</div>
}
