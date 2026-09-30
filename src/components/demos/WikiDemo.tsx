import React, { useState } from 'react';
import { Search, BookOpen, ExternalLink, BookmarkCheck, ArrowRight } from 'lucide-react';

export const WikiDemo: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'layers' | 'protocols' | 'references'>('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    { id: 'overview', title: '1. Architectural Overview' },
    { id: 'layers', title: '2. Four-Layer Model' },
    { id: 'protocols', title: '3. Core Internet Protocols' },
    { id: 'references', title: '4. References & Standards' },
  ];

  return (
    <div className="w-full bg-[#121212] border border-white/10 rounded-2xl p-4 sm:p-6 text-white max-w-3xl mx-auto shadow-2xl">
      {/* Top Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white">
            <BookOpen className="w-4 h-4 text-[#FF5A1F]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">The Open Web & TCP/IP Model</h3>
            <p className="text-xs text-neutral-400">Wikipedia-Style Structured Knowledge Project</p>
          </div>
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search article topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-56 bg-[#1A1A1A] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF5A1F]"
          />
        </div>
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Table of Contents Column */}
        <div className="md:col-span-1 border-r border-white/10 pr-3">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Contents</div>
          <nav className="space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id as any)}
                className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeSection === s.id
                    ? 'bg-[#FF5A1F]/20 text-[#FF5A1F] font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {s.title}
              </button>
            ))}
          </nav>

          {/* Quick Infobox */}
          <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] space-y-2">
            <div className="font-semibold text-neutral-200 border-b border-white/10 pb-1">Topic Summary</div>
            <div className="flex justify-between text-neutral-400">
              <span>Standard:</span>
              <span className="text-white">IETF RFC 1122</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Key Layer:</span>
              <span className="text-white">Transport / IP</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Foundation:</span>
              <span className="text-[#FF5A1F]">1983 - Present</span>
            </div>
          </div>
        </div>

        {/* Article Reading Pane */}
        <div className="md:col-span-3 space-y-4 max-h-80 overflow-y-auto pr-2 text-sm leading-relaxed text-neutral-300">
          {activeSection === 'overview' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white border-b border-white/10 pb-1">
                1. Architectural Overview
              </h4>
              <p>
                The <strong>Internet protocol suite</strong>, commonly known as <strong>TCP/IP</strong>, is the foundational framework of communication protocols utilized across the global Internet and computer networks.
              </p>
              <p className="text-xs text-neutral-400">
                It provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. This architecture emphasizes autonomous end-systems connected through stateless datagram forwarders.
              </p>
              <div className="p-3 bg-white/[0.03] border-l-2 border-[#FF5A1F] rounded-r-lg text-xs italic text-neutral-300">
                &ldquo;Simplicity at the network core enables explosive innovation at the network edge.&rdquo;
              </div>
            </div>
          )}

          {activeSection === 'layers' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white border-b border-white/10 pb-1">
                2. The Four Layer Architecture
              </h4>
              <p className="text-xs text-neutral-400">
                Unlike the theoretical 7-layer OSI reference model, the practical TCP/IP suite is organized into four distinct operational layers:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Application Layer:</span>
                    <span className="text-neutral-400 ml-1.5">HTTP, HTTPS, DNS, SSH, SMTP</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">User Space</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Transport Layer:</span>
                    <span className="text-neutral-400 ml-1.5">TCP (Reliable, Ordered) / UDP (Datagrams)</span>
                  </div>
                  <span className="text-[10px] text-[#FF5A1F] font-mono">Host-to-Host</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Internet Layer:</span>
                    <span className="text-neutral-400 ml-1.5">IPv4, IPv6, ICMP, Routing</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">Packets</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 flex justify-between items-center">
                  <div>
                    <span className="text-white font-semibold">Link Layer:</span>
                    <span className="text-neutral-400 ml-1.5">Ethernet, Wi-Fi, MAC Framing</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">Physical</span>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'protocols' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white border-b border-white/10 pb-1">
                3. Core Internet Protocols
              </h4>
              <p className="text-xs text-neutral-400">
                Key protocols that power contemporary web applications:
              </p>
              <ul className="space-y-2 text-xs">
                <li className="flex gap-2">
                  <span className="text-[#FF5A1F] font-bold">·</span>
                  <div>
                    <span className="text-white font-medium">HTTP / HTTPS:</span> The transfer protocol of the World Wide Web, operating over TLS/TCP.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF5A1F] font-bold">·</span>
                  <div>
                    <span className="text-white font-medium">Domain Name System (DNS):</span> Translates human-readable names to numeric IP addresses.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FF5A1F] font-bold">·</span>
                  <div>
                    <span className="text-white font-medium">TCP Handshake:</span> 3-way SYN, SYN-ACK, ACK mechanism ensuring synchronized sequence numbering.
                  </div>
                </li>
              </ul>
            </div>
          )}

          {activeSection === 'references' && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-white border-b border-white/10 pb-1">
                4. References & Documentation
              </h4>
              <div className="space-y-2 text-xs text-neutral-400">
                <p>1. RFC 791 — Internet Protocol (DARPA Internet Program Protocol Specification).</p>
                <p>2. RFC 793 — Transmission Control Protocol specification.</p>
                <p>3. MDN Web Docs — Client-server architecture and HTTP request-response flow.</p>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF5A1F] hover:underline"
                >
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  Connect with Rupananda to discuss web networking
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500">
        <span>Structure inspired by encyclopedic typography & Wikipedia design</span>
        <span>HTML · CSS · JavaScript layout</span>
      </div>
    </div>
  );
};
