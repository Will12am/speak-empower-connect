import { useScrollReveal } from "@/hooks/useScrollReveal";
import portraitImg from "@/assets/portrait-indira.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

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
            {/* Decorative element */}
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
                Indira Besseghe est formatrice et conférencière spécialisée dans la santé mentale en entreprise et la prévention du harcèlement sexiste et sexuel. Forte de plusieurs années d'expérience sur le terrain, elle accompagne les organisations dans leur transformation culturelle.
              </p>
              <p>
                Son approche allie expertise technique, écoute bienveillante et pédagogie engageante. Elle intervient auprès de grandes entreprises, d'institutions publiques et d'associations pour créer des espaces de travail plus sains, plus justes et plus humains.
              </p>
              <p>
                Engagée au-delà du cadre professionnel, Indira est également Secrétaire Générale de l'association <strong className="text-foreground">Rayons d'Espoir et d'Amour (R.E.A)</strong>, qui œuvre pour promouvoir la solidarité et l'entraide en France et à l'étranger, apporter une aide alimentaire et matérielle aux personnes dans le besoin, et secourir et accompagner celles en difficulté morale et émotionnelle.
              </p>
              <p>
                Sa conviction profonde : chaque organisation a le pouvoir de devenir un lieu où chacun·e peut s'épanouir en toute sécurité. C'est cette vision qui guide chacune de ses interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
