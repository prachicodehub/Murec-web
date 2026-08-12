import Reveal from "./Reveal";

const SectionHeader = ({ eyebrow, title, intro, align = "left" }) => {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-10 max-w-xl sm:mb-12 md:mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2 className="display mt-3 text-[clamp(1.9rem,4.8vw,3.75rem)] sm:mt-4">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 max-w-xl text-[0.98rem] text-cream-muted sm:mt-5 sm:text-[1.05rem] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
};

export default SectionHeader;
