export default function PageHeader({ eyebrow, title, description, centered = true }) {
  return (
    <header className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
          {eyebrow}
        </span>
      )}
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      )}
      <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-sky-400 ${centered ? 'mx-auto' : ''}`} />
    </header>
  );
}
