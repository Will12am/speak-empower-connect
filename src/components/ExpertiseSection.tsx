import { Brain, ShieldAlert } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExpertiseSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const expertises = [
    {
      icon: Brain,
      title: "Santé Mentale",
      description:
        "Formations et conférences pour sensibiliser vos équipes aux enjeux de la santé mentale au travail. Prévention du burn-out, gestion du stress et création d'environnements de travail bienveillants.",
    },
    {
      icon: ShieldAlert,
      title: "Harcèlement Sexiste & Sexuel",
      description:
        "Programmes de prévention et de sensibilisation au harcèlement en milieu professionnel. Accompagnement des organisations vers des cultures d'entreprise respectueuses et inclusives.",
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-32 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Expertise & Missions
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Des interventions <em className="text-primary">sur mesure</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {expertises.map((item, i) => (
            <div
              key={item.title}
              className="group bg-background rounded-2xl p-10 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-foreground">{item.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
