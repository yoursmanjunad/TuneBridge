import Navbar from "./LandingPage/Navbar";
import HeroSection from "./LandingPage/HeroSection";
import HowItWorks from "./LandingPage/HowItWorks";
import Features from "./LandingPage/Features";
import CallToAction from "./LandingPage/CallToAction";
import Footer from "./LandingPage/Footer";
import TextGen from "./LandingPage/TextGen";
import { AnimatedGroup } from "components/motion-primitives/animated-group";
import { AnimatedGroupPreset } from "@/components/ui/AnimatedGroup";
import { ProgressiveBlur } from "components/motion-primitives/progressive-blur";
export default async function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <TextGen />
    <HowItWorks />
    <h1 className="text-4xl font-semibold text-black dark:text-white text-center py-20">
    Discover Your Favorite Artists  
    </h1>
    <AnimatedGroupPreset />
    <Features />
    <CallToAction />
    <Footer />
    </>
  );
}
