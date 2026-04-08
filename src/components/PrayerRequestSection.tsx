import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PrayerRequestSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Prayer request received", description: "Our pastoral team will lift you up in prayer." });
    }, 1000);
  };

  if (submitted) {
    return (
      <section id="prayer" className="section-padding bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-sanctuary-warm mb-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Thank You</h2>
          <p className="text-muted-foreground font-body text-lg mb-8">
            Your prayer request has been submitted. Our pastoral team will be praying for you.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitted(false)}
            className="font-body rounded-full"
          >
            Submit Another Request
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="prayer" className="section-padding bg-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sanctuary-warm font-body text-sm tracking-[0.2em] uppercase mb-3">We're Here for You</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Share Your Prayer Request
          </h2>
          <p className="text-muted-foreground font-body">
            Let our pastoral team join you in prayer. All requests are kept confidential.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-background border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-body text-sm text-foreground mb-1.5 block">Your Name</label>
              <Input required placeholder="Enter your name" className="font-body rounded-xl" />
            </div>
            <div>
              <label className="font-body text-sm text-foreground mb-1.5 block">Email (optional)</label>
              <Input type="email" placeholder="your@email.com" className="font-body rounded-xl" />
            </div>
          </div>
          <div>
            <label className="font-body text-sm text-foreground mb-1.5 block">Prayer Request</label>
            <Textarea
              required
              placeholder="Share what's on your heart..."
              rows={5}
              className="font-body rounded-xl resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-sanctuary-warm text-sanctuary-cream hover:bg-sanctuary-warm/90 font-body font-semibold py-6 rounded-full text-base"
          >
            {loading ? "Submitting..." : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Prayer Request
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default PrayerRequestSection;
