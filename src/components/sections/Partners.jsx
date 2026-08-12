import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { partners } from "../../data/content";

const Partners = () => {
  return (
    <section className="section-pad" id={partners.id}>
      <div className="container-page">
        <SectionHeader eyebrow={partners.eyebrow} title={partners.title} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8">
          {partners.quotes.map((item, index) => (
            <Reveal
              key={item.name}
              className="border-t border-line py-7"
              delay={0.05 * index}
            >
              <blockquote>
                <p className="font-display text-[clamp(1.25rem,2.2vw,1.55rem)] leading-snug text-cream-soft">
                  “{item.quote}”
                </p>
                <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.16em] text-bronze">
                  {item.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-line pt-10">
          <p className="eyebrow">Our Associations</p>
          <div className="mt-7 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partners.associations.map((logo, index) => (
              <div
                className="grid min-h-[4.5rem] place-items-center border border-line bg-cream/[0.03] p-3"
                key={`${logo}-${index}`}
              >
                <img
                  src={logo}
                  alt={`Association partner ${index + 1}`}
                  loading="lazy"
                  className="max-h-10 w-auto max-w-full object-contain opacity-75 grayscale brightness-125 transition-[opacity,filter] duration-300 ease-out-expo hover:opacity-100 hover:grayscale-0 hover:brightness-100"
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
