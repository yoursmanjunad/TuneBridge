"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BsYoutube } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import ModeToggle from "./ui/MoodToggle";
import toast, { Toaster } from 'react-hot-toast';
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
          {/* <Button
            variant="ghost"
            onClick={() => {
              toast.error("This feature is not yet available.");
            }}
          >Toast
            </Button>
          <Toaster /> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
// "use client"
// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { SidebarTrigger } from "@/components/ui/sidebar"
// import { BsYoutube } from "react-icons/bs";
// import { FaSpotify } from "react-icons/fa";
// import ModeToggle from "./ui/MoodToggle";
// import { useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { useSearchParams, useRouter } from "next/navigation";

// export function SiteHeader() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
  
//   useEffect(() => {
//     // Check if the URL contains the "connected=success" parameter
//     const connectionStatus = searchParams.get("connected");
    
//     if (connectionStatus === "success") {
//       // Show toast notification
//       toast.success("Successfully connected to Spotify!", {
//         duration: 5000,
//         icon: "🎵",
//       });
      
//       // Remove the query parameter after showing the toast
//       // This prevents the toast from showing again on page refresh
//       router.replace("/dashboard");
//     }
//   }, [searchParams, router]);

//   // Add a test button to verify toast is working
//   const testToast = () => {
//     toast.success("Test toast notification!");
//   };

//   return (
//     <>
//       <Toaster position="top-right" />
//       <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
//         <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
//           <SidebarTrigger className="-ml-1" />
//           <Separator
//             orientation="vertical"
//             className="mx-2 data-[orientation=vertical]:h-4"
//           />
//           <h1 className="text-base font-medium">Your Spotify Activity</h1>
//           <div className="ml-auto flex items-center gap-2">
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 window.location.href = `/api/auth/spotify`;
//               }}
//             ><FaSpotify className="text-green-400" />
//               Connect Spotify
//             </Button>
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 window.location.href = `/api/auth/spotify`;
//               }}
//             >
//               <BsYoutube className="text-red-500" />
//               Connect YouTube
//             </Button>
//             {/* Test button to verify toast functionality */}
//             <Button variant="outline" onClick={testToast}>
//               Test Toast
//             </Button>
//             <ModeToggle />
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }
// "use client"

// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { SidebarTrigger } from "@/components/ui/sidebar"
// import { BsYoutube } from "react-icons/bs"
// import { FaSpotify } from "react-icons/fa"
// import ModeToggle from "./ui/MoodToggle"
// import toast, { Toaster } from "react-hot-toast"
// import { useEffect } from "react"
// import { useSearchParams, useRouter } from "next/navigation"

// export function SiteHeader() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   useEffect(() => {
//     const connected = searchParams.get("connected");

//     if (connected === "success") {
//       toast.success("Successfully connected to Spotify!", {
//         duration: 4000,
//         icon: "🎶",
//       });

//       // Replace the URL to remove the query param
//       router.replace("/dashboard");
//     }

//     if (connected === "youtube") {
//       toast.success("Successfully connected to YouTube!", {
//         duration: 4000,
//         icon: "📺",
//       });

//       router.replace("/dashboard");
//     }
//   }, [searchParams, router]);

//   return (
//     <>
//       <Toaster position="top-right" />
//       <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
//         <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
//           <SidebarTrigger className="-ml-1" />
//           <Separator
//             orientation="vertical"
//             className="mx-2 data-[orientation=vertical]:h-4"
//           />
//           <h1 className="text-base font-medium">Your Spotify Activity</h1>
//           <div className="ml-auto flex items-center gap-2">
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 window.location.href = `/api/auth/spotify`
//               }}
//             >
//               <FaSpotify className="text-green-400" />
//               Connect Spotify
//             </Button>
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 window.location.href = `/api/auth/youtube`
//               }}
//             >
//               <BsYoutube className="text-red-500" />
//               Connect YouTube
//             </Button>
//             <ModeToggle />
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }


// "use client"

// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
// import { SidebarTrigger } from "@/components/ui/sidebar"
// import { BsYoutube } from "react-icons/bs"
// import { FaSpotify } from "react-icons/fa"
// import ModeToggle from "./ui/MoodToggle"
// import toast, { Toaster } from "react-hot-toast"
// import { useEffect, useState } from "react"
// import { useSearchParams, useRouter } from "next/navigation"

// export function SiteHeader() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [hasShownToast, setHasShownToast] = useState(false); // ✅ prevent double toast on fast refresh

//   useEffect(() => {
//     const connected = searchParams.get("connected");

//     if (connected && !hasShownToast) {
//       if (connected === "success") {
//         toast.success("Successfully connected to Spotify!", {
//           duration: 4000,
//           icon: "🎶",
//         });
//       } else if (connected === "youtube") {
//         toast.success("Successfully connected to YouTube!", {
//           duration: 4000,
//           icon: "📺",
//         });
//       }

//       setHasShownToast(true);

//       // Clean up the URL after showing toast
//       router.replace("/dashboard");
//     }
//   }, [searchParams, router, hasShownToast]);

//   return (
//     <>
//       <Toaster position="top-right" />
//       <header className="flex h-[--header-height] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[--header-height]">
//         <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
//           <SidebarTrigger className="-ml-1" />
//           <Separator
//             orientation="vertical"
//             className="mx-2 data-[orientation=vertical]:h-4"
//           />
//           <h1 className="text-base font-medium">Your Spotify Activity</h1>
//           <div className="ml-auto flex items-center gap-2">
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 window.location.href = `/api/auth/spotify`
//               }}
//             >
//               <FaSpotify className="text-green-400" />
//               Connect Spotify
//             </Button>
//             <Button
//               variant="ghost"
//               onClick={() => {
//                 window.location.href = `/api/auth/youtube`
//               }}
//             >
//               <BsYoutube className="text-red-500" />
//               Connect YouTube
//             </Button>
//             <ModeToggle />
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }
