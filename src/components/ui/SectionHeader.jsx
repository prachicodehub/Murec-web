import Reveal from "./Reveal";

const SectionHeader = ({ eyebrow, title, intro, align = "left" }) => {
  const centered = align === "center";

  return (
    <Reveal
      className={`mb-16 max-w-xl ${centered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.75rem)]">{title}</h2>
      {intro ? (
        <p
          className={`mt-5 max-w-xl text-[1.05rem] text-cream-muted ${
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
