import Reveal from "../ui/Reveal";
import { legacy } from "../../data/content";

const Legacy = () => {
  return (
    <section
      className="section-pad bg-[linear-gradient(180deg,transparent,rgba(201,166,107,0.03)_40%,transparent),var(--color-ink)]"
      id={legacy.id}
    >
      <div className="container-page grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:gap-18">
        <Reveal>
          <p className="eyebrow">{legacy.eyebrow}</p>
          <h2 className="display mt-4 max-w-[10ch] text-[clamp(2.3rem,4.8vw,4rem)]">
            {legacy.title}
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] text-cream-muted">{legacy.body}</p>
        </Reveal>

        <Reveal
          className="relative aspect-16/11 max-w-2xl overflow-hidden md:aspect-4/5"
          delay={0.12}
        >
          <img
            src={legacy.image}
            alt="Contemporary residence exterior"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out-expo hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(18,17,16,0.35))]" />
        </Reveal>
      </div>

      <div className="container-page mt-16 grid grid-cols-1 gap-5 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6">
        {legacy.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.08 * index}>
            <p className="display text-[clamp(2.4rem,5vw,4rem)] text-cream">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[0.78rem] uppercase tracking-[0.14em] text-cream-muted">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Legacy;
