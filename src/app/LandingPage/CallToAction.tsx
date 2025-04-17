import React from 'react'
import { Button } from '@/components/ui/button'
const CallToAction = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
  <h3 className="text-3xl font-bold mb-4">Ready to Move Your Music?</h3>
  <p className="mb-8 text-lg">Connect your accounts and start transferring playlists effortlessly.</p>
  <div className="space-x-4">
    <Button className="bg-white text-blue-600 hover:bg-gray-100" >
      Connect Spotify
    </Button>
    <Button variant="outline" className='text-gray-800'>
      Connect YouTube
    </Button>
  </div>
</section>

  )
}

export default CallToAction