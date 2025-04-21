import React from "react";
import { ArrowRight } from "lucide-react";
import { GlowEffect } from "components/motion-primitives/glow-effect";
import { ContainerScroll } from "@/components/ui/container-scroll";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <ContainerScroll
          titleComponent={
            <>
              {/* Button container with controlled width to prevent full-width glow */}
              <div className="relative z-20 mb-8 inline-block">
                <GlowEffect
                  // colors={["#3357FF", "#33C7FF", "#4FACFE"]}
                  // mode="colorShift"
                  // blur="medium"
                  // duration={4}
                  // scale={1.5}
                  className="absolute inset-0 rounded-lg"
                />
                <button 
                  className=" relative z-10 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(51,87,255,0.6)]"
                >
                  Get Started <ArrowRight className="h-4 w-4 animate-pulse" />
                </button>
              </div>
              
              <h1 className="text-4xl font-semibold text-black dark:text-white text-center">
                Move Your Music <br />
                <span className="mt-1 text-4xl leading-none font-bold md:text-[6rem]">
                  Effortlessly
                </span>
              </h1>
            </>
          }
        >
          <div>
            {/* Light Theme Image */}
            <img
              src="/light-dashboard.png"
              alt="light hero"
              className="block dark:hidden mx-auto h-full rounded-2xl object-cover object-left-top"
              draggable={false}
            />
            {/* Dark Theme Image */}
            <img
              src="/dark-dashboard.webp"
              alt="dark hero"
              className="hidden dark:block mx-auto h-full rounded-2xl object-cover object-left-top"
              draggable={false}
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;