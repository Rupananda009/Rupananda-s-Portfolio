import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Check, Copy, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0A0A0A] light:bg-[#F8F9FA] overflow-hidden transition-colors">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-gradient-to-t from-[#FF5A1F]/20 via-[#FF3D00]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[42px] bg-[#111111] light:bg-white border border-white/10 light:border-slate-200 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl transition-colors">
          {/* Section Header */}
          <div className="space-y-4 mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A1F] uppercase tracking-widest font-mono">
              <span>{PORTFOLIO_DATA.contact.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white light:text-slate-900 tracking-tight font-display text-balance">
              LET'S CONNECT
            </h2>

            <p className="text-neutral-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.contact.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-5 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/5 light:border-slate-200 hover:border-[#FF5A1F]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-black transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                        className="text-sm font-semibold text-white light:text-slate-900 hover:text-[#FF5A1F] transition-colors"
                      >
                        {PORTFOLIO_DATA.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.contact.email, 'email')}
                    className="p-2 rounded-lg bg-white/5 light:bg-white hover:bg-white/15 light:hover:bg-slate-200 text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-black transition-colors cursor-pointer border border-transparent light:border-slate-200"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-4 h-4 text-[#FF5A1F]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-5 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/5 light:border-slate-200 hover:border-[#FF5A1F]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-black transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
                        Phone / WhatsApp
                      </div>
                      <a
                        href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                        className="text-sm font-semibold text-white light:text-slate-900 hover:text-[#FF5A1F] transition-colors"
                      >
                        +91 {PORTFOLIO_DATA.contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.contact.phone, 'phone')}
                    className="p-2 rounded-lg bg-white/5 light:bg-white hover:bg-white/15 light:hover:bg-slate-200 text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-black transition-colors cursor-pointer border border-transparent light:border-slate-200"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-4 h-4 text-[#FF5A1F]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-5 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/5 light:border-slate-200 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-center text-[#FF5A1F]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-white light:text-slate-900">
                      {PORTFOLIO_DATA.contact.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="p-5 rounded-2xl bg-white/[0.03] light:bg-slate-50 border border-white/5 light:border-slate-200 hover:border-[#FF5A1F]/40 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-slate-200 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-black transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
                        LinkedIn Profile
                      </div>
                      <div className="text-sm font-semibold text-white light:text-slate-900">
                        kadiyala-rupananda-ganesh-kumar
                      </div>
                    </div>
                  </div>
                  <a
                    href={PORTFOLIO_DATA.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 light:bg-white hover:bg-[#FF5A1F] hover:text-black text-neutral-400 light:text-slate-600 transition-colors cursor-pointer border border-transparent light:border-slate-200"
                    aria-label="Open LinkedIn Profile"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Fresher Availability Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C120C] to-[#121212] light:from-orange-50 light:to-white border border-[#FF5A1F]/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF5A1F]">
                  <Sparkles className="w-4 h-4" />
                  <span>Immediate Availability</span>
                </div>
                <p className="text-xs text-neutral-300 light:text-slate-600 leading-relaxed">
                  Available for full-time Software Developer, Web Developer, Backend, or Technical Intern roles across on-site, hybrid, or remote teams.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#141414] light:bg-slate-50 border border-white/10 light:border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/20 border border-[#FF5A1F] text-[#FF5A1F] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white light:text-slate-900 font-display">
                    Thank You! Message Sent.
                  </h3>
                  <p className="text-sm text-neutral-300 light:text-slate-600 max-w-md mx-auto">
                    Your message has been recorded. Rupananda will get back to you shortly at your provided email address.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 light:bg-slate-200 hover:bg-white/20 light:hover:bg-slate-300 text-xs font-semibold text-white light:text-slate-900 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-300 light:text-slate-700">
                        Your Name <span className="text-[#FF5A1F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Sundar Pichai"
                        className={`w-full bg-[#1C1C1C] light:bg-white border rounded-xl px-4 py-3 text-sm text-white light:text-slate-900 placeholder-neutral-500 light:placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 light:border-slate-300 focus:border-[#FF5A1F]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-neutral-300 light:text-slate-700">
                        Your Email <span className="text-[#FF5A1F]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., recruiter@company.com"
                        className={`w-full bg-[#1C1C1C] light:bg-white border rounded-xl px-4 py-3 text-sm text-white light:text-slate-900 placeholder-neutral-500 light:placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/10 light:border-slate-300 focus:border-[#FF5A1F]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300 light:text-slate-700">
                      Subject <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Software Developer Opportunity / Interview Invitation"
                      className={`w-full bg-[#1C1C1C] light:bg-white border rounded-xl px-4 py-3 text-sm text-white light:text-slate-900 placeholder-neutral-500 light:placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-white/10 light:border-slate-300 focus:border-[#FF5A1F]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-neutral-300 light:text-slate-700">
                      Message <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, job opportunity details, or inquiry here..."
                      className={`w-full bg-[#1C1C1C] light:bg-white border rounded-xl px-4 py-3 text-sm text-white light:text-slate-900 placeholder-neutral-500 light:placeholder-slate-400 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-white/10 light:border-slate-300 focus:border-[#FF5A1F]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] text-white font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl orange-glow-sm cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
