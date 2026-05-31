import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navigation';
import { SITE } from '../constants/site';
import Button from './ui/Button';

const linkClass = ({ isActive }) =>
  [
    'rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200',
    isActive
      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
      : 'text-slate-600 hover:bg-white hover:text-indigo-700 hover:shadow-sm',
  ].join(' ');

const mobileLinkClass = ({ isActive }) =>
  [
    'block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200',
    isActive
      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
      : 'text-slate-700 hover:bg-indigo-50 hover:text-indigo-700',
  ].join(' ');

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 glass shadow-sm shadow-slate-900/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-transform duration-300 group-hover:scale-105">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <div>
            <p className="text-base font-extrabold tracking-tight text-slate-900">{SITE.name}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{SITE.tagline}</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 rounded-2xl border border-slate-200/60 bg-slate-50/80 p-1.5 shadow-inner md:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/services" size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition-colors hover:border-indigo-200 hover:text-indigo-700 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200/80 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="space-y-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={mobileLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Button to="/services" className="mt-4 w-full">
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
