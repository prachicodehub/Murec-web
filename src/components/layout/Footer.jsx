import { footer, navLinks } from "../../data/content";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-ink-soft py-10 md:py-16">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-10 md:flex-row">
          <div>
            <p className="font-display text-[2rem] tracking-[0.16em]">{footer.brand}</p>
            <p className="mt-2 max-w-64 text-[0.9rem] text-cream-muted">{footer.tagline}</p>
          </div>
          <nav
            className="flex flex-wrap justify-start gap-x-7 gap-y-4 md:justify-end"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.72rem] uppercase tracking-[0.14em] text-cream-soft transition-colors duration-300 ease-out-expo hover:text-bronze"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-[0.85rem] text-cream-muted md:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
