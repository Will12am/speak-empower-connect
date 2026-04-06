import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, ArrowRight } from "lucide-react";
import portraitImg from "@/assets/portrait-indira.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("rdv")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apropos" className="py-24 md:py-32 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Portrait */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={portraitImg}
                alt="Portrait d'Indira Besseghe"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/20 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
              À propos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Ma mission : <em className="text-primary">Redonner le pouvoir d'agir</em>
            </h2>
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Indira Besseghe est formatrice et conférencière spécialisée dans la santé mentale et la prévention du harcèlement sexiste et sexuel.
              </p>
              <p>
                Forte de plusieurs années d'expérience sur le terrain, elle accompagne les organisations dans leur transformation culturelle et les individus.
              </p>
              <p>
                À la croisée du terrain, de l'engagement associatif au sein de l'association <strong className="text-foreground">Rayons d'Espoir et d'Amour (R.E.A)</strong> et de la prise de parole publique, elle accompagne celles et ceux qui veulent comprendre, sortir de schémas enfermant et reprendre le pouvoir sur leur vie.
              </p>
              <p>
                Son approche repose sur trois piliers : <strong className="text-foreground">la clarté, la bienveillance et l'action.</strong>
              </p>
              <p>
                Elle ne se contente pas d'écouter. Elle aide à nommer, à structurer et à avancer.
              </p>
              <p>
                Sa conviction profonde : chaque organisation a le pouvoir de devenir un lieu où chacun·e peut s'épanouir en toute sécurité. C'est cette vision qui guide chacune de ses interventions.
              </p>
            </div>

            {/* Mini CTA */}
            <div className="mt-8 p-6 bg-secondary rounded-xl border border-border/50">
              <p className="font-serif text-lg text-foreground mb-4">
                Besoin de faire le point ? Réserve un premier échange confidentiel.
              </p>
              <button
                onClick={scrollToCalendly}
                className="group inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated"
              >
                <Calendar className="w-4 h-4" />
                Réserver mon échange
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
