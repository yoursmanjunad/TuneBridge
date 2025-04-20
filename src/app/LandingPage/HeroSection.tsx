import React from 'react'
import { Button } from '@/components/ui/button'
import { FaSpotify } from "react-icons/fa"; 
import { CiYoutube } from "react-icons/ci";
import { BackgroundLines } from '@/components/ui/background-lines';
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
    // <BackgroundLines children={undefined} />
    // <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
    //   <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
    //     Shift Your<br /> Playlists.
    //   </h2>
    //   <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
    //     Get the best advices from our experts, including expert artists,
    //     painters, marathon enthusiasts and RDX, totally free.
    //   </p>
    //   <Button className='bg-green-500 h-12 mt-4'><FaSpotify className="w-5 h-5" /> Connect to Spotify</Button>
    // </BackgroundLines>
  )
}

export default HeroSection