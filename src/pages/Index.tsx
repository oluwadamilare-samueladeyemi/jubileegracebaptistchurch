import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import LeadershipSection from "@/components/LeadershipSection";
import PrayerRequestSection from "@/components/PrayerRequestSection";
import GivingSection from "@/components/GivingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <EventsSection />
    <LeadershipSection />
    <PrayerRequestSection />
    <GivingSection />
    <FooterSection />
  </div>
);

export default Index;
