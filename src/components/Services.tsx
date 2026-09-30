import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
            <span>AREAS OF CAPABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight font-display text-balance">
            WHAT I CAN BUILD
          </h2>

          <p className="text-neutral-400 light:text-slate-600 text-sm sm:text-base max-w-2xl">
            Practical technology solutions focused on functionality, performance and usability. Presented as areas of personal development and hands-on skill.
          </p>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-[28px] sm:rounded-[36px] bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF5A1F]/50 light:hover:border-[#FF5A1F] transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#FF5A1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative space-y-6">
                {/* Number & Card Action Header */}
                <div className="flex items-center justify-between border-b border-white/10 light:border-slate-100 pb-5">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#FF5A1F]">
                    {service.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 light:bg-slate-100 group-hover:bg-[#FF5A1F] group-hover:text-black flex items-center justify-center text-neutral-400 light:text-slate-600 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Summary */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 tracking-tight font-display group-hover:text-white light:group-hover:text-black">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 light:text-slate-600 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Technologies List */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider mb-2">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/5 light:bg-slate-100 text-[11px] text-neutral-300 light:text-slate-700 border border-white/5 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specific Capabilities */}
                <div className="space-y-2.5 pt-2 border-t border-white/5 light:border-slate-100">
                  <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider mb-1">
                    Hands-On Focus
                  </div>
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 light:text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="relative pt-6 mt-6 border-t border-white/10 light:border-slate-100 flex items-center justify-between text-[11px] text-neutral-400 light:text-slate-500">
                <span>Personal & Academic Proficiency</span>
                <span className="font-mono text-[#FF5A1F]">RGK // CAPABILITY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
