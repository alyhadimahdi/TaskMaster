import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageHeader from '../components/ui/PageHeader';
import ServiceIcon from '../components/ui/ServiceIcon';
import { SERVICES, SITE } from '../constants/site';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <section className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {SITE.course}
          </p>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Organize your work.
            <span className="mt-2 block gradient-text">Achieve more every day.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{SITE.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/services" size="lg">
              Explore Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-sky-400/20 blur-2xl" />
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-0 text-white shadow-2xl shadow-indigo-900/30">
            <div className="border-b border-white/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Dashboard</p>
                  <h2 className="mt-1 text-xl font-bold">Today&apos;s Overview</h2>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/30">
                  On track
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 p-6">
              {[
                { label: 'Tasks', value: '12' },
                { label: 'Streak', value: '7d' },
                { label: 'Focus', value: 'High' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/8 p-3 ring-1 ring-white/10">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="mt-1 text-xl font-extrabold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 px-6 pb-6">
              {[
                'Plan your weekly workflow',
                'Complete priority tasks',
                'Review progress on Services',
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-600/50 text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-24">
        <PageHeader
          eyebrow="Features"
          title="Everything you need to stay on track"
          description="A focused set of tools designed to simplify planning and boost productivity."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Card key={service.title} hover glass className="group">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-sky-50 ring-1 ring-indigo-100 transition-transform duration-300 group-hover:scale-110">
                <ServiceIcon name={service.icon} />
              </div>
              <span className="text-xs font-bold text-indigo-400">0{i + 1}</span>
              <h3 className="mt-1 font-bold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-sky-600 p-8 shadow-2xl shadow-indigo-600/25 sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-sky-400/20 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">Get started</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Ready to boost your productivity?</h2>
              <p className="mt-3 max-w-xl text-indigo-100">
                Try the interactive task manager on our Services page or reach out via Contact.
              </p>
            </div>
            <Button to="/services" variant="white" className="shrink-0">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
