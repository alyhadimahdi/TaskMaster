import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants/navigation';
import { SITE, TECH_STACK } from '../constants/site';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-slate-800/50 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-600/30">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-xl font-extrabold">{SITE.name}</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">{SITE.description}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Navigation</p>
            <nav className="mt-4 flex flex-wrap gap-2">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [
                      'rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-200',
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'text-slate-400 hover:bg-white/10 hover:text-white',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. {SITE.course}.</p>
          <p className="font-medium text-slate-600">{TECH_STACK.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
