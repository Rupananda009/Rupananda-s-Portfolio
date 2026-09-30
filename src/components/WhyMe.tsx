import React from 'react';
import { Compass, Lightbulb, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const getPillarIcon = (number: string) => {
  switch (number) {
    case '01':
      return <Compass className="w-6 h-6 text-[#FF5A1F]" />;
    case '02':
      return <Lightbulb className="w-6 h-6 text-[#FF5A1F]" />;
    case '03':
      return <TrendingUp className="w-6 h-6 text-[#FF5A1F]" />;
    default:
      return <Compass className="w-6 h-6 text-[#FF5A1F]" />;
  }
};

export const WhyMe: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#141414] to-[#0F0F0F] light:from-white light:to-slate-50 border border-white/10 light:border-slate-200 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl transition-colors">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
              <span>ENGINEERING PERSPECTIVE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight font-display leading-tight text-balance">
              {PORTFOLIO_DATA.whyMe.heading}
            </h2>

            <p className="text-neutral-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.whyMe.supportingText}
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.whyMe.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-white/[0.02] light:bg-slate-50 border border-white/5 light:border-slate-200 hover:border-[#FF5A1F]/40 light:hover:border-[#FF5A1F] transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between border-b border-white/10 light:border-slate-200 pb-4">
                  <span className="font-mono text-2xl font-bold text-[#FF5A1F]">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 light:bg-white border border-white/5 light:border-slate-200 flex items-center justify-center group-hover:bg-[#FF5A1F]/10 transition-colors">
                    {getPillarIcon(pillar.number)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white light:text-slate-900 font-display group-hover:text-[#FF5A1F] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 light:text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
