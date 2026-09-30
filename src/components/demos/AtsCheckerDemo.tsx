import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, FileText, ArrowRight, ExternalLink, RefreshCw, BarChart3, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface RolePreset {
  id: string;
  name: string;
  requiredSkills: string[];
  niceToHave: string[];
}

const ROLES: RolePreset[] = [
  {
    id: 'backend',
    name: 'Junior Backend & Python Developer',
    requiredSkills: ['Python', 'Node.js', 'SQL', 'REST APIs', 'Linux', 'Git'],
    niceToHave: ['Docker', 'Database Indexing', 'Bash', 'Networking'],
  },
  {
    id: 'fullstack',
    name: 'Junior Full-Stack Web Developer',
    requiredSkills: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Responsive Design', 'SQL'],
    niceToHave: ['React', 'Tailwind', 'AI Integration', 'REST APIs'],
  },
  {
    id: 'systems',
    name: 'Junior Systems & Network Associate',
    requiredSkills: ['Linux', 'Networking', 'TCP/IP', 'DNS', 'Python Scripting', 'Bash'],
    niceToHave: ['SSH', 'HTTP/HTTPS', 'Troubleshooting', 'System Monitoring'],
  },
];

const SAMPLE_RESUMES = {
  rupananda: `Rupananda Ganesh Kumar Kadiyala
Kakinada, Andhra Pradesh | rupananda@gmail.com | 7569286598
Education: B.Tech in Mechanical Engineering (2025) - Pragati Engineering College
Skills: Python, JavaScript, Node.js, SQL, Linux, Networking, TCP/IP, HTML5, CSS3, Responsive Web Design, AI prompt integration, Git
Projects:
- ResumeAI: Automated ATS Resume Scanner deployed on Cloud Run with AI evaluation
- NetPulse: Network & API protocol latency inspector with DNS/TCP breakdown
- Task Management Application: Responsive client-side to-do app with persistent LocalStorage
- Wikipedia-Inspired Editorial Knowledge Portal: Structured responsive semantic layout`,
  fresher: `Aspiring Software Developer
Education: Engineering Graduate 2025
Technical Skills: Python, Basic HTML, CSS, JavaScript, SQL, Linux commands
Projects: Academic projects, basic web pages, database schema design`,
};

export const AtsCheckerDemo: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RolePreset>(ROLES[0]);
  const [resumeText, setResumeText] = useState(SAMPLE_RESUMES.rupananda);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);

  // Analysis simulation based on resume content & role
  const textLower = resumeText.toLowerCase();
  const matchedRequired = selectedRole.requiredSkills.filter(skill =>
    textLower.includes(skill.toLowerCase())
  );
  const missingRequired = selectedRole.requiredSkills.filter(skill =>
    !textLower.includes(skill.toLowerCase())
  );
  const matchedNice = selectedRole.niceToHave.filter(skill =>
    textLower.includes(skill.toLowerCase())
  );

  const matchPercent = Math.round(
    ((matchedRequired.length * 1.5 + matchedNice.length * 0.5) /
      (selectedRole.requiredSkills.length * 1.5 + selectedRole.niceToHave.length * 0.5)) *
      100
  );
  const atsScore = Math.min(98, Math.max(45, matchPercent));

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalyzed(true);
    }, 600);
  };

  const handleRoleChange = (role: RolePreset) => {
    setSelectedRole(role);
    runAnalysis();
  };

  const loadSample = (type: 'rupananda' | 'fresher') => {
    setResumeText(SAMPLE_RESUMES[type]);
    runAnalysis();
  };

  return (
    <div className="rounded-2xl bg-[#141414] light:bg-white border border-white/10 light:border-slate-200 overflow-hidden shadow-2xl transition-colors">
      {/* Top Banner / Cloud Run Deployed Pill */}
      <div className="px-5 py-3.5 bg-gradient-to-r from-[#FF5A1F]/20 via-[#FF6A00]/10 to-transparent border-b border-[#FF5A1F]/20 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-white light:text-slate-900">
            ResumeAI · Live Deployed on Google Cloud Run
          </span>
          <span className="text-neutral-500 light:text-slate-400 hidden sm:inline">|</span>
          <span className="text-neutral-400 light:text-slate-500 hidden sm:inline">
            Interactive Test Scanner Sandbox
          </span>
        </div>

        <a
          href={PORTFOLIO_DATA.atsCheckerUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF5A1F] hover:bg-[#FF6A00] text-white font-semibold text-xs transition-all shadow-sm orange-glow-sm cursor-pointer"
        >
          <span>Open Full Live App</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Controls: Target Role & Sample Presets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-7 space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 light:text-slate-500">
              Target Job Specification:
            </label>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleRoleChange(role)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    selectedRole.id === role.id
                      ? 'bg-[#FF5A1F] text-white shadow-sm'
                      : 'bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-neutral-300 light:text-slate-700 border border-white/10 light:border-slate-300'
                  }`}
                >
                  {role.name}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-wrap items-center lg:justify-end gap-2 pt-2 lg:pt-0">
            <span className="text-xs text-neutral-400 light:text-slate-500">Presets:</span>
            <button
              onClick={() => loadSample('rupananda')}
              className="px-3 py-1.5 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-neutral-200 light:text-slate-700 text-xs border border-white/10 light:border-slate-300 transition-colors cursor-pointer"
            >
              Load RGK's Resume
            </button>
            <button
              onClick={() => loadSample('fresher')}
              className="px-3 py-1.5 rounded-xl bg-white/5 light:bg-slate-100 hover:bg-white/10 light:hover:bg-slate-200 text-neutral-200 light:text-slate-700 text-xs border border-white/10 light:border-slate-300 transition-colors cursor-pointer"
            >
              Load Basic Fresher
            </button>
          </div>
        </div>

        {/* Two-Column Workspace: Resume Input vs Live ATS Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Input Textarea */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-neutral-300 light:text-slate-700 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#FF5A1F]" />
                Resume Text Buffer
              </span>
              <button
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="inline-flex items-center gap-1 text-[#FF5A1F] hover:underline font-mono text-[11px] cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${isAnalyzing ? 'animate-spin' : ''}`} />
                <span>Re-Analyze</span>
              </button>
            </div>

            <textarea
              value={resumeText}
              onChange={(e) => {
                setResumeText(e.target.value);
                setAnalyzed(true);
              }}
              rows={9}
              className="w-full bg-[#0D0D0D] light:bg-slate-50 border border-white/10 light:border-slate-300 rounded-xl p-3.5 text-xs text-neutral-200 light:text-slate-800 font-mono focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none leading-relaxed"
              placeholder="Paste candidate resume plain text here..."
            />

            <p className="text-[11px] text-neutral-500 light:text-slate-400">
              Tips: The ATS scanner extracts keywords, checks contact validity, and rates structure.
            </p>
          </div>

          {/* Right: Live ATS Telemetry & Match Results */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Score Card */}
            <div className="p-4 rounded-xl bg-[#0F0F0F] light:bg-slate-50 border border-white/10 light:border-slate-200 flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
                  ATS Match Score
                </div>
                <div className="text-3xl sm:text-4xl font-black font-display text-white light:text-slate-900 mt-1 flex items-baseline gap-2">
                  <span className={atsScore >= 80 ? 'text-emerald-400' : atsScore >= 60 ? 'text-amber-400' : 'text-rose-400'}>
                    {atsScore}%
                  </span>
                  <span className="text-xs font-semibold text-neutral-400 light:text-slate-500">
                    {atsScore >= 80 ? 'Excellent Match' : atsScore >= 65 ? 'Moderate Match' : 'Needs Optimization'}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
                  Recruiter Status
                </div>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mt-1.5 ${
                  atsScore >= 80
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : atsScore >= 65
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                }`}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{atsScore >= 80 ? 'Passed Filter' : atsScore >= 65 ? 'Review Queue' : 'Flagged'}</span>
                </span>
              </div>
            </div>

            {/* Keyword Extraction Grid */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-300 light:text-slate-700 flex items-center justify-between">
                <span>Core Keyword Breakdown</span>
                <span className="text-[11px] font-mono text-neutral-400 light:text-slate-500">
                  {matchedRequired.length} of {selectedRole.requiredSkills.length} Required Present
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {selectedRole.requiredSkills.map((skill) => {
                  const isPresent = textLower.includes(skill.toLowerCase());
                  return (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                        isPresent
                          ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                          : 'bg-rose-500/10 border border-rose-500/20 text-rose-300 line-through opacity-70'
                      }`}
                    >
                      {isPresent ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <AlertCircle className="w-3 h-3 text-rose-400" />}
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Secondary / Nice-to-have keywords */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] text-neutral-400 light:text-slate-500 font-mono">
                Nice-to-Have Bonus Signals:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedRole.niceToHave.map((bonus) => {
                  const isPresent = textLower.includes(bonus.toLowerCase());
                  return (
                    <span
                      key={bonus}
                      className={`text-[11px] px-2 py-0.5 rounded-md font-mono ${
                        isPresent
                          ? 'bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30'
                          : 'bg-white/5 light:bg-slate-100 text-neutral-500 light:text-slate-400 border border-white/5 light:border-slate-200'
                      }`}
                    >
                      +{bonus}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Live CTA Bar pointing to the Google Cloud Run URL */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#1E120A] to-[#141414] light:from-orange-50 light:to-white border border-[#FF5A1F]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold text-white light:text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>Want to test your own PDF / DOCX resume?</span>
            </div>
            <p className="text-[11px] text-neutral-400 light:text-slate-600">
              The full ResumeAI application supports real document parsing, deep LLM feedback, and downloadable audit reports.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.atsCheckerUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md orange-glow-sm cursor-pointer shrink-0"
          >
            <span>Launch Live ResumeAI Web App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
