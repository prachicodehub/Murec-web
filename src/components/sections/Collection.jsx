import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import { collection } from "../../data/content";

const Collection = () => {
  return (
    <section className="section-pad" id={collection.id}>
      <div className="container-page">
        <SectionHeader
          eyebrow={collection.eyebrow}
          title={collection.title}
          intro={collection.intro}
        />
      </div>

      <div className="container-wide grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {collection.projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            delay={0.08 * index}
          >
            <article className="group relative h-full overflow-hidden rounded-2xl">
              <div
                className={`relative overflow-hidden bg-ink-elevated ${
                  index === 2
                    ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[3/4]"
                    : "aspect-[4/5] sm:aspect-[3/4]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(18,17,16,0.75)_100%)]" />

                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <div className="glass-panel rounded-xl p-4 sm:p-5">
                    <p className="flex items-center gap-2 text-[0.68rem] tracking-[0.18em] text-bronze">
                      <span className="timeless-cross" aria-hidden="true" />
                      0{index + 1}
                    </p>
                    <h3 className="display mt-2 text-[clamp(1.45rem,2.4vw,2.1rem)]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[0.9rem] text-cream-muted sm:text-[0.95rem]">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Collection;
