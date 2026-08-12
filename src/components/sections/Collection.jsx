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

      <div className="container-wide grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {collection.projects.map((project, index) => (
          <Reveal
            key={project.title}
            className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            delay={0.08 * index}
          >
            <article className="group h-full">
              <div
                className={`overflow-hidden bg-ink-elevated ${
                  index === 2
                    ? "aspect-3/4 sm:aspect-16/10 lg:aspect-3/4"
                    : "aspect-3/4"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <p className="text-[0.7rem] tracking-[0.18em] text-bronze">
                  0{index + 1}
                </p>
                <h3 className="display mt-2 text-[clamp(1.7rem,2.6vw,2.2rem)]">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] text-cream-muted">
                  {project.subtitle}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Collection;
