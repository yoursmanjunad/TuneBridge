import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const TextGen = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center w-full px-4 ">
       <TextGenerateEffect
        words="You've spent hours crafting the perfect Spotify playlists.   "
        className="text-2xl font-bold text-center text-black dark:text-white"
        duration={0.5}
      />
        <TextGenerateEffect
            words="Finding every song, Organizing them just right. Now you want them on YouTube... Without starting all over. "
            className="text-2xl font-bold text-center text-black dark:text-white"
            duration={0.7}  
        />
        <TextGenerateEffect
            words="We get it."
            className="text-6xl font-bold text-center text-black dark:text-white"
            duration={0.9}
        />
    </div>
    </section>
  )
}

export default TextGen