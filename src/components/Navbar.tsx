import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Compute scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Detect active section
      const sections = ['home', 'about', 'education', 'skills', 'services', 'projects', 'focus', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#FF5A1F] via-[#FF6A00] to-[#FF3D00] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/85 light:bg-white/85 backdrop-blur-md border-b border-white/10 light:border-black/10 py-3 shadow-lg'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Wordmark Brand Title */}
            <a
              href="#home"
              className="text-lg sm:text-xl font-extrabold tracking-tight text-white light:text-slate-900 hover:text-[#FF5A1F] transition-colors flex items-center gap-1 font-display"
            >
              <span>RUPANANDA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]"></span>
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-medium text-neutral-300 light:text-slate-600">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`transition-colors relative py-1 hover:text-white light:hover:text-slate-900 ${
                      isActive
                        ? 'text-white light:text-slate-950 font-semibold'
                        : 'text-neutral-400 light:text-slate-500'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF5A1F] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Theme Toggle Button with explicit text */}
              <button
                onClick={toggleTheme}
                className="px-3 py-2 rounded-xl bg-white/5 light:bg-black/5 hover:bg-white/10 light:hover:bg-black/10 border border-white/10 light:border-black/10 text-neutral-300 light:text-slate-700 transition-colors flex items-center gap-2 cursor-pointer text-xs font-medium"
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              {/* Resume Sheet Trigger */}
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 text-xs font-medium text-neutral-300 light:text-slate-700 hover:text-white light:hover:text-slate-950 bg-white/5 light:bg-black/5 hover:bg-white/10 light:hover:bg-black/10 border border-white/10 light:border-black/10 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>Resume</span>
              </button>

              {/* Primary Get in Touch CTA */}
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] hover:brightness-110 rounded-xl transition-all flex items-center gap-1.5 shadow-md orange-glow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/5 light:bg-black/5 text-neutral-300 light:text-slate-700 border border-white/10 light:border-black/10"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 light:bg-black/5 border border-white/10 light:border-black/10 text-neutral-300 light:text-slate-700 focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F0F0F]/95 light:bg-white/95 backdrop-blur-xl border-b border-white/10 light:border-black/10 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-300 light:text-slate-700 hover:text-white light:hover:text-black py-1 flex items-center justify-between border-b border-white/5 light:border-black/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-neutral-500 light:text-slate-400 font-mono">›</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                {/* Mobile Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="w-full text-center py-2.5 px-4 text-xs font-semibold text-neutral-200 light:text-slate-800 bg-white/5 light:bg-black/5 rounded-xl border border-white/10 light:border-black/10 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
                    <span>Theme</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#FF5A1F]">
                    {isDark ? 'Switch to Light' : 'Switch to Dark'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-center py-2.5 text-xs font-semibold text-neutral-200 light:text-slate-800 bg-white/5 light:bg-black/5 rounded-xl border border-white/10 light:border-black/10 flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  <span>View Printable Resume</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

