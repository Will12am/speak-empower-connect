import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const testimonials = [
    {
      quote: "Je recommande vivement Indira pour ses ateliers ! C'est une intervenante dynamique et sensible qui sait créer un cadre bienveillant et sécurisant, où chacun(e) peut s'exprimer librement. Elle maîtrise parfaitement son sujet, et son expertise permet à chacun de repartir mieux équipé(e) et plus confiant(e).",
      author: "Olivia",
      role: "Psychologue",
    },
    {
      quote: "Ce qui distingue Indira des autres, c'est une écoute authentique et sans jugement, une bienveillance constante et des conseils qui accompagnent durablement. À travers différentes épreuves de ma vie, son soutien a été précieux et ses mots ont toujours su toucher juste. Aujourd'hui je suis une femme épanouie, et je ne peux pas nier la part qu'elle a dans ce chemin parcouru. Vous pouvez lui faire confiance les yeux fermés.",
      author: "Temitope",
      role: "",
    },
    {
      quote: "Madame Besseghe est d'une générosité et d'une précision rare dans son accompagnement et son écoute. C'est une personne passionnée par ce qu'elle fait et dévouée dans l'accompagnement des jeunes, qui réussit sans peine à déceler le cœur du problème puis à prodiguer les meilleurs conseils. Ses ateliers à l'attention des jeunes sont des moments d'exception au cours desquels chacun se sent concerné, à sa place et où la parole se libère dans la bienveillance et la restauration de soi. Vous ne voulez pas manquer cela !!",
      author: "Claire",
      role: "",
    },
    {
      quote: "Indira est une accompagnatrice exceptionnelle. Lors de notre consultation en live, elle a fait preuve d'une écoute profonde, d'une grande empathie et d'un professionnalisme remarquable. Grâce à elle, j'ai pu clarifier mes pensées et avancer avec plus de sérénité et de confiance. Je recommande vivement ses services à toute personne en quête d'un accompagnement sérieux, humain et bienveillant.",
      author: "Rose Seye",
      role: "",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 shrink-0" />
              <blockquote className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-6 italic flex-1">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-sans font-semibold text-foreground">{t.author}</p>
                {t.role && <p className="font-sans text-sm text-muted-foreground">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
