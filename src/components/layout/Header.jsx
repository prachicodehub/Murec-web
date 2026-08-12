import { useEffect, useState } from "react";
import { navLinks } from "../../data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-[padding,background-color] duration-350 ease-out-expo ${
        scrolled ? "pt-2 sm:pt-3" : "pt-0"
      }`}
    >
      <div
        className={`container-wide transition-[max-width,border-radius,background-color,backdrop-filter,border-color] duration-350 ease-out-expo ${
          scrolled
            ? "glass-strong mx-auto max-w-[min(1180px,calc(100%-1rem))] rounded-full border-white/10 sm:max-w-[min(1180px,calc(100%-1.5rem))]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-3 px-3 sm:h-16 sm:gap-6 sm:px-5 md:grid-cols-[auto_1fr_auto] lg:h-18">
          <a
            className="font-display text-[1.25rem] font-semibold tracking-[0.16em] sm:text-[1.45rem] sm:tracking-[0.18em]"
            href="#top"
            onClick={closeMenu}
          >
            MUREC
          </a>

          <nav
            className="hidden justify-center gap-4 lg:flex lg:gap-7 xl:gap-9"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            className="glass-soft hidden rounded-full px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-bronze transition-[background-color,border-color] duration-300 ease-out-expo hover:border-bronze/40 hover:bg-bronze/10 lg:inline-flex"
            href="#contact"
          >
            Enquire
          </a>

          <button
            className="relative z-110 grid size-10 place-items-center lg:hidden"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`absolute h-0.5 w-[1.35rem] bg-cream transition-[transform,opacity] duration-350 ease-out-expo ${
                menuOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-0.5 w-[1.35rem] bg-cream transition-[transform,opacity] duration-350 ease-out-expo ${
                menuOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 grid place-items-center bg-ink/70 backdrop-blur-2xl transition-opacity duration-350 ease-out-expo lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="glass-panel mx-4 flex w-[min(24rem,calc(100%-2rem))] flex-col items-center gap-5 rounded-3xl px-6 py-10"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-[clamp(1.75rem,7vw,2.4rem)] tracking-[0.04em] transition-colors hover:text-bronze"
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-2 inline-flex items-center gap-3 font-sans text-[0.78rem] uppercase tracking-[0.18em] text-bronze"
            href="#contact"
            onClick={closeMenu}
          >
            <span className="timeless-cross" aria-hidden="true" />
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
