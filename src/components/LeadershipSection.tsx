import leadershipImg from "@/assets/leadership.jpg";

const LeadershipSection = () => (
  <section className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src={leadershipImg}
            alt="Jubilee Grace Baptist Church pastoral leadership team"
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
            Our dedicated pastoral team leads with humility, wisdom, and a deep commitment to God's Word. 
            Together, they guide our congregation in spiritual growth, community service, and faithful worship.
          </p>
          <p className="text-muted-foreground font-body text-base leading-relaxed">
            Under their leadership, Jubilee Grace Baptist Church continues to be a beacon of hope and transformation 
            in Ibadan and beyond.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
