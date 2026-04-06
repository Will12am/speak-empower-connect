import { Calendar, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground">
    {/* Pre-footer CTA */}
    <div className="py-16 text-center border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <p className="font-serif text-2xl md:text-3xl text-primary-foreground/90 mb-6">
          Prête à avancer ? <em className="text-primary">Je t'accompagne.</em>
        </p>
        <a
          href="https://calendly.com/besseghe-indira/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated"
        >
          <Calendar className="w-5 h-5" />
          Prendre rendez-vous
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>

    {/* Footer info */}
    <div className="py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg text-primary-foreground/80 mb-2">Indira Besseghe</p>
        <p className="font-sans text-sm text-primary-foreground/50">
          Formatrice & Conférencière — Santé mentale & Prévention du harcèlement
        </p>
        <p className="font-sans text-xs text-primary-foreground/30 mt-6">
          © {new Date().getFullYear()} Indira Besseghe. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
