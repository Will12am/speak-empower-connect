import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-conference.jpg";
import conferenceImg from "@/assets/conference-2.jpg";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  const items = [
    { type: "video" as const, image: heroImg, label: "Conférence — Santé mentale au travail", link: "https://www.youtube.com/watch?v=OSvaOstCE10" },
    { type: "video" as const, image: conferenceImg, label: "Intervention — Prévention du harcèlement", link: "https://youtu.be/F0X8Y4U4W0w" },
    { type: "photo" as const, image: gallery1, label: "Formation en entreprise" },
    { type: "photo" as const, image: gallery3, label: "Engagement associatif" },
    { type: "photo" as const, image: gallery4, label: "Conférence — Conseil des Gabonais de France" },
  ];

  return (
    <section id="terrain" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-16">
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Sur le terrain
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            En <em className="text-primary">action</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const inner = (
              <>
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans text-sm text-primary-foreground/90">{item.label}</p>
                </div>
              </>
            );

            if (item.type === "video" && item.link) {
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer block"
                >
                  {inner}
                </a>
              );
            }

            return (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
