import { Gift, CreditCard, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const GivingSection = () => (
  <section id="give" className="section-padding gradient-sanctuary">
    <div className="max-w-4xl mx-auto text-center">
      <Gift className="w-12 h-12 mx-auto text-sanctuary-gold mb-4" />
      <p className="text-sanctuary-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Give Generously</p>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-sanctuary-cream mb-4">
        Support God's Work
      </h2>
      <p className="text-sanctuary-cream/70 font-body text-base md:text-lg max-w-2xl mx-auto mb-10">
        Your tithes, offerings, and donations help us reach more souls, care for our community, 
        and expand the Kingdom of God through Jubilee Grace Baptist Church.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10">
        <div className="bg-sanctuary-cream/10 backdrop-blur-sm border border-sanctuary-cream/15 rounded-2xl p-6">
          <CreditCard className="w-8 h-8 text-sanctuary-gold mx-auto mb-3" />
          <h3 className="font-heading text-lg font-semibold text-sanctuary-cream mb-1">Online Giving</h3>
          <p className="text-sanctuary-cream/60 font-body text-sm">Secure digital payments via Paystack</p>
        </div>
        <div className="bg-sanctuary-cream/10 backdrop-blur-sm border border-sanctuary-cream/15 rounded-2xl p-6">
          <Landmark className="w-8 h-8 text-sanctuary-gold mx-auto mb-3" />
          <h3 className="font-heading text-lg font-semibold text-sanctuary-cream mb-1">Bank Transfer</h3>
          <p className="text-sanctuary-cream/60 font-body text-sm">Direct transfer to the church account</p>
        </div>
      </div>

      <Button
        size="lg"
        className="bg-sanctuary-gold text-sanctuary-dark hover:bg-sanctuary-gold/90 font-body font-semibold text-base px-10 py-6 rounded-full"
      >
        Give Now
      </Button>
    </div>
  </section>
);

export default GivingSection;
