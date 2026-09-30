import React from 'react';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070707] light:bg-slate-100 border-t border-white/10 light:border-slate-200 py-16 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between pb-12 border-b border-white/10 light:border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#home"
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-white light:text-slate-900 font-display flex items-center gap-1.5"
            >
              <span>{PORTFOLIO_DATA.fullName.toUpperCase()}</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
            </a>
            <p className="text-xs sm:text-sm text-neutral-400 light:text-slate-600 font-medium">
              {PORTFOLIO_DATA.role} · Continuous Learner
            </p>
            <p className="text-xs text-neutral-500 light:text-slate-500 max-w-sm">
              Engineering graduate building practical software applications with Python, JavaScript, Node.js, SQL, Linux, and AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 light:text-slate-500">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-neutral-400 light:text-slate-600">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF5A1F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 light:text-slate-500">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs text-neutral-400 light:text-slate-600">
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="flex items-center gap-2 hover:text-[#FF5A1F] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                className="flex items-center gap-2 hover:text-[#FF5A1F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>+91 {PORTFOLIO_DATA.contact.phone}</span>
              </a>
              <a
                href={PORTFOLIO_DATA.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#FF5A1F] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 light:text-slate-500">
          <div>
            © 2026 Rupananda Ganesh Kumar. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-neutral-500 light:text-slate-400 font-mono">
              Designed & Built with React, TypeScript & Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/5 light:bg-slate-200 hover:bg-[#FF5A1F] hover:text-black flex items-center justify-center text-neutral-400 light:text-slate-700 transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
