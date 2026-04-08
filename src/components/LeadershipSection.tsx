import leadershipImg from "@/assets/pastoral-leadership.jpg";

const LeadershipSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src={leadershipImg}
            alt="Pastor Femi Adetayo and Professor Bola Adetayo"
            className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]"
            loading="lazy"
            width={1280}
            height={720}
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sanctuary-warm font-body text-sm tracking-[0.2em] uppercase mb-3">Our Leadership</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Shepherds After <span className="text-sanctuary-warm">God's Heart</span>
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
            <strong className="text-foreground">Pastor Femi Adetayo</strong> and <strong className="text-foreground">Professor Bola Adetayo</strong> lead 
            Jubilee Grace Baptist Church with humility, wisdom, and a deep commitment to God's Word.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
            Together, they shepherd the congregation in spiritual growth, community service, and faithful worship — 
            guiding every believer toward a deeper relationship with Christ.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Under their devoted leadership, Jubilee Grace Baptist Church continues to be a beacon of hope and transformation 
            in Ibadan and beyond.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
