import Navbar from "./LandingPage/Navbar";
import HeroSection from "./LandingPage/HeroSection";
import HowItWorks from "./LandingPage/HowItWorks";
import Features from "./LandingPage/Features";
import CallToAction from "./LandingPage/CallToAction";
import Footer from "./LandingPage/Footer";
import TextGen from "./LandingPage/TextGen";
import BentoGridThirdDemo from "@/components/ui/bento-ex";
export default async function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <TextGen />
    <HowItWorks />
    <Features />
    <CallToAction />
    <Footer />
    </>
  );
}
