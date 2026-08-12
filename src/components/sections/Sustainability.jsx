import Reveal from "../ui/Reveal";
import { sustainability } from "../../data/content";

const Sustainability = () => {
  return (
    <section className="section-pad bg-ink-elevated" id={sustainability.id}>
      <div className="container-page grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-18">
        <Reveal className="aspect-16/10 overflow-hidden md:aspect-5/4">
          <img
            src={sustainability.image}
            alt="Light-filled modern living space"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">{sustainability.eyebrow}</p>
          <h2 className="display mt-4 max-w-[12ch] text-[clamp(2.1rem,4vw,3.4rem)]">
            {sustainability.title}
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] text-cream-muted">
            {sustainability.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Sustainability;
