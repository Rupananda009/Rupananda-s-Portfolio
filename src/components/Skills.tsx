import React, { useState } from 'react';
import {
  Terminal,
  Code,
  Layout,
  Palette,
  Smartphone,
  Server,
  Database,
  Cpu,
  Network,
  Sparkles,
  Layers,
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

// Map icon name to Lucide component
const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Terminal':
      return <Terminal className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Code':
      return <Code className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Layout':
      return <Layout className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Palette':
      return <Palette className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Smartphone':
      return <Smartphone className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Server':
      return <Server className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Database':
      return <Database className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Network':
      return <Network className="w-5 h-5 text-[#FF5A1F]" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-[#FF5A1F]" />;
    default:
      return <Code className="w-5 h-5 text-[#FF5A1F]" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'Web',
    'Backend',
    'Database',
    'Systems',
    'Emerging Technology',
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
            <span>TECH STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight font-display text-balance">
            Technologies I'm learning, building with, and exploring.
          </h2>

          <p className="text-neutral-400 light:text-slate-600 text-sm sm:text-base max-w-2xl">
            A transparent overview of my current capabilities as an aspiring developer. Built on practical hands-on experience, coursework, and personal projects.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#FF5A1F] text-white shadow-md orange-glow-sm'
                  : 'bg-white/5 light:bg-white text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/10 light:hover:bg-slate-100 border border-white/5 light:border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 p-6 hover:border-[#FF5A1F]/50 light:hover:border-[#FF5A1F] transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Subtle card glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF5A1F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative space-y-4">
                {/* Header row: Icon & category indicator */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 flex items-center justify-center group-hover:bg-[#FF5A1F]/10 group-hover:border-[#FF5A1F]/30 transition-colors">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 light:text-slate-500 group-hover:text-[#FF5A1F] transition-colors">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <div>
                  <h3 className="text-lg font-bold text-white light:text-slate-900 tracking-tight group-hover:text-[#FF5A1F] transition-colors font-display">
                    {skill.name}
                  </h3>
                  <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 mt-0.5">
                    {skill.level}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 light:text-slate-600 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Philosophy Note */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] light:bg-white border border-white/10 light:border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#FF5A1F] shrink-0" />
            <p className="text-xs text-neutral-400 light:text-slate-600">
              Proficiency levels reflect honest self-assessment as a 2025 engineering graduate dedicated to real code craftsmanship rather than buzzword claims.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs text-[#FF5A1F] hover:underline font-semibold shrink-0"
          >
            See skills in projects →
          </a>
        </div>
      </div>
    </section>
  );
};
