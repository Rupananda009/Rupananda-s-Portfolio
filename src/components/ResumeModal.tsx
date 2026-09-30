import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#141414] border border-white/20 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-white/10 light:border-black/10 bg-[#1A1A1A] light:bg-slate-100 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 light:text-slate-800">
              Resume Preview · Rupananda Ganesh Kumar Kadiyala
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-white/10 light:bg-slate-200 hover:bg-white/20 light:hover:bg-slate-300 text-white light:text-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 light:bg-slate-200 hover:bg-white/15 light:hover:bg-slate-300 flex items-center justify-center text-neutral-300 light:text-slate-700 hover:text-white light:hover:text-black transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0F0F0F] light:bg-white text-neutral-200 light:text-slate-800 text-xs leading-relaxed space-y-6 print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 light:border-slate-200 pb-5">
            <h1 className="text-2xl font-bold tracking-tight text-white light:text-slate-900 print:text-black">
              {PORTFOLIO_DATA.fullName}
            </h1>
            <p className="text-sm font-medium text-[#FF5A1F] mt-1 print:text-[#FF5A1F]">
              Aspiring Software Developer • B.Tech Graduate (2025)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-neutral-400 light:text-slate-600 mt-3 text-xs print:text-neutral-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                {PORTFOLIO_DATA.location}
              </span>
              <span>·</span>
              <a href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-center gap-1 hover:text-white light:hover:text-slate-900">
                <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" />
                {PORTFOLIO_DATA.email}
              </a>
              <span>·</span>
              <a href={`tel:${PORTFOLIO_DATA.phone}`} className="flex items-center gap-1 hover:text-white light:hover:text-slate-900">
                <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                +91 {PORTFOLIO_DATA.phone}
              </a>
              <span>·</span>
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white light:hover:text-slate-900 underline text-neutral-300 light:text-slate-700 print:text-black"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] mb-1.5">
              Professional Profile
            </h2>
            <p className="text-neutral-300 light:text-slate-700 print:text-neutral-800">
              Proactive engineering graduate (B.Tech Mechanical, 2025) with a strong foundation in software engineering, modern web technologies, and systems. Hands-on experience developing responsive applications using Python, JavaScript, Node.js, SQL, and Linux. Passionate about learning how complex systems operate, breaking problems into structured algorithmic solutions, and contributing to real-world software engineering teams as a dedicated fresher.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-white light:text-slate-900 text-sm print:text-black">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <p className="text-neutral-400 light:text-slate-600 print:text-neutral-700">
                  {PORTFOLIO_DATA.education.institution}
                </p>
              </div>
              <span className="font-mono text-neutral-400 light:text-slate-600 font-semibold">{PORTFOLIO_DATA.education.year}</span>
            </div>
            <p className="text-[11px] text-neutral-400 light:text-slate-600 mt-1 print:text-neutral-600">
              {PORTFOLIO_DATA.education.note}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 print:border-neutral-300">
                <span className="font-semibold text-white light:text-slate-900 print:text-black">Programming:</span>
                <span className="text-neutral-400 light:text-slate-600 ml-1.5 print:text-neutral-700">Python, JavaScript (ES6+)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 print:border-neutral-300">
                <span className="font-semibold text-white light:text-slate-900 print:text-black">Web Development:</span>
                <span className="text-neutral-400 light:text-slate-600 ml-1.5 print:text-neutral-700">HTML5, CSS3, Responsive Web Design</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 print:border-neutral-300">
                <span className="font-semibold text-white light:text-slate-900 print:text-black">Backend & Database:</span>
                <span className="text-neutral-400 light:text-slate-600 ml-1.5 print:text-neutral-700">Node.js, REST APIs, SQL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 print:border-neutral-300">
                <span className="font-semibold text-white light:text-slate-900 print:text-black">Systems & Networking:</span>
                <span className="text-neutral-400 light:text-slate-600 ml-1.5 print:text-neutral-700">Linux CLI, TCP/IP, DNS, HTTP/HTTPS</span>
              </div>
            </div>
          </div>

          {/* Practical Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] mb-2.5">
              Personal Technical Projects
            </h2>
            <div className="space-y-3.5">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="border-l-2 border-[#FF5A1F] pl-3 py-0.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-white light:text-slate-900 text-xs print:text-black">{proj.title}</h3>
                    <span className="text-[11px] font-mono text-neutral-400 light:text-slate-600">
                      {proj.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-neutral-400 light:text-slate-600 mt-1 text-[11px] print:text-neutral-700">
                    {proj.shortDescription}
                  </p>
                  <ul className="mt-1 space-y-0.5 text-[11px] text-neutral-400 light:text-slate-600 print:text-neutral-700">
                    {proj.features.slice(0, 3).map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div className="border-t border-white/10 light:border-slate-200 pt-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#FF5A1F] mb-1.5">
              Key Attributes
            </h2>
            <p className="text-neutral-400 light:text-slate-600 text-[11px] print:text-neutral-700">
              Curious mindset • First-principles engineering approach • Fast learner of new software paradigms • Collaborative communicator • Dedicated to continuous code quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
