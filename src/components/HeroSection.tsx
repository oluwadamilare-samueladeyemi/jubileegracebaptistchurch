import heroImage from "@/assets/hero-sanctuary.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Jubilee Grace Baptist Church sanctuary during worship"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-warm-overlay" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sanctuary-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Welcome to
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-sanctuary-cream leading-tight mb-4">
          Jubilee Grace
          <span className="block text-gradient-gold">Baptist Church</span>
        </h1>
        <p className="font-heading text-xl md:text-2xl italic text-sanctuary-cream/80 mb-8">
          Sanctuary of Praise and Prayer
        </p>
        <p className="font-body text-sanctuary-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Join our vibrant community of believers in Ibadan as we worship, grow, and serve together in God's love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="bg-sanctuary-gold text-sanctuary-dark hover:bg-sanctuary-gold/90 font-body font-semibold text-base px-8 py-6 rounded-full"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join Us This Sunday
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-sanctuary-cream/40 text-sanctuary-cream hover:bg-sanctuary-cream/5 hover:opacity-80 font-body text-base px-8 py-6 rounded-full"
            onClick={() => document.getElementById("prayer")?.scrollIntoView({ behavior: "smooth" })}
          >
            Submit a Prayer Request
          </Button>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sanctuary-cream/60 hover:text-sanctuary-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
