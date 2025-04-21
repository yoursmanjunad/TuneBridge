"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BsYoutube } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import ModeToggle from "./ui/MoodToggle";
export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Your Spotify Activity</h1>
        <div className="ml-auto flex items-center gap-2">
          {/* <Button variant="outline" onClick={() => window.location.href = "/auth/auth/spotify"}>
            Connect Spotify
          </Button>
          <Button variant="destructive"  onClick={() => window.location.href = "/auth/auth/spotify"}>
              Connect Spotify
          </Button> */}
          <Button
            variant="ghost"
            onClick={() => {
              window.location.href = `/api/auth/spotify`;
            }}
          ><FaSpotify className="text-green-400" />
            Connect Spotify
          </Button>
          <Button
            variant="ghost"
            // className="bg-red-500 text-white hover:bg-red-600"
            onClick={() => {
              window.location.href = `/api/auth/spotify`;
            }}
          >
            <BsYoutube className="text-red-500" />
            Connect YouTube
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
