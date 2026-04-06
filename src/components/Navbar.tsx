import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "À propos", href: "#apropos" },
  { label: "Missions & Offres", href: "#missions" },
  { label: "Sur le terrain", href: "#terrain" },
  { label: "Témoignages", href: "#temoignages" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById("rdv")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`font-serif text-xl font-bold transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Indira Besseghe
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollToCalendly}
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-6 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated"
          >
            <Calendar className="w-4 h-4" />
            Prendre rendez-vous
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToCalendly}
              className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 mt-2"
            >
              <Calendar className="w-4 h-4" />
              Prendre rendez-vous
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
