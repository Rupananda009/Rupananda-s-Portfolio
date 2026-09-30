import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Upload, Sparkles, MapPin, Terminal, CheckCircle2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Restore photo from session storage if uploaded previously
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('rgk_custom_photo');
      if (saved) setCustomPhoto(saved);
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        try {
          sessionStorage.setItem('rgk_custom_photo', result);
        } catch (err) {
          // Ignore storage overflow
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    try {
      sessionStorage.removeItem('rgk_custom_photo');
    } catch (err) {}
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors"
    >
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-tr from-[#FF5A1F]/20 via-[#FF3D00]/15 to-[#B31217]/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-[#FF5A1F]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Grid Pattern Watermark (Hairline Subtle) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] light:bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left min-w-0">
            {/* Status / Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] light:bg-black/[0.04] border border-white/10 light:border-black/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse"></span>
              <span className="text-xs font-semibold text-neutral-300 light:text-slate-700 tracking-wider uppercase font-mono">
                {PORTFOLIO_DATA.hero.greeting}
              </span>
              <span className="text-neutral-500 light:text-slate-400">·</span>
              <span className="text-xs text-neutral-400 light:text-slate-600">Class of 2025</span>
            </div>

            {/* Name (Smaller) & Developer / Technology Enthusiast (Bigger) */}
            <div className="space-y-3 min-w-0">
              {/* Name: Made smaller and refined */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 light:text-slate-600 font-display">
                <span className="w-5 h-[2px] bg-[#FF5A1F]"></span>
                <span className="text-neutral-200 light:text-slate-800 font-bold uppercase tracking-widest">
                  {PORTFOLIO_DATA.fullName}
                </span>
              </div>

              {/* Developer & Technology Enthusiast: Made BIGGER and primary headline, properly scaled to fit column without clipping */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white light:text-slate-900 font-display leading-[1.08] break-words">
                <span className="block">Developer &</span>
                <span className="block bg-gradient-to-r from-[#FF5A1F] via-[#FF6A00] to-[#FF3D00] bg-clip-text text-transparent">
                  Technology Enthusiast
                </span>
              </h1>
            </div>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-neutral-300 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PORTFOLIO_DATA.hero.bio}
            </p>

            {/* Availability Badges / Location Metadata */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-neutral-400 light:text-slate-600">
              <span className="flex items-center gap-1.5 text-neutral-300 light:text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                {PORTFOLIO_DATA.location}
              </span>
              <span className="text-neutral-600 light:text-slate-300 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300 light:text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F]" />
                Open for Software Developer Roles
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] text-white font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl orange-glow-sm cursor-pointer"
              >
                <span>{PORTFOLIO_DATA.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/5 light:bg-black/5 hover:bg-white/10 light:hover:bg-black/10 text-white light:text-slate-900 font-semibold text-sm border border-white/15 light:border-black/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{PORTFOLIO_DATA.hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 light:text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Image Container with Glow & Rim Lighting */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end min-w-0 shrink-0">
            <div className="relative group">
              {/* Vibrant Orange/Red Radial Backdrop Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5A1F] via-[#FF3D00] to-[#B31217] rounded-[42px] opacity-35 blur-2xl group-hover:opacity-50 transition-opacity duration-500 -z-10" />

              {/* Main Rounded Frame */}
              <div className="relative w-72 h-80 sm:w-88 sm:h-96 rounded-[36px] bg-[#121212] light:bg-white border-2 border-white/15 light:border-slate-200 p-2 overflow-hidden shadow-2xl flex flex-col justify-between transition-colors">
                {/* Inner Canvas */}
                <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#1E1E1E] to-[#0A0A0A] light:from-slate-100 light:to-white flex flex-col items-center justify-center p-6 border border-white/10 light:border-slate-200">
                  {customPhoto ? (
                    <div className="relative w-full h-full">
                      <img
                        src={customPhoto}
                        alt="Rupananda Ganesh Kumar"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <button
                        onClick={removePhoto}
                        className="absolute top-2 right-2 px-2 py-1 bg-black/75 hover:bg-black text-[11px] text-neutral-300 hover:text-white rounded-md border border-white/20 transition-colors"
                        title="Remove photo"
                      >
                        Reset
                      </button>
                    </div>
                  ) : (
                    /* Stylized Developer Profile Placeholder Ready for Upload */
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Monogram Silhouette with Orange Rim Glow */}
                      <div className="relative">
                        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-[#1B1B1B] to-[#2A2A2A] light:from-slate-200 light:to-slate-300 border-2 border-[#FF5A1F] p-1 flex items-center justify-center shadow-lg relative">
                          <div className="w-full h-full rounded-full bg-[#121212] light:bg-white flex flex-col items-center justify-center">
                            <span className="text-3xl font-extrabold tracking-wider text-white light:text-slate-900 font-display">
                              RGK
                            </span>
                            <span className="text-[10px] font-mono text-[#FF5A1F] mt-0.5 tracking-widest">
                              DEVELOPER
                            </span>
                          </div>
                        </div>
                        {/* Glow dot */}
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#FF5A1F] text-black flex items-center justify-center shadow-md">
                          <Terminal className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-white light:text-slate-900 tracking-tight">
                          Rupananda Ganesh Kumar
                        </h3>
                        <p className="text-xs text-neutral-400 light:text-slate-500">
                          B.Tech 2025 · Software & Tech
                        </p>
                      </div>

                      {/* Photo Upload Trigger */}
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 light:bg-slate-200 hover:bg-[#FF5A1F] text-neutral-200 light:text-slate-800 hover:text-white text-xs font-medium transition-all border border-white/15 light:border-slate-300 cursor-pointer shadow-sm"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Upload Your Photo</span>
                      </button>
                      <p className="text-[10px] text-neutral-500 light:text-slate-400">
                        PNG or JPG • Instant local preview
                      </p>
                    </div>
                  )}

                  {/* Corner Accent Decorator */}
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-500 light:text-slate-400">
                    EST. 2025
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#FF5A1F]">
                    IN // AP
                  </div>
                </div>
              </div>

              {/* Floating Technology Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-[#161616]/95 light:bg-white/95 border border-white/15 light:border-slate-200 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FF5A1F]/20 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 light:text-slate-500">
                    Focus Areas
                  </div>
                  <div className="text-xs font-semibold text-white light:text-slate-900">
                    Python · Node.js · Linux · AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

