import { Clock, MapPin } from "lucide-react";

const services = [
  { day: "Sunday", title: "Sunday Worship Service", time: "9:00 AM – 12:00 PM", desc: "Join us for praise, worship, and the Word of God." },
  { day: "Wednesday", title: "Mid-Week Prayer Meeting", time: "6:00 PM – 7:30 PM", desc: "A time of corporate prayer and Bible study." },
  { day: "Friday", title: "Friday Night Vigil", time: "10:00 PM", desc: "Monthly vigil for deep intercession and spiritual renewal." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding gradient-sanctuary">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-sanctuary-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Join Us</p>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-sanctuary-cream mb-4">
        Service Times
      </h2>
      <div className="flex items-center justify-center gap-2 text-sanctuary-cream/70 font-body text-sm mb-12">
        <MapPin className="w-4 h-4" />
        <span>Ibadan, Oyo State, Nigeria</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.day}
            className="bg-sanctuary-cream/10 backdrop-blur-sm border border-sanctuary-cream/15 rounded-2xl p-8 hover:bg-sanctuary-cream/15 transition-colors"
          >
            <span className="inline-block text-sanctuary-gold font-body text-xs tracking-[0.2em] uppercase bg-sanctuary-gold/15 px-4 py-1.5 rounded-full mb-4">
              {s.day}
            </span>
            <h3 className="font-heading text-xl font-semibold text-sanctuary-cream mb-2">{s.title}</h3>
            <div className="flex items-center justify-center gap-2 text-sanctuary-gold/80 font-body text-sm mb-3">
              <Clock className="w-4 h-4" />
              <span>{s.time}</span>
            </div>
            <p className="text-sanctuary-cream/60 font-body text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
