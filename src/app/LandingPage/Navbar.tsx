"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/MoodToggle";
import { AnimatedNumber } from "components/motion-primitives/animated-number";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b-2 px-8 py-4">
      <h1 className="text-2xl font-bold">TuneBridger</h1>
      <div className="flex gap-4">
        <Button variant="ghost">How it works</Button>
        <Button variant="ghost">Features</Button>
        <Button onClick={() => router.push("/dashboard")}> Dashboard</Button>
        <AnimatedNumber value={100000} />
        <ModeToggle />
      </div>
    </nav>

  );
};

export default Navbar;
