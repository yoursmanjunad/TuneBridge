import React from 'react'
import { Button } from '@/components/ui/button'
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white text-center p-4">
        <h2 className='text-5xl font-bond mb-6'>Move your Music Effortlessly</h2>
        <p className='text-grey-500 text-lg max-w-xl mx-auto'>Easily transfer your Spotify playlists to YouTube in just a few clicks. No manual searching, no duplicate entries - just pure automation. </p>
        <div  className='mt-10 flex justify-center gap-4'>
            <Button>Connect Spotify</Button>
            <Button variant="outline" className='text-gray-800'>Connect YouTube</Button>
        </div>
    </section>
  )
}

export default HeroSection