import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:from-indigo-700 hover:to-indigo-600 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5',
  secondary:
    'border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur hover:border-indigo-200 hover:text-indigo-700 hover:bg-white hover:shadow-md',
  ghost: 'text-slate-600 hover:bg-slate-100/80 hover:text-indigo-700',
  white: 'bg-white text-indigo-700 shadow-lg hover:bg-indigo-50 hover:-translate-y-0.5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
