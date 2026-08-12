import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { principles } from "../../data/content";

const Principles = () => {
  return (
    <section
      className="section-pad border-y border-line bg-ink-soft"
      id={principles.id}
    >
      <div className="container-page">
        <SectionHeader
          eyebrow={principles.eyebrow}
          title={principles.title}
          intro={principles.intro}
        />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {principles.items.map((item, index) => (
            <Reveal
              key={item.number}
              className="grid grid-cols-[auto_1fr] gap-5 border-t border-line px-0 py-8 transition-colors duration-350 ease-out-expo hover:bg-cream/[0.02] md:px-6 md:odd:border-r"
              delay={0.06 * index}
            >
              <span className="pt-1.5 font-display text-[1.1rem] tracking-[0.08em] text-bronze">
                {item.number}
              </span>
              <div>
                <h3 className="display text-[clamp(1.8rem,3vw,2.4rem)]">{item.title}</h3>
                <p className="mt-3 max-w-md text-cream-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
