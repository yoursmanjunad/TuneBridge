"use client"
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
const dummyPlaylists = [
  {
    id: 1,
    name: "Telugu",
    createdAt: "2025-04-01",
    image: "/assets/playlist/playlist2.jpg",
    songs: [
      { id: "s1", title: "Aa Ante", poster: "/assets/songs/Arya.jpg" },
      { id: "s2", title: "Mawa Enthaina", poster: "/assets/songs/Guntur Karam.jpg" },
    ]
    
  },
  {
    id: 2,
    name: "Coding Vibes",
    createdAt: "2025-04-01",
    image: "/assets/playlist/playlist2.jpg",
    songs: [
      { id: "s1", title: "Beat It", poster: "/assets/songs/MJ.jpg" },
      { id: "s2", title: "Blinding Lights", poster: "/assets/songs/Starboy.jpg" },
    ]
    
  },
]
const HomeDashboard = () => {
  const [selectedSongs, setSelectedSongs] = useState<{[key:string]:boolean}>({});
  const toggleSong = (id:string)=>{
    setSelectedSongs((prev)=>({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const selectAll = (songs: { id: string }[]) => {
    const updated = { ...selectedSongs }
    songs.forEach((song) => {
      updated[song.id] = true
    })
    setSelectedSongs(updated)
  }

  const deselectAll = (songs: { id: string }[]) => {
    const updated = { ...selectedSongs }
    songs.forEach((song) => {
      updated[song.id] = false
    })
    setSelectedSongs(updated)
  }
  const handleExport = () => {
    const songsToExport = Object.entries(selectedSongs).filter(([_, isSelected]) => isSelected)
    console.log("Exporting songs: ", songsToExport)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-semibold">Welcome</h1>
          <p className="text-gray-500">Start syncing your playlists effortlessly</p>
        </div>

        <div className="flex gap-4">
          <Button variant="default" onClick={() => {
            window.location.href = `/api/auth/spotify`;
              }}>Connect to Spotify</Button>
          <Button variant="outline">Connect to YouTube</Button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyPlaylists.map((playlist) => (
            // <Card key={playlist.id}>
            //   <CardHeader>
            //     <CardTitle>{playlist.name}</CardTitle>
            //   </CardHeader>
            //   <CardContent>
            //     <img src={playlist.image} alt={playlist.name} className="rounded-lg mb-4 h-80 object-cover" />
            //     <Dialog>
            //       <DialogTrigger asChild>
            //         <Button variant="outline">Select Songs</Button>
            //       </DialogTrigger>
            //       <DialogContent>
            //         <h2 className="text-lg font-semibold mb-4">Select Songs to Export</h2>

            //         <div className="flex justify-between mb-4">
            //           <Button variant="ghost" onClick={() => selectAll(playlist.songs)}>Select All</Button>
            //           <Button variant="ghost" onClick={() => deselectAll(playlist.songs)}>Deselect All</Button>
            //         </div>

            //         <div className="space-y-3 max-h-72 overflow-auto pr-2">
            //           {playlist.songs.map((song) => (
            //             <div key={song.id} className="flex items-center gap-3">
            //               <Checkbox
            //                 checked={selectedSongs[song.id] || false}
            //                 onCheckedChange={() => toggleSong(song.id)}
            //               />
            //               <img src={song.poster} alt={song.title} className="w-10 h-10 rounded-md object-cover" />
            //               <span className="text-sm">{song.title}</span>
            //             </div>
            //           ))}
            //         </div>

            //         <Button className="mt-4 w-full" onClick={handleExport}>
            //           Export Selected to YouTube
            //         </Button>
            //       </DialogContent>
            //     </Dialog>
            //   </CardContent>
            // </Card>
//             <Card key={playlist.id} className="hover:shadow-lg transition-all duration-200">
//   <img
//     src={playlist.image}
//     alt={playlist.name}
//     className=" rounded-lg mb-4 h-80 object-cover"
//   />
//   <CardHeader className="pb-2 pt-4 px-4">
//     <CardTitle className="text-xl">{playlist.name}</CardTitle>
//     <p className="text-sm text-muted-foreground">
//       Created on: {new Date().toLocaleDateString()}<br />
//       {playlist.songs.length} {playlist.songs.length === 1 ? "song" : "songs"}
//     </p>
//   </CardHeader>
//   <CardContent className="px-4 pb-4">
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline" className="w-full">Select Songs</Button>
//       </DialogTrigger>
//       <DialogContent>
//         <h2 className="text-lg font-semibold mb-4">{playlist.name} – Songs</h2>

//         <div className="flex justify-between mb-4">
//           <Button variant="ghost" onClick={() => selectAll(playlist.songs)}>Select All</Button>
//           <Button variant="ghost" onClick={() => deselectAll(playlist.songs)}>Deselect All</Button>
//         </div>

//         <div className="space-y-3 max-h-72 overflow-auto pr-2">
//           {playlist.songs.map((song) => (
//             <div key={song.id} className="flex items-center gap-3">
//               <Checkbox
//                 checked={selectedSongs[song.id] || false}
//                 onCheckedChange={() => toggleSong(song.id)}
//               />
//               <img
//                 src={song.poster}
//                 alt={song.title}
//                 className="w-10 h-10 rounded-md object-cover"
//               />
//               <span className="text-sm">{song.title}</span>
//             </div>
//           ))}
//         </div>

//         <Button className="mt-4 w-full" onClick={handleExport}>
//           Export Selected to YouTube
//         </Button>
//       </DialogContent>
//     </Dialog>
//   </CardContent>
// </Card>

<Card key={playlist.id} className="flex flex-row items-center gap-4 p-4 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl">
  {/* Album Poster */}
  <img
    src={playlist.image}
    alt={playlist.name}
    className="w-40 h-40 rounded-md object-cover"
  />

  {/* Playlist Info and Actions */}
  <div className="flex flex-col justify-between flex-1">
    <div>
      <h3 className="text-lg font-semibold">{playlist.name}</h3>
      <p className="text-sm text-muted-foreground">
        Created on: {new Date(playlist.createdAt).toLocaleDateString()}
      </p>
      <p className="text-sm text-muted-foreground">
        {playlist.songs.length} {playlist.songs.length === 1 ? "song" : "songs"}
      </p>
    </div>

    {/* Select Songs Button */}
    <div className="mt-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">Select Songs</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <h2 className="text-lg font-semibold mb-4">{playlist.name} – Songs</h2>

          <div className="flex justify-between mb-3">
            <Button variant="ghost" onClick={() => selectAll(playlist.songs)}>Select All</Button>
            <Button variant="ghost" onClick={() => deselectAll(playlist.songs)}>Deselect All</Button>
          </div>

          <div className="space-y-3 max-h-72 overflow-auto">
            {playlist.songs.map((song) => (
              <div key={song.id} className="flex items-center gap-3">
                <Checkbox
                  checked={selectedSongs[song.id] || false}
                  onCheckedChange={() => toggleSong(song.id)}
                />
                <img
                  src={song.poster}
                  alt={song.title}
                  className="w-10 h-10 rounded-md object-cover"
                />
                <span className="text-sm">{song.title}</span>
              </div>
            ))}
          </div>

          <Button className="mt-4 w-full" onClick={handleExport}>
            Export Selected to YouTube
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</Card>


          ))}
        </section>
      </main>
    </div>

    
  )

}
export default HomeDashboard