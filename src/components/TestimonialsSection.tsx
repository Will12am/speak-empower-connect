import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const testimonials = [
    {
      quote: "L'intervention d'Indira a transformé notre façon d'aborder la santé mentale au sein de nos équipes. Un impact durable et profond.",
      author: "Marie Dupont",
      role: "DRH, Groupe Lumina",
    },
    {
      quote: "Une conférencière exceptionnelle qui sait captiver son audience tout en transmettant des messages essentiels. Nos collaborateurs en parlent encore.",
      author: "Thomas Laurent",
      role: "Directeur RSE, Espace & Co",
    },
  ];

  return (
    <section id="temoignages" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Témoignages
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            La <em className="text-primary">confiance</em> de ceux qui agissent
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-sans font-semibold text-foreground">{t.author}</p>
                <p className="font-sans text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
