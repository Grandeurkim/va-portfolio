import Link from "next/link";

const styles = {
  primary:
    "bg-accent text-white hover:bg-accent-dark",
  secondary:
    "bg-transparent text-navy border border-navy/20 hover:border-navy/40",
  onDark:
    "bg-white text-navy hover:bg-mist",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors duration-150";
  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    const isHashLink = href.startsWith("#");

    if (isHashLink) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
