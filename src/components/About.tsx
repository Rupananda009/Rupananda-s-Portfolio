import React from 'react';
import { ArrowRight, Compass, GraduationCap, Code, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rounded Main Section Container */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl transition-colors">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FF5A1F]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Core Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
                <span>{PORTFOLIO_DATA.about.kicker}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight font-display text-balance">
                {PORTFOLIO_DATA.about.heading}
              </h2>

              <div className="space-y-4 text-neutral-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                {PORTFOLIO_DATA.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="font-normal text-neutral-300 light:text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] text-white font-semibold text-xs sm:text-sm hover:brightness-110 transition-all shadow-lg orange-glow-sm cursor-pointer"
                >
                  <span>{PORTFOLIO_DATA.about.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Takeaway Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white light:text-slate-900">Engineering Roots</h3>
                <p className="text-xs text-neutral-400 light:text-slate-600 leading-relaxed">
                  Graduated in 2025 with a B.Tech in Mechanical Engineering from Pragati Engineering College, establishing rigorous analytical thinking and systemic logic.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 light:bg-slate-200 text-white light:text-slate-800 flex items-center justify-center">
                  <Code className="w-5 h-5 text-[#FF5A1F]" />
                </div>
                <h3 className="text-base font-bold text-white light:text-slate-900">Software Transition</h3>
                <p className="text-xs text-neutral-400 light:text-slate-600 leading-relaxed">
                  Bridged into software development with practical hands-on proficiency in Python, JavaScript, Node.js, SQL, Linux commands, and web protocols.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 light:bg-slate-200 text-white light:text-slate-800 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#FF5A1F]" />
                </div>
                <h3 className="text-base font-bold text-white light:text-slate-900">Fresher Mindset</h3>
                <p className="text-xs text-neutral-400 light:text-slate-600 leading-relaxed">
                  Eager to join engineering teams, absorb industry best practices, write clean code, and tackle challenging technical problems with humility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
