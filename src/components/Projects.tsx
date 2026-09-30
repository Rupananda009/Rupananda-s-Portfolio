import React from 'react';
import { ArrowUpRight, Play, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
              <span>PORTFOLIO SHOWCASE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight font-display text-balance">
              SELECTED PROJECTS
            </h2>

            <p className="text-neutral-400 light:text-slate-600 text-sm sm:text-base">
              Projects that helped me turn concepts into working applications. Built with clean semantic code, responsive layouts, systems thinking, and interactive client-side logic.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 light:text-slate-600">
            <Sparkles className="w-4 h-4 text-[#FF5A1F]" />
            <span>Click any project to run the interactive live demo</span>
          </div>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-[32px] bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 overflow-hidden hover:border-[#FF5A1F]/60 light:hover:border-[#FF5A1F] transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161616] light:bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.dataset.fallbackTried !== 'true') {
                      target.dataset.fallbackTried = 'true';
                      // Try fallback to public assets folder
                      const filename = project.id === 'ats-checker' ? 'project_ats_checker_1790350142562.jpg'
                        : project.id === 'syspulse-app' ? 'project_syspulse_preview_1790350257600.jpg'
                        : project.id === 'netpulse-app' ? 'project_network_inspector_1790349686893.jpg'
                        : project.id === 'todo-app' ? 'project_todo_preview_1790348821606.jpg'
                        : 'project_wiki_preview_1790348838261.jpg';
                      target.src = `/assets/images/${filename}`;
                    }
                  }}
                />

                {/* Gradient Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] light:from-white via-[#111111]/30 light:via-white/20 to-transparent" />

                {/* Project Number & Live Tag Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-black/75 light:bg-white/90 border border-white/15 light:border-slate-300 text-white light:text-slate-900 backdrop-blur-md font-semibold">
                    PROJECT {project.number}
                  </span>

                  {project.externalUrl ? (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-medium shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Live on Cloud Run</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#FF5A1F] text-white font-medium shadow-md">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>Live Demo</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FF5A1F] font-semibold">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 light:bg-slate-100 group-hover:bg-[#FF5A1F] group-hover:text-black flex items-center justify-center text-neutral-400 light:text-slate-600 transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight font-display group-hover:text-[#FF5A1F] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-300 light:text-slate-600 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Unboxed Metadata */}
                <div className="space-y-4 pt-4 border-t border-white/10 light:border-slate-100">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400 light:text-slate-500">
                    <span className="text-neutral-500 light:text-slate-400 font-mono text-[11px]">STACK:</span>
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-neutral-200 light:text-slate-700 font-medium text-xs">{tech}</span>
                        {idx < Math.min(project.technologies.length, 3) - 1 && (
                          <span className="text-neutral-600 light:text-slate-300 font-bold">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-1 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white light:text-slate-900 bg-white/10 light:bg-slate-100 group-hover:bg-[#FF5A1F] group-hover:text-white px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-sm"
                    >
                      <Play className="w-3 h-3" />
                      <span>Interactive Demo</span>
                    </button>

                    {project.externalUrl ? (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] text-[#FF5A1F] hover:underline font-mono font-semibold"
                        title="Open Cloud Run deployed web application"
                      >
                        <span>Live App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-neutral-500 light:text-slate-400 font-mono">
                        Explore →
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

