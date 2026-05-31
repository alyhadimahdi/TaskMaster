import { useState } from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageHeader from '../components/ui/PageHeader';

const INITIAL_FORM = { name: '', email: '', message: '' };

const INPUT_CLASS =
  'mt-2 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-slate-800 placeholder:text-slate-400 transition-all focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20';

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'support@taskmaster.app',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: 'Course',
    value: 'CSCI390 — Web Programming',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    label: 'Location',
    value: 'Department of Computer Science & IT',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question or feedback? Send us a message and we will get back to you."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <Card glass>
          <h2 className="text-lg font-extrabold text-slate-900">Contact Information</h2>
          <ul className="mt-6 space-y-4">
            {CONTACT_INFO.map((item) => (
              <li key={item.label} className="flex items-start gap-4 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-sky-50 text-indigo-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/services" variant="secondary" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
        </Card>

        <Card glass className="shadow-lg shadow-indigo-500/5">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">Message sent!</h2>
              <p className="mt-2 text-sm text-slate-600">Thank you for reaching out. We will respond shortly.</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={INPUT_CLASS} placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={INPUT_CLASS} placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className={`${INPUT_CLASS} resize-none`} placeholder="How can we help you?" />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
