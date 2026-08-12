import Reveal from "../ui/Reveal";
import { sustainability } from "../../data/content";

const Sustainability = () => {
  return (
    <section
      className="section-pad relative overflow-hidden bg-ink-elevated"
      id={sustainability.id}
    >
      <div
        className="ambient-orb left-1/2 top-0 size-96 -translate-x-1/2 bg-bronze/10"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-16">
        <Reveal className="glass-soft order-2 overflow-hidden rounded-2xl p-1.5 md:order-1 md:aspect-[5/4]">
          <div className="aspect-[16/10] overflow-hidden rounded-[0.85rem] md:aspect-auto md:h-full">
            <img
              src={sustainability.image}
              alt="Light-filled modern living space"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2" delay={0.1}>
          <div className="glass-panel rounded-2xl p-5 sm:p-7 md:p-8">
            <p className="eyebrow">{sustainability.eyebrow}</p>
            <h2 className="display mt-4 max-w-[14ch] text-[clamp(1.9rem,4vw,3.3rem)]">
              {sustainability.title}
            </h2>
            <p className="mt-5 max-w-xl text-[0.98rem] text-cream-muted sm:mt-6 sm:text-[1.05rem]">
              {sustainability.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sustainability;
