"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner" // or your toast library

export function SpotifyConnectedToast() {
  const searchParams = useSearchParams()
  const connected = searchParams.get("connected")

  useEffect(() => {
    if (connected === "success") {
      toast.success("✅ Spotify connected successfully!")
    }
  }, [connected])

  return null // no visible component, just side effect
}
