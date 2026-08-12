import { footer, navLinks } from "../../data/content";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-soft py-10 sm:py-12 md:py-16">
      <div
        className="ambient-orb -right-10 bottom-0 size-56 bg-bronze/10"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="glass-panel flex flex-col items-start justify-between gap-8 rounded-2xl p-5 sm:p-7 md:flex-row md:p-8">
          <div>
            <p className="font-display text-[1.7rem] tracking-[0.14em] sm:text-[2rem] sm:tracking-[0.16em]">
              {footer.brand}
            </p>
            <p className="mt-2 max-w-64 text-[0.88rem] text-cream-muted sm:text-[0.9rem]">
              {footer.tagline}
            </p>
          </div>
          <nav
            className="flex flex-wrap justify-start gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 md:justify-end"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] uppercase tracking-[0.14em] text-cream-soft transition-colors duration-300 ease-out-expo hover:text-bronze sm:text-[0.72rem]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-5 flex flex-col justify-between gap-3 px-1 text-[0.8rem] text-cream-muted sm:mt-6 sm:flex-row sm:text-[0.85rem]">
          <p>{footer.copyright}</p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
