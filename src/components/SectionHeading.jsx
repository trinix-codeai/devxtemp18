export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className={`text-xs font-bold uppercase tracking-[0.35em] ${light ? 'text-tan' : 'text-forest/70'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-serif text-4xl font-bold md:text-5xl ${light ? 'text-sand' : 'text-charcoal'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${light ? 'text-sand/80' : 'text-charcoal/70'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
