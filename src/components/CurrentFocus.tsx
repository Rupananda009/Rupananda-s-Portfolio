import React from 'react';
import { Sparkles, Terminal, Globe, Server, Cpu, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const getTopicIcon = (name: string) => {
  switch (name) {
    case 'AI':
      return <Sparkles className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Backend Development':
      return <Server className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Linux':
      return <Cpu className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Networking':
      return <Terminal className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Modern Web Development':
      return <Globe className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Programming':
      return <Code2 className="w-5 h-5 text-[#FF5A1F]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#FF5A1F]" />;
  }
};

export const CurrentFocus: React.FC = () => {
  return (
    <section id="focus" className="py-24 relative bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 p-8 sm:p-14 overflow-hidden shadow-xl transition-colors">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#FF5A1F]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
              <span>{PORTFOLIO_DATA.currentFocus.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight font-display text-balance">
              {PORTFOLIO_DATA.currentFocus.heading}
            </h2>

            <p className="text-neutral-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.currentFocus.description}
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO_DATA.currentFocus.topics.map((topic) => (
              <div
                key={topic.name}
                className="p-6 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/5 light:border-slate-200 hover:border-[#FF5A1F]/40 light:hover:border-[#FF5A1F] transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-center group-hover:bg-[#FF5A1F]/10 transition-colors">
                    {getTopicIcon(topic.name)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 light:bg-white text-neutral-400 light:text-slate-600 border border-white/5 light:border-slate-200">
                    {topic.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-[#FF5A1F] transition-colors font-display">
                  {topic.name}
                </h3>

                <p className="text-xs text-neutral-400 light:text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
