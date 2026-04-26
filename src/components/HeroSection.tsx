import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";
import slide6 from "@/assets/hero-slide-6.jpg";
import slide7 from "@/assets/hero-slide-7.jpg";
import slide8 from "@/assets/hero-slide-8.jpg";
import slide9 from "@/assets/hero-slide-9.jpg";

const slides = [
  { src: slide1, alt: "Worshippers praising during a Jubilee Grace service" },
  { src: slide2, alt: "Youth in ceremonial attire at Jubilee Grace" },
  { src: slide3, alt: "Royal Ambassadors parade outside the church" },
  { src: slide4, alt: "Member in prayer during worship" },
  { src: slide5, alt: "Joyful praise during a Sunday service" },
  { src: slide6, alt: "Royal Ambassadors honor guard inside the sanctuary" },
  { src: slide7, alt: "Choir leading worship in song" },
  { src: slide8, alt: "Drummer leading praise on traditional talking drum" },
  { src: slide9, alt: "Congregant rejoicing during worship" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={1080}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 gradient-warm-overlay" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-sanctuary-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Welcome to
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-sanctuary-cream leading-tight mb-4">
          Jubilee Grace
          <span className="block text-gradient-gold text-purple-900">Baptist Church</span>
        </h1>
        <p className="font-heading text-xl md:text-2xl italic text-sanctuary-cream/80 mb-8">
          Sanctuary of Praise and Prayer
        </p>
        <p className="font-body text-sanctuary-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Join our vibrant community of believers in across the globe as we worship, grow, and serve together in God's love.
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
            className="border-sanctuary-gold/60 text-sanctuary-gold hover:bg-sanctuary-gold/10 font-body text-base px-8 py-6 rounded-full"
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
