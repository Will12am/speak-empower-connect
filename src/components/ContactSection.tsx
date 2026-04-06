import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, ArrowRight, Heart } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="rdv" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Prendre rendez-vous
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Tu ressens le besoin de <em className="text-primary">faire le point</em>, de comprendre ce que tu traverses ou d'être accompagnée ?
          </h2>
          <p className="font-serif text-2xl text-primary mb-6 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6" />
            Tu n'as pas à rester seule.
          </p>
          <p className="font-sans text-lg text-muted-foreground mb-4 max-w-xl mx-auto">
            Réservez un créneau de 30 minutes pour échanger sur vos besoins en formation, conférence ou accompagnement individuel.
          </p>
          <p className="font-sans text-muted-foreground mb-10 max-w-lg mx-auto">
            Cet échange est sans engagement.
          </p>

          <a
            href="https://calendly.com/besseghe-indira/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-wider px-12 py-5 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Réserver un entretien découverte
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <p className="font-sans text-xs text-muted-foreground mt-6">
            30 min · Gratuit · Sans engagement
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
