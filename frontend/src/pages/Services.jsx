import TaskManager from '../components/TaskManager';
import Card from '../components/ui/Card';
import PageHeader from '../components/ui/PageHeader';
import ServiceIcon from '../components/ui/ServiceIcon';
import { SERVICES } from '../constants/site';

const ACCENTS = [
  'border-t-indigo-500',
  'border-t-sky-500',
  'border-t-violet-500',
  'border-t-emerald-500',
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <PageHeader
        eyebrow="Services"
        title="Tools that help you work smarter"
        description="Explore our core features and try the interactive task manager below."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service, i) => (
          <Card key={service.title} hover glass className={`group border-t-4 ${ACCENTS[i]}`}>
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-sky-50 ring-1 ring-indigo-100 transition-transform duration-300 group-hover:scale-110">
                <ServiceIcon name={service.icon} />
              </div>
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-600">
                0{i + 1}
              </span>
            </div>
            <h2 className="mt-5 text-lg font-extrabold text-slate-900">{service.title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">{service.description}</p>
          </Card>
        ))}
      </div>

      <section className="mt-20">
        <PageHeader
          eyebrow="Interactive Demo"
          title="Try the Task Manager"
          description="Add, complete, and delete tasks to see how the app automates your daily workflow."
        />
        <div className="mt-10">
          <TaskManager />
        </div>
      </section>
    </div>
  );
}
