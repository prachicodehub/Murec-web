import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";
import { hero } from "../../data/content";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate grid min-h-svh items-end overflow-hidden"
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,16,0.55)_0%,rgba(18,17,16,0.28)_35%,rgba(18,17,16,0.78)_72%,rgba(18,17,16,0.96)_100%),linear-gradient(90deg,rgba(18,17,16,0.55)_0%,transparent_45%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container-page w-full max-w-xl pt-[calc(4.5rem+4rem)] pb-22 max-sm:pb-22 md:pb-28">
        <motion.p
          className="font-display text-[clamp(3.8rem,12vw,8.5rem)] font-medium leading-[0.9] tracking-[0.08em]"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.brand}
        </motion.p>

        <motion.p
          className="mt-4 text-[0.78rem] font-medium uppercase tracking-[0.2em] text-bronze"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.tagline}
        </motion.p>

        <motion.h1
          className="display mt-7 max-w-[14ch] text-[clamp(2rem,4.4vw,3.4rem)]"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-[clamp(1rem,1.5vw,1.125rem)] text-cream-soft"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.supporting}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3.5"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
          <Button href={hero.ctaSecondary.href} variant="ghost">
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>
      </div>

      <a
        className="absolute bottom-8 right-[clamp(1rem,4vw,2.5rem)] inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-cream-muted max-sm:left-4 max-sm:right-auto"
        href="#legacy"
        aria-label="Scroll to legacy"
      >
        <span>Scroll</span>
        <span className="h-12 w-px origin-top bg-[linear-gradient(180deg,var(--color-bronze),transparent)] motion-safe:animate-scroll-pulse" />
      </a>
    </section>
  );
};

export default Hero;
