export default function Card({ children, className = '', hover = false, glass = false }) {
  return (
    <div
      className={[
        'rounded-2xl border p-6 shadow-sm',
        glass
          ? 'glass shadow-lg shadow-slate-900/5'
          : 'border-slate-200/80 bg-white shadow-slate-900/5',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
