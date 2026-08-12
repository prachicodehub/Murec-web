import { useEffect, useState } from "react";
import { navLinks } from "../../data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed inset-x-0 top-0 z-100 h-18 border-b transition-[background-color,backdrop-filter,border-color] duration-350 ease-out-expo ${
        scrolled
          ? "border-line bg-ink/80 backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-wide grid h-full grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[auto_1fr_auto]">
        <a
          className="font-display text-[1.55rem] font-semibold tracking-[0.18em]"
          href="#top"
          onClick={closeMenu}
        >
          MUREC
        </a>

        <nav
          className="hidden justify-center gap-[clamp(1rem,2.5vw,2.25rem)] md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-cream-soft transition-colors duration-300 ease-out-expo hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden text-[0.72rem] font-medium uppercase tracking-[0.16em] text-bronze transition-opacity duration-300 ease-out-expo hover:opacity-75 md:inline"
          href="#contact"
        >
          Enquire
        </a>

        <button
          className="relative z-110 grid size-10 place-items-center md:hidden"
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

      <div
        className={`fixed inset-0 grid place-items-center bg-ink/96 transition-opacity duration-350 ease-out-expo md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-[clamp(2rem,8vw,2.75rem)] tracking-[0.04em]"
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-4 font-sans text-[0.8rem] uppercase tracking-[0.18em] text-bronze"
            href="#contact"
            onClick={closeMenu}
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
