import { Calendar, ArrowRight } from "lucide-react";

const events = [
  { date: "Apr 13", title: "Easter Sunday Celebration", desc: "Special resurrection service with choir ministration and fellowship lunch.", tag: "Worship" },
  { date: "Apr 20", title: "Youth Conference 2026", desc: "A weekend of empowerment for young believers. Theme: 'Arise and Shine'.", tag: "Youth" },
  { date: "May 4", title: "Community Outreach", desc: "Free health screening and food distribution in our local community.", tag: "Outreach" },
  { date: "May 18", title: "Marriage Enrichment Seminar", desc: "Strengthening families through biblical counselling and workshops.", tag: "Family" },
];

const EventsSection = () => (
  <section id="events" className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-sanctuary-warm font-body text-sm tracking-[0.2em] uppercase mb-3">What's Happening</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Upcoming Events
        </h2>
      </div>

      <div className="space-y-4">
        {events.map((ev) => (
          <div
            key={ev.title}
            className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 md:p-6 rounded-2xl border border-border/50 bg-card hover:border-sanctuary-warm/30 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-center gap-4 sm:min-w-[120px]">
              <Calendar className="w-5 h-5 text-sanctuary-warm shrink-0" />
              <span className="font-body text-sm font-semibold text-sanctuary-warm whitespace-nowrap">{ev.date}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-heading text-lg font-semibold text-foreground">{ev.title}</h3>
                <span className="hidden sm:inline-block text-xs font-body bg-secondary text-secondary-foreground px-3 py-0.5 rounded-full">
                  {ev.tag}
                </span>
              </div>
              <p className="text-muted-foreground font-body text-sm">{ev.desc}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-sanctuary-warm transition-colors shrink-0 hidden sm:block" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
