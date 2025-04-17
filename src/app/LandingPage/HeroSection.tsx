import React from 'react'
import { Button } from '@/components/ui/button'
import { FaSpotify } from "react-icons/fa"; 
import { CiYoutube } from "react-icons/ci";
const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen  text-grey-800 text-center p-4">
        <h1 className="text-5xl font-bold mb-4">Transfer Your Playlists Seamlessly</h1>
        <p className=" text-lg mb-8">From Spotify to YouTube in just a click.</p>
        <div  className='mt-2 flex justify-center gap-4'>
            <Button className='bg-green-500 h-12'><FaSpotify className="w-5 h-5" /> Connect to Spotify</Button>
            <Button variant="outline" className='text-gray-800 h-12 '> <CiYoutube className='w-5 h-5' />Connect to YouTube</Button>
        </div>
    </section>
  )
}

export default HeroSection