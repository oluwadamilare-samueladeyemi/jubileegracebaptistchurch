import communityImg from "@/assets/community.jpg";
import { Heart, BookOpen, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "Love & Compassion", desc: "We express God's love through acts of kindness and genuine care for every soul." },
  { icon: BookOpen, title: "Sound Doctrine", desc: "Rooted in Baptist tradition and the unchanging truth of God's Word." },
  { icon: Users, title: "Community", desc: "Building lasting relationships through fellowship and mutual support." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-sanctuary-warm font-body text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Home for <span className="text-sanctuary-warm">Every Believer</span>
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-6">
            Jubilee Grace Baptist Church is a warm and vibrant community of faith located in the heart of Ibadan. 
            We are committed to being a sanctuary where praise fills the air and prayer transforms lives.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Under devoted pastoral leadership, our church family continues to grow as we pursue our mission to 
            share the Gospel, nurture believers, and serve our community with the love of Christ.
          </p>
        </div>
        <div className="relative">
          <img
            src={communityImg}
            alt="Jubilee Grace church community fellowship"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-sanctuary-gold/20 blur-2xl" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-sanctuary-warm/20 blur-2xl" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {values.map((v) => (
          <div key={v.title} className="text-center p-6 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sanctuary-warm/10 flex items-center justify-center">
              <v.icon className="w-7 h-7 text-sanctuary-warm" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
