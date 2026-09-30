import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 p-8 sm:p-14 overflow-hidden shadow-xl transition-colors">
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#FF5A1F]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Left Column: Academic Credentials */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
                <span>ACADEMIC FOUNDATION</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight font-display">
                {PORTFOLIO_DATA.education.degree}
              </h2>

              <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-neutral-300 light:text-slate-700">
                <GraduationCap className="w-5 h-5 text-[#FF5A1F]" />
                <span>{PORTFOLIO_DATA.education.institution}</span>
              </div>

              <p className="text-sm text-neutral-300 light:text-slate-600 leading-relaxed pt-2">
                {PORTFOLIO_DATA.education.note}
              </p>

              {/* Competency Highlights */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300 light:text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>Engineering Problem Formulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>Analytical Mathematics & Logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>Self-Taught Computer Science Topics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span>Practical Coding Project Application</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Oversized Year Graphic */}
            <div className="relative shrink-0 flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl bg-white/[0.02] light:bg-slate-50 border border-white/10 light:border-slate-200 w-full lg:w-auto">
              <span className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white light:from-slate-900 via-[#FF5A1F] to-[#FF3D00] font-display tracking-tight leading-none">
                {PORTFOLIO_DATA.education.year}
              </span>
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 light:text-slate-500 mt-3">
                Graduation Milestone
              </span>
              <span className="text-[11px] text-neutral-500 light:text-slate-400 mt-1">
                Kakinada, Andhra Pradesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
