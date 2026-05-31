import { useState } from 'react';
import Card from './ui/Card';

const INITIAL_TASKS = [
  { id: 1, text: 'Review project requirements', completed: true },
  { id: 2, text: 'Build responsive UI pages', completed: false },
  { id: 3, text: 'Deploy to GitHub Pages', completed: false },
];

export default function TaskManager() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [input, setInput] = useState('');

  const completed = tasks.filter((t) => t.completed).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  const addTask = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Card className="overflow-hidden border-0 p-0 shadow-xl shadow-indigo-900/10">
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 px-6 py-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">Live Demo</p>
            <h3 className="mt-1 text-xl font-extrabold">Task Manager</h3>
          </div>
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold ring-1 ring-white/20 backdrop-blur">
            {completed}/{tasks.length} done · {progress}%
          </span>
        </div>
        <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8">
        <form onSubmit={addTask} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What do you need to get done?"
            className="flex-1 rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3.5 text-slate-800 placeholder:text-slate-400 transition-all focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all hover:from-indigo-700 hover:to-indigo-600 hover:shadow-xl"
          >
            Add Task
          </button>
        </form>

        <ul className="mt-6 space-y-3">
          {tasks.length === 0 ? (
            <li className="rounded-xl border border-dashed border-slate-200 py-12 text-center text-sm text-slate-500">
              No tasks yet. Add one above to get started.
            </li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 transition-all duration-200 ${
                  task.completed
                    ? 'border-emerald-200/80 bg-emerald-50/80'
                    : 'border-slate-200/80 bg-slate-50/50 hover:border-indigo-200 hover:bg-white hover:shadow-sm'
                }`}
              >
                <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className={`text-sm font-medium ${task.completed ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
                    {task.text}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  className="rounded-lg p-1.5 text-slate-400 opacity-0 transition-all group-hover:opacity-100 hover:bg-red-50 hover:text-red-600"
                  aria-label="Delete task"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </Card>
  );
}
