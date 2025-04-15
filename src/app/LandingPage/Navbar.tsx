import React from 'react'
import { Button } from '@/components/ui/button' 
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 border-b-2">
        <h1 className="text-2xl font-bold">TuneBridger</h1>
        <div className="flex gap-4">
            <Button variant="ghost">How it works</Button>
            <Button variant="ghost">Features</Button>
            <Button>Dashboard</Button>
        </div>
    </nav>
  )
}

export default Navbar