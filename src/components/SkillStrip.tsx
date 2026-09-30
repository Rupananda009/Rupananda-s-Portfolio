import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillStrip: React.FC = () => {
  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121212] light:bg-white border border-white/10 light:border-slate-200 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl overflow-hidden backdrop-blur-md transition-colors">
        {/* Horizontal scroll container on mobile, flex wrap on desktop */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-1 scroll-smooth">
          {PORTFOLIO_DATA.skillStrip.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] light:bg-slate-50 hover:bg-white/[0.07] light:hover:bg-slate-100 border border-white/5 light:border-slate-200 hover:border-[#FF5A1F]/40 transition-all shrink-0 cursor-default"
            >
              <span className="font-mono text-xs text-[#FF5A1F] font-semibold">
                {skill.number}
              </span>
              <span className="text-xs text-neutral-500 light:text-slate-400">—</span>
              <span className="text-xs sm:text-sm font-medium text-neutral-200 light:text-slate-700 group-hover:text-white light:group-hover:text-black whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
