export default function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowClassName,
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className={eyebrowClassName ?? "text-sm font-medium text-accent"}>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-4xl font-bold text-navy md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink/80">
          {description}
        </p>
      )}
    </div>
  );
}