import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, FileText, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const AtsDemo: React.FC = () => {
  const [jobRole, setJobRole] = useState<'software' | 'frontend' | 'backend'>('software');
  const [isScanning, setIsScanning] = useState(false);

  const scores = {
    software: { score: 94, matched: 18, missing: 2, summary: 'High match for Software Developer / Fresher position' },
    frontend: { score: 91, matched: 16, missing: 3, summary: 'Strong HTML/CSS/JS responsive UI alignment' },
    backend: { score: 88, matched: 14, missing: 4, summary: 'Good Node.js & SQL database coverage' },
  };

  const current = scores[jobRole];

  const handleRescan = (role: 'software' | 'frontend' | 'backend') => {
    setJobRole(role);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 400);
  };

  return (
    <div className="w-full bg-[#121212] light:bg-white border border-white/10 light:border-black/10 rounded-2xl p-5 sm:p-7 text-white light:text-slate-900 max-w-3xl mx-auto shadow-2xl transition-colors space-y-6">
      {/* Top Banner with Direct App Launch Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-[#FF5A1F]/20 via-[#FF6A00]/15 to-transparent border border-[#FF5A1F]/30">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF5A1F] font-bold">
            Live Deployed Web Application
          </span>
          <h4 className="text-base font-bold text-white light:text-slate-900">
            ResumeAI — AI ATS Resume Scanner
          </h4>
          <p className="text-xs text-neutral-300 light:text-slate-600 mt-0.5">
            Test and benchmark real resumes against enterprise applicant tracking algorithms.
          </p>
        </div>
        <a
          href={PORTFOLIO_DATA.atsCheckerUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5A1F] hover:bg-[#FF6A00] text-white font-semibold text-xs transition-all shadow-md orange-glow-sm cursor-pointer shrink-0"
        >
          <span>Launch Live App</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Target role selector */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-neutral-300 light:text-slate-700 flex items-center justify-between">
          <span>Target Job Role Benchmark:</span>
          <span className="text-[11px] font-mono text-neutral-400 light:text-slate-500">
            Live Simulator View
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'software', label: 'Software Developer (Fresher)' },
              { id: 'frontend', label: 'Frontend / Web Developer' },
              { id: 'backend', label: 'Backend Developer (Node.js)' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => handleRescan(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                jobRole === item.id
                  ? 'bg-[#FF5A1F] text-white font-medium shadow-sm'
                  : 'bg-white/5 light:bg-slate-100 text-neutral-300 light:text-slate-700 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Score Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Score Gauge */}
        <div className="p-4 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 flex flex-col items-center justify-center text-center">
          <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#FF5A1F] font-display">
            {isScanning ? '...' : `${current.score}%`}
          </div>
          <span className="text-xs font-bold text-white light:text-slate-900 mt-1">ATS Match Index</span>
          <span className="text-[10px] text-neutral-400 light:text-slate-500">Top Tier Candidate Tier</span>
        </div>

        {/* Matched Keywords */}
        <div className="p-4 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Matched Keywords</span>
          </div>
          <div className="text-2xl font-bold text-white light:text-slate-900 font-mono">
            {isScanning ? '...' : `${current.matched} / 20`}
          </div>
          <p className="text-[11px] text-neutral-400 light:text-slate-600">
            Python, JavaScript, Node.js, SQL, Linux, Git, REST APIs, HTML5
          </p>
        </div>

        {/* Formatting Audit */}
        <div className="p-4 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-1">
          <div className="flex items-center gap-1.5 text-[#FF5A1F] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Format Readiness</span>
          </div>
          <div className="text-2xl font-bold text-white light:text-slate-900 font-mono">
            100% Pass
          </div>
          <p className="text-[11px] text-neutral-400 light:text-slate-600">
            Standard fonts, clear section headings, zero unreadable text columns.
          </p>
        </div>
      </div>

      {/* Summary Note */}
      <div className="p-3.5 rounded-xl bg-white/[0.02] light:bg-slate-50 border border-white/10 light:border-slate-200 flex items-center justify-between text-xs">
        <span className="text-neutral-300 light:text-slate-700">
          <strong>Diagnostic Verdict:</strong> {current.summary}
        </span>
        <a
          href={PORTFOLIO_DATA.atsCheckerUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[#FF5A1F] hover:underline font-semibold flex items-center gap-1 shrink-0"
        >
          <span>Open Full Tool</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
