import Navbar from "./LandingPage/Navbar";
import HeroSection from "./LandingPage/HeroSection";
import HowItWorks from "./LandingPage/HowItWorks";
import Features from "./LandingPage/Features";
import CallToAction from "./LandingPage/CallToAction";
import Footer from "./LandingPage/Footer";
export default async function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <Features />
    <CallToAction />
    <Footer />
    </>
  );
}
