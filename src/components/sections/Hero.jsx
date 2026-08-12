import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import { hero } from "../../data/content";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate grid min-h-[100svh] items-end overflow-hidden"
      id="top"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img
          src={hero.image}
          alt=""
          className="h-full w-full scale-105 object-cover object-center motion-safe:animate-hero-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,16,0.5)_0%,rgba(18,17,16,0.22)_32%,rgba(18,17,16,0.72)_70%,rgba(18,17,16,0.96)_100%),linear-gradient(90deg,rgba(18,17,16,0.6)_0%,transparent_48%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="ambient-orb -left-16 top-24 size-56 bg-bronze/15 sm:size-72" />
        <div
          className="ambient-orb right-[-4rem] bottom-24 size-64 bg-cream/10 sm:size-80"
          style={{ animationDelay: "1.4s" }}
        />
      </div>

      <div className="container-page relative w-full pb-20 pt-[calc(4.5rem+2.5rem)] sm:pb-24 sm:pt-[calc(4.5rem+3.5rem)] md:pb-28 lg:max-w-3xl">
        <motion.div
          className="glass-panel max-w-2xl rounded-2xl p-5 sm:rounded-3xl sm:p-8 md:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-[clamp(2.8rem,11vw,7.5rem)] font-medium leading-[0.9] tracking-[0.08em]">
            {hero.brand}
          </p>

          <p className="mt-3 flex flex-wrap items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-bronze sm:mt-4 sm:text-[0.78rem] sm:tracking-[0.2em]">
            <span className="timeless-cross" aria-hidden="true" />
            {hero.tagline}
          </p>

          <h1 className="display mt-5 max-w-[14ch] text-[clamp(1.7rem,4.2vw,3.2rem)] sm:mt-7">
            {hero.headline}
          </h1>

          <p className="mt-4 max-w-xl text-[0.95rem] text-cream-soft sm:mt-5 sm:text-[clamp(1rem,1.5vw,1.125rem)]">
            {hero.supporting}
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-9 sm:gap-3.5">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            <Button href={hero.ctaSecondary.href} variant="ghost">
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </motion.div>
      </div>

      <a
        className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-cream-muted sm:bottom-8 sm:left-auto sm:right-[clamp(1rem,4vw,2.5rem)] sm:translate-x-0"
        href="#legacy"
        aria-label="Scroll to legacy"
      >
        <span>Scroll</span>
        <span className="h-10 w-px origin-top bg-[linear-gradient(180deg,var(--color-bronze),transparent)] motion-safe:animate-scroll-pulse sm:h-12" />
      </a>
    </section>
  );
};

export default Hero;
