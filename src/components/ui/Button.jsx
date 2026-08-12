const variants = {
  primary:
    "border-transparent bg-cream text-ink hover:bg-bronze hover:text-ink",
  ghost:
    "glass-soft text-cream hover:border-bronze/50 hover:bg-bronze/10 hover:text-bronze",
  accent: "border-transparent bg-bronze text-ink hover:bg-cream",
};

const Button = ({
  href,
  children,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}) => {
  const classes = [
    "inline-flex min-h-11 items-center justify-center border px-5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-[background-color,color,border-color,transform,backdrop-filter] duration-350 ease-out-expo cursor-pointer sm:min-h-12 sm:px-6 sm:py-3.5 sm:text-[0.78rem] max-xs:w-full",
    variants[variant] ?? variants.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
