import Reveal from "../ui/Reveal";
import { legacy } from "../../data/content";

const Legacy = () => {
  return (
    <section
      className="section-pad relative overflow-hidden bg-[linear-gradient(180deg,transparent,rgba(201,166,107,0.03)_40%,transparent),var(--color-ink)]"
      id={legacy.id}
    >
      <div
        className="ambient-orb right-[-5rem] top-10 size-72 bg-bronze/10"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-16">
        <Reveal>
          <p className="eyebrow">{legacy.eyebrow}</p>
          <h2 className="display mt-4 max-w-[12ch] text-[clamp(2rem,5vw,4rem)]">
            {legacy.title}
          </h2>
          <p className="mt-5 max-w-xl text-[0.98rem] text-cream-muted sm:mt-6 sm:text-[1.05rem]">
            {legacy.body}
          </p>
        </Reveal>

        <Reveal
          className="glass-soft relative aspect-[16/11] w-full max-w-2xl overflow-hidden rounded-2xl p-1.5 md:aspect-[4/5] md:justify-self-end"
          delay={0.12}
        >
          <div className="relative h-full overflow-hidden rounded-[0.85rem]">
            <img
              src={legacy.image}
              alt="Contemporary residence exterior"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out-expo hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(18,17,16,0.45))]" />
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-10 grid grid-cols-1 gap-3 border-t border-line pt-8 sm:mt-14 sm:grid-cols-3 sm:gap-4 sm:pt-10">
        {legacy.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.08 * index}>
            <div className="glass-panel h-full rounded-2xl px-5 py-6 sm:px-6 sm:py-7">
              <p className="display text-[clamp(2.1rem,5vw,3.6rem)] text-cream">
                {stat.value}
              </p>
              <p className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-cream-muted sm:text-[0.78rem]">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Legacy;
