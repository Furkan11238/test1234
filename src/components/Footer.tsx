const links = [
  { label: "Home", href: "#home" },
  { label: "Diensten", href: "#diensten" },
  { label: "Realisaties", href: "#realisaties" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-dark border-t-[3px] border-primary">
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4">
            <span className="text-2xl font-black text-primary-foreground">MFK</span>
            <span className="text-xs font-bold tracking-[0.2em] text-primary-foreground/60 ml-2 uppercase">
              Stukadoors
            </span>
          </div>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            20 jaar vakmanschap in Limburg. Kwaliteit, precisie en betrouwbaarheid.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
            Snelle Links
          </h4>
          <div className="space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <div className="space-y-2 text-sm text-primary-foreground/50">
            <p>📞 0488 83 93 92</p>
            <p>✉ info@mfkstukadoors.be</p>
            <p>📍 Pastoor Paquaylaan 55, 3550 Heusden-Zolder</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-6">
      <div className="container mx-auto px-6 text-center text-xs text-primary-foreground/40">
        © 2025 MFK Stukadoors · Alle rechten voorbehouden · Heusden-Zolder
      </div>
    </div>
  </footer>
);

export default Footer;
