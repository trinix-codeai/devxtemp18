export default function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 focus:outline-none focus:ring-2 focus:ring-tan focus:ring-offset-2 focus:ring-offset-transparent';
  const variants = {
    primary: 'bg-tan text-charcoal hover:bg-[#e0b67d]',
    secondary: 'border border-white/30 bg-white/10 text-sand hover:bg-white/20',
    dark: 'bg-forest text-sand hover:bg-[#24563f]',
    ghost: 'border border-forest/20 bg-white text-forest hover:border-forest hover:bg-forest hover:text-sand',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
