import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const TextGen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 ">
       <TextGenerateEffect
        words="You've spent hours crafting the perfect Spotify playlists.  Finding every song, Organizing them just right. Now you want them on YouTube... Without starting all over. We get it. "
        className="text-4xl font-bold text-center text-black dark:text-white"
        duration={0.5}
      />
    </div>
  )
}

export default TextGen