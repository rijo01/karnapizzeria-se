import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LunchSection from "@/components/LunchSection";
import FeaturedSection from "@/components/FeaturedSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import MobileCallCTA from "@/components/MobileCallCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <LunchSection />
        <FeaturedSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileCallCTA />
    </>
  );
}
