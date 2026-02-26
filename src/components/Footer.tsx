const Footer = () => (
  <footer className="py-10 bg-foreground">
    <div className="container mx-auto px-6 text-center">
      <p className="font-serif text-lg text-primary-foreground/80 mb-2">Indira Besseghe</p>
      <p className="font-sans text-sm text-primary-foreground/50">
        Formatrice & Conférencière — Santé mentale & Prévention du harcèlement
      </p>
      <p className="font-sans text-xs text-primary-foreground/30 mt-6">
        © {new Date().getFullYear()} Indira Besseghe. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
