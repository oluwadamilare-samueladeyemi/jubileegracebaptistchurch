import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="bg-sanctuary-dark section-padding pb-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-heading text-2xl font-bold text-sanctuary-cream mb-2">Jubilee Grace Baptist Church</h3>
          <p className="font-heading text-sm italic text-sanctuary-cream/60 mb-4">Sanctuary of Praise and Prayer</p>
          <p className="text-sanctuary-cream/50 font-body text-sm leading-relaxed">
            A vibrant Baptist community in Ibadan committed to worship, prayer, and reaching the lost with the love of Christ.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-sanctuary-cream mb-4">Contact Us</h4>
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-sanctuary-cream/60 hover:text-sanctuary-gold font-body text-sm transition-colors">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Ibadan, Oyo State, Nigeria</span>
            </a>
            <a href="tel:+2340000000000" className="flex items-center gap-3 text-sanctuary-cream/60 hover:text-sanctuary-gold font-body text-sm transition-colors">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+234 000 000 0000</span>
            </a>
            <a href="mailto:info@jubileegrace.org" className="flex items-center gap-3 text-sanctuary-cream/60 hover:text-sanctuary-gold font-body text-sm transition-colors">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@jubileegrace.org</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-sanctuary-cream mb-4">Connect With Us</h4>
          <p className="text-sanctuary-cream/50 font-body text-sm mb-4">
            Follow us on Facebook for daily devotionals, announcements, and live service updates.
          </p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sanctuary-cream/10 hover:bg-sanctuary-cream/15 text-sanctuary-cream font-body text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            <Facebook className="w-4 h-4" />
            Follow on Facebook
          </a>
        </div>
      </div>

      <div className="border-t border-sanctuary-cream/10 pt-6 text-center">
        <p className="text-sanctuary-cream/30 font-body text-xs">
          © {new Date().getFullYear()} Jubilee Grace Baptist Church, Ibadan. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
