import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, Circle, ListFilter } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  category: 'General' | 'Dev' | 'System' | 'Study';
  completed: boolean;
  createdAt: string;
}

const INITIAL_TASKS: Task[] = [
  { id: '1', text: 'Configure Linux development environment & SSH keys', category: 'System', completed: true, createdAt: '09:00 AM' },
  { id: '2', text: 'Build responsive grid system for portfolio showcase', category: 'Dev', completed: true, createdAt: '10:30 AM' },
  { id: '3', text: 'Practice SQL indexing & relational joins exercises', category: 'Study', completed: false, createdAt: '01:15 PM' },
  { id: '4', text: 'Implement RESTful API route handler in Node.js', category: 'Dev', completed: false, createdAt: '03:45 PM' },
];

export const TodoDemo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [inputText, setInputText] = useState('');
  const [category, setCategory] = useState<Task['category']>('Dev');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: inputText.trim(),
      category,
      completed: false,
      createdAt: 'Just now',
    };

    setTasks([newTask, ...tasks]);
    setInputText('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="w-full bg-[#121212] border border-white/10 rounded-2xl p-4 sm:p-6 text-white max-w-2xl mx-auto shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] inline-block animate-pulse"></span>
            Task Manager Live Application
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">Interactive Demo • Pure JavaScript State & DOM Logic</p>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-neutral-300 border border-white/10">
          {activeCount} pending
        </span>
      </div>

      {/* Input form */}
      <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-2 mb-5">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task (e.g., Review TCP socket lifecycle)..."
          className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF5A1F] transition-colors"
        />
        <div className="flex gap-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Task['category'])}
            className="bg-[#1A1A1A] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-300 focus:outline-none focus:border-[#FF5A1F]"
          >
            <option value="Dev">Dev</option>
            <option value="System">System</option>
            <option value="Study">Study</option>
            <option value="General">General</option>
          </select>
          <button
            type="submit"
            className="bg-[#FF5A1F] hover:bg-[#FF6A00] text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </form>

      {/* Filter tabs */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs">
        <div className="flex items-center gap-1.5">
          <ListFilter className="w-3.5 h-3.5 text-neutral-400 mr-1" />
          {(['all', 'active', 'completed'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`px-3 py-1 rounded-lg capitalize transition-colors ${
                filter === mode
                  ? 'bg-white/15 text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        {tasks.some(t => t.completed) && (
          <button
            onClick={clearCompleted}
            className="text-neutral-400 hover:text-[#FF5A1F] transition-colors"
          >
            Clear completed
          </button>
        )}
      </div>

      {/* Task List */}
      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
        {filteredTasks.length === 0 ? (
          <div className="py-8 text-center text-neutral-500 text-sm">
            No tasks found in this view. Add one above!
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className={`group flex items-center justify-between p-3 rounded-xl border transition-all ${
                task.completed
                  ? 'bg-white/[0.02] border-white/5 text-neutral-500'
                  : 'bg-white/[0.04] border-white/10 text-white hover:border-[#FF5A1F]/40'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-neutral-400 hover:text-[#FF5A1F] transition-colors shrink-0 cursor-pointer"
                  aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-[#FF5A1F]" />
                  ) : (
                    <Circle className="w-5 h-5 hover:text-[#FF5A1F]" />
                  )}
                </button>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm break-words ${
                      task.completed ? 'line-through text-neutral-500' : 'text-neutral-200'
                    }`}
                  >
                    {task.text}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500 mt-0.5">
                    <span>{task.category}</span>
                    <span>·</span>
                    <span>{task.createdAt}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="opacity-60 group-hover:opacity-100 text-neutral-400 hover:text-red-400 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                aria-label="Delete task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
        <span>Status: Client-side synchronized</span>
        <span>Built with ES6 JavaScript</span>
      </div>
    </div>
  );
};
