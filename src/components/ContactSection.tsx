import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — form submission logic
    alert("Merci pour votre message ! Indira vous répondra dans les plus brefs délais.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
              Contact
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Parlons de votre <em className="text-primary">projet</em>
            </h2>
            <p className="font-sans text-muted-foreground">
              Vous souhaitez organiser une formation ou une conférence ? Écrivez-moi.
            </p>
            <a
              href="mailto:contact@indirabesseghe.com"
              className="inline-block mt-3 font-sans text-sm text-primary hover:text-primary/80 transition-colors duration-300 underline underline-offset-4"
            >
              contact@indirabesseghe.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-background border border-border font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="company" className="block font-sans text-sm font-medium text-foreground mb-2">
                  Entreprise
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-background border border-border font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300"
                  placeholder="Votre entreprise"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-300 resize-none"
                placeholder="Décrivez votre projet ou votre besoin..."
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-rose-dark transition-all duration-300 hover:shadow-elevated"
              >
                Envoyer
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
