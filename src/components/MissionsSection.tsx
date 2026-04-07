import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Building2, GraduationCap, Calendar, ArrowRight } from "lucide-react";

const MissionsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("rdv")?.scrollIntoView({ behavior: "smooth" });
  };

  const missions = [
    {
      icon: User,
      title: "Accompagnement individuel",
      description: "Aider les personnes à sortir de la surcharge mentale, comprendre leurs blocages et retrouver leur équilibre.",
      cta: "Réserver un entretien découverte",
      action: "calendly",
    },
    {
      icon: Building2,
      title: "Entreprises & institutions",
      description: "Former, sensibiliser et accompagner les équipes sur les enjeux de santé mentale, de prévention et de climat de travail.",
      cta: "Prendre contact",
      action: "form",
    },
    {
      icon: GraduationCap,
      title: "Associations & écoles",
      description: "Intervenir auprès des jeunes pour libérer la parole, renforcer la confiance et prévenir les violences et le harcèlement.",
      cta: "Prendre contact",
      action: "form",
    },
  ];

  return (
    <section id="missions" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Missions & Offres
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Comment je peux <em className="text-primary">t'aider</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {missions.map((item, i) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 md:p-10 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 flex flex-col"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">{item.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8 flex-1">{item.description}</p>
              {item.action === "calendly" ? (
                <button
                  onClick={scrollToCalendly}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-primary hover:text-rose-dark transition-colors duration-300"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              ) : (
                <a
                  href="https://forms.gle/ZrdiJgKWSABwFCax8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-primary hover:text-rose-dark transition-colors duration-300"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA fort */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-serif text-xl md:text-2xl text-foreground mb-6">
            Tu n'as pas à rester seul·e avec ce que tu traverses.<br />
            <em className="text-primary">Réserve ton échange dès maintenant.</em>
          </p>
          <button
            onClick={scrollToCalendly}
            className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-wider px-12 py-5 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Réserver un entretien découverte
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
