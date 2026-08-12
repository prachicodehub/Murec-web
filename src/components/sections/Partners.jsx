import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { partners } from "../../data/content";

const Partners = () => {
  return (
    <section className="section-pad relative overflow-hidden" id={partners.id}>
      <div
        className="ambient-orb -right-24 top-20 size-80 bg-bronze/[0.08]"
        aria-hidden="true"
      />

      <div className="container-page">
        <SectionHeader eyebrow={partners.eyebrow} title={partners.title} />

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
          {partners.quotes.map((item, index) => (
            <Reveal key={item.name} delay={0.05 * index}>
              <blockquote className="glass-panel flex h-full flex-col rounded-2xl p-5 sm:p-6 md:p-7">
                <span className="timeless-cross mb-4" aria-hidden="true" />
                <p className="font-display text-[clamp(1.15rem,2.2vw,1.5rem)] leading-snug text-cream-soft">
                  “{item.quote}”
                </p>
                <footer className="mt-auto pt-5 text-[0.7rem] uppercase tracking-[0.16em] text-bronze sm:text-[0.72rem]">
                  {item.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 border-t border-line pt-8 sm:mt-16 sm:pt-10">
          <p className="eyebrow">Our Associations</p>
          <div className="mt-6 grid grid-cols-2 gap-3 xs:grid-cols-3 sm:mt-7 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {partners.associations.map((logo, index) => (
              <div
                className="glass-soft grid min-h-[4.25rem] place-items-center rounded-xl p-3 sm:min-h-[4.75rem]"
                key={`${logo}-${index}`}
              >
                <img
                  src={logo}
                  alt={`Association partner ${index + 1}`}
                  loading="lazy"
                  className="max-h-9 w-auto max-w-full object-contain opacity-75 grayscale brightness-125 transition-[opacity,filter] duration-300 ease-out-expo hover:opacity-100 hover:grayscale-0 hover:brightness-100 sm:max-h-10"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Partners;
