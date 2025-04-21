import React from "react";
import { Button } from "@/components/ui/button";
import { FaSpotify } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import { ContainerScroll } from "@/components/ui/container-scroll";

const HeroSection = () => {
  return (
    // <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
    //   <div
    //     className={cn(
    //       "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
    //       "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
    //     )}
    //   />

    //   <Spotlight
    //     className="-top-40 left-0 w-full md:-top-20 md:left-60"
    //     fill="white"
    //   />
    //   <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
    //     <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
    //       Transfer <br /> like you own it Globally.
    //     </h1>
    //     <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
    //      Play your favourites on any platform without any vendor lock-in. Because, we believe Music is meant to enjoy without any condition.
    //     </p>
    //   </div>
    // </div>

    <section>
      
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Move Your Music <br />
                <span className="mt-1 text-4xl leading-none font-bold md:text-[6rem]">
                  Effortlessly
                </span>
              </h1>
            </>
          }
        >
          <img
            src={`/linear.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
    // <section>
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
    // </section>
  );
};

export default HeroSection;
