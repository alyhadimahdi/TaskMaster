import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageHeader from '../components/ui/PageHeader';
import { SITE, TECH_STACK } from '../constants/site';

const PAGES = [
  { title: 'Home', desc: 'Overview of the app and its core value.', color: 'from-indigo-500 to-indigo-600' },
  { title: 'Services', desc: 'Feature showcase and live task manager demo.', color: 'from-sky-500 to-cyan-500' },
  { title: 'About', desc: 'Project background, goals, and tech stack.', color: 'from-violet-500 to-purple-600' },
  { title: 'Contact', desc: 'Get in touch through a clean contact form.', color: 'from-emerald-500 to-teal-500' },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <PageHeader
        eyebrow="About"
        title="A project built for CSCI390"
        description="TaskMaster is a web programming project that demonstrates React development, responsive design, and clean UI/UX principles."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Card glass hover>
          <div className="mb-4 inline-flex rounded-lg bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700">
            Purpose
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Project Purpose</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            This application solves a real-world productivity problem by helping users create, track, and
            complete daily tasks. It was designed to meet academic requirements while delivering a polished,
            professional user experience.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The focus is on clarity, responsiveness, and usability — ensuring the app works seamlessly across
            desktop and mobile devices.
          </p>
        </Card>

        <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-950 to-indigo-950 p-0 text-white shadow-xl shadow-indigo-900/20">
          <div className="p-6">
            <div className="mb-4 inline-flex rounded-lg bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-200">
              Stack
            </div>
            <h2 className="text-xl font-extrabold">Technologies Used</h2>
            <ul className="mt-6 space-y-3">
              {TECH_STACK.map((tech) => (
                <li key={tech} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 text-xs font-bold shadow-md">
                    ✓
                  </span>
                  <span className="text-sm font-semibold">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <Card glass className="mt-8">
        <h2 className="text-xl font-extrabold text-slate-900">What You Will Find</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PAGES.map((page) => (
            <div key={page.title} className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-md">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${page.color} text-sm font-extrabold text-white shadow-md`}>
                {page.title[0]}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{page.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{page.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/services">View Services</Button>
          <Button to="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Card>

      <p className="mt-10 text-center text-sm font-medium text-slate-500">{SITE.course} · Department of Computer Science</p>
    </div>
  );
}
