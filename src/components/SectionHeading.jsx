/**
 * Reusable section heading with optional eyebrow label and subtitle.
 * Set `light` for use on dark (navy) backgrounds.
 */
const SectionHeading = ({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignment}`}>
      {label && (
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-orange mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight mb-4 tracking-tight ${
          light ? "text-white" : "text-navy-light"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? "text-white/65" : "text-navy-light/55"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

