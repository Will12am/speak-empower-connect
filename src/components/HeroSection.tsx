import heroImage from "@/assets/hero-conference.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Indira Besseghe en conférence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center md:text-left md:max-w-3xl">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-sand-dark mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Formatrice & Conférencière
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-primary-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Libérer la parole,
          <br />
          <em className="text-rose-light">Transformer</em> les cultures
        </h1>
        <p className="font-sans text-lg md:text-xl text-sand/80 max-w-xl mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Experte en santé mentale en entreprise et lutte contre le harcèlement sexiste et sexuel.
        </p>
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#contact"
            className="inline-block font-sans font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 border-2 border-sand/40 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-sand/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
