import React, { useState } from 'react';
import { X, Play, Code2, Check, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { TodoDemo } from './demos/TodoDemo';
import { WikiDemo } from './demos/WikiDemo';
import { NetworkDemo } from './demos/NetworkDemo';
import { AtsCheckerDemo } from './demos/AtsCheckerDemo';
import { SysPulseDemo } from './demos/SysPulseDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'interactive' | 'overview'>('interactive');

  const renderDemo = () => {
    switch (project.id) {
      case 'ats-checker':
        return <AtsCheckerDemo />;
      case 'syspulse-app':
        return <SysPulseDemo />;
      case 'todo-app':
        return <TodoDemo />;
      case 'wiki-project':
        return <WikiDemo />;
      case 'netpulse-app':
      default:
        return <NetworkDemo />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0F0F] light:bg-[#FFFFFF] border border-white/15 light:border-black/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl orange-glow transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 light:border-black/10 bg-[#141414] light:bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30 font-semibold">
              Project {project.number}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white light:text-slate-900 tracking-tight truncate max-w-xs sm:max-w-md">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF6A00] text-white text-xs font-semibold shadow-sm transition-all orange-glow-sm cursor-pointer"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/5 light:bg-slate-200 hover:bg-white/15 light:hover:bg-slate-300 flex items-center justify-center text-neutral-300 light:text-slate-700 hover:text-white light:hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View switcher tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#111111] light:bg-slate-100 border-b border-white/10 light:border-black/10 text-xs">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'bg-[#FF5A1F] text-white font-medium shadow-sm'
                : 'text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-200'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Live Demo</span>
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-white/15 light:bg-white text-white light:text-slate-900 font-medium shadow-sm'
                : 'text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Project Specs & Architecture</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'interactive' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white light:text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF5A1F]" />
                    Live Working Prototype
                  </h4>
                  <p className="text-xs text-neutral-400 light:text-slate-500 mt-0.5">
                    Experience this project in real-time. All interactions run live client-side.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400 light:text-slate-500">Pure Web Technologies:</span>
                  <div className="flex items-center gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={tech} className="text-xs font-mono text-neutral-300 light:text-slate-700">
                        {tech}{idx < 2 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {renderDemo()}
            </div>
          ) : (
            <div className="space-y-6 text-neutral-300 light:text-slate-700">
              {/* Project preview image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 light:border-slate-200 aspect-video max-h-72 w-full bg-[#181818] light:bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.dataset.fallbackTried !== 'true') {
                      target.dataset.fallbackTried = 'true';
                      const filename = project.id === 'ats-checker' ? 'project_ats_checker_1790350142562.jpg'
                        : project.id === 'syspulse-app' ? 'project_syspulse_preview_1790350257600.jpg'
                        : project.id === 'netpulse-app' ? 'project_network_inspector_1790349686893.jpg'
                        : project.id === 'todo-app' ? 'project_todo_preview_1790348821606.jpg'
                        : 'project_wiki_preview_1790348838261.jpg';
                      target.src = `/assets/images/${filename}`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-neutral-300">{project.category} · Conceptual Implementation</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white light:text-slate-900 mb-2">Project Overview</h3>
                <p className="text-sm text-neutral-300 light:text-slate-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Technologies list */}
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 light:text-slate-500 uppercase tracking-wider mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 text-xs text-neutral-200 light:text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 light:text-slate-500 uppercase tracking-wider mb-2">
                  Key Implemented Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/5 light:border-slate-200 text-xs text-neutral-300 light:text-slate-700"
                    >
                      <Check className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learnings */}
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 light:text-slate-500 uppercase tracking-wider mb-2">
                  Technical Learnings & Takeaways
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-300 light:text-slate-700">
                  {project.learnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF5A1F] font-bold">›</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#141414] light:bg-slate-50 border-t border-white/10 light:border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400 light:text-slate-500 text-center sm:text-left">
            Built as part of practical self-driven technical studies by Rupananda Ganesh Kumar.
          </p>
          <div className="flex items-center gap-3">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#FF5A1F] hover:bg-[#FF6A00] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-lg orange-glow-sm"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="bg-white/10 light:bg-slate-200 hover:bg-white/20 light:hover:bg-slate-300 text-white light:text-slate-900 px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Discuss This Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

