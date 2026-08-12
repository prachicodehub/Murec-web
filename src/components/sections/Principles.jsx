import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { principles } from "../../data/content";

const Principles = () => {
  return (
    <section
      className="section-pad relative overflow-hidden border-y border-line bg-ink-soft"
      id={principles.id}
    >
      <div
        className="ambient-orb -left-20 bottom-0 size-80 bg-cream/[0.04]"
        aria-hidden="true"
      />

      <div className="container-page">
        <SectionHeader
          eyebrow={principles.eyebrow}
          title={principles.title}
          intro={principles.intro}
        />

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {principles.items.map((item, index) => (
            <Reveal key={item.number} delay={0.06 * index}>
              <article className="glass-panel group grid h-full grid-cols-[auto_1fr] gap-4 rounded-2xl p-5 transition-[transform,background-color] duration-350 ease-out-expo hover:-translate-y-0.5 hover:bg-white/[0.06] sm:gap-5 sm:p-6 md:p-7">
                <span className="pt-1 font-display text-[1rem] tracking-[0.08em] text-bronze sm:text-[1.1rem]">
                  {item.number}
                </span>
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="display text-[clamp(1.55rem,3vw,2.3rem)]">
                      {item.title}
                    </h3>
                    <span
                      className="timeless-cross opacity-0 transition-opacity duration-350 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="max-w-md text-[0.95rem] text-cream-muted sm:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
