const variants = {
  primary:
    "border-transparent bg-cream text-ink hover:bg-bronze hover:text-ink",
  ghost:
    "border-line-strong bg-transparent text-cream hover:border-bronze hover:text-bronze",
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
    "inline-flex min-h-12 items-center justify-center border px-6 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-[background-color,color,border-color,transform] duration-350 ease-out-expo max-sm:w-full cursor-pointer",
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
