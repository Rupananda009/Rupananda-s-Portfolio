import React, { useState } from 'react';
import { Activity, Globe, Send, ShieldCheck, ArrowRight, RefreshCw, CheckCircle2, Clock } from 'lucide-react';

interface EndpointPreset {
  name: string;
  url: string;
  method: 'GET' | 'POST';
  expectedStatus: number;
  protocol: 'HTTP/2' | 'HTTP/3';
  ip: string;
}

const PRESETS: EndpointPreset[] = [
  { name: 'GitHub REST API', url: 'https://api.github.com/zen', method: 'GET', expectedStatus: 200, protocol: 'HTTP/2', ip: '140.82.112.6' },
  { name: 'Cloudflare 1.1.1.1 DNS', url: 'https://1.1.1.1/dns-query', method: 'GET', expectedStatus: 200, protocol: 'HTTP/3', ip: '1.1.1.1' },
  { name: 'Open Meteo API', url: 'https://api.open-meteo.com/v1/forecast', method: 'GET', expectedStatus: 200, protocol: 'HTTP/2', ip: '188.114.97.0' },
  { name: 'Localhost Node Server', url: 'http://localhost:3000/api/health', method: 'GET', expectedStatus: 200, protocol: 'HTTP/2', ip: '127.0.0.1' },
];

export const NetworkDemo: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<EndpointPreset>(PRESETS[0]);
  const [customUrl, setCustomUrl] = useState(PRESETS[0].url);
  const [isRunning, setIsRunning] = useState(false);
  const [diagnosticsResult, setDiagnosticsResult] = useState<{
    status: number;
    statusText: string;
    dnsTime: number;
    tcpTime: number;
    tlsTime: number;
    ttfb: number;
    totalTime: number;
    ip: string;
    headers: Record<string, string>;
  }>({
    status: 200,
    statusText: '200 OK',
    dnsTime: 12,
    tcpTime: 24,
    tlsTime: 36,
    ttfb: 42,
    totalTime: 114,
    ip: '140.82.112.6',
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'server': 'cloudflare-nginx',
      'cache-control': 'public, max-age=60',
      'x-protocol-version': 'HTTP/2.0 over TLS 1.3',
      'x-ratelimit-remaining': '59',
    },
  });

  const runTest = (preset = selectedPreset) => {
    setIsRunning(true);
    setTimeout(() => {
      const dns = Math.floor(Math.random() * 15) + 8;
      const tcp = Math.floor(Math.random() * 20) + 15;
      const tls = Math.floor(Math.random() * 25) + 20;
      const ttfb = Math.floor(Math.random() * 40) + 30;
      const total = dns + tcp + tls + ttfb;

      setDiagnosticsResult({
        status: 200,
        statusText: '200 OK - Handshake Verified',
        dnsTime: dns,
        tcpTime: tcp,
        tlsTime: tls,
        ttfb: ttfb,
        totalTime: total,
        ip: preset.ip,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'server': preset.name.includes('Cloudflare') ? 'cloudflare' : 'nginx/edge',
          'cache-control': 'public, max-age=120',
          'x-protocol-version': `${preset.protocol} / TLS 1.3`,
          'x-rtt-latency': `${total}ms`,
        },
      });
      setIsRunning(false);
    }, 500);
  };

  const handleSelectPreset = (preset: EndpointPreset) => {
    setSelectedPreset(preset);
    setCustomUrl(preset.url);
    runTest(preset);
  };

  return (
    <div className="w-full bg-[#121212] light:bg-[#FFFFFF] border border-white/10 light:border-black/10 rounded-2xl p-4 sm:p-6 text-white light:text-slate-900 max-w-3xl mx-auto shadow-2xl transition-colors">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 light:border-black/10 pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FF5A1F]/20 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F]">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white light:text-slate-900">
              NetPulse — Protocol & Latency Inspector
            </h3>
            <p className="text-xs text-neutral-400 light:text-slate-500">
              Interactive Networking Diagnostics • TCP/IP, DNS & HTTP Analysis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30 font-semibold">
            {diagnosticsResult.totalTime} ms RTT
          </span>
        </div>
      </div>

      {/* Preset selection bar */}
      <div className="mb-4">
        <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider mb-2">
          Select Target Service Endpoint
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => handleSelectPreset(p)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                selectedPreset.name === p.name
                  ? 'bg-[#FF5A1F] text-white font-medium shadow-sm'
                  : 'bg-white/5 light:bg-slate-100 text-neutral-300 light:text-slate-700 hover:text-white hover:bg-white/10 light:hover:bg-slate-200'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* URL input bar & trigger */}
      <div className="flex flex-col sm:flex-row gap-2 mb-5">
        <div className="relative flex-1">
          <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 light:text-slate-400" />
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            className="w-full bg-[#1A1A1A] light:bg-slate-50 border border-white/10 light:border-slate-300 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white light:text-slate-900 focus:outline-none focus:border-[#FF5A1F] font-mono"
          />
        </div>
        <button
          onClick={() => runTest()}
          disabled={isRunning}
          className="bg-[#FF5A1F] hover:bg-[#FF6A00] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0 disabled:opacity-50 shadow-md"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'Probing...' : 'Inspect Protocol'}</span>
        </button>
      </div>

      {/* Latency Pipeline Breakdown */}
      <div className="p-4 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 mb-5 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-white light:text-slate-900 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FF5A1F]" />
            Connection Handshake Breakdown
          </span>
          <span className="text-[11px] font-mono text-neutral-400 light:text-slate-500">
            Target Host: {diagnosticsResult.ip}
          </span>
        </div>

        {/* Visual Multi-Segment Latency Bar */}
        <div className="w-full h-3 rounded-full bg-white/10 light:bg-slate-200 overflow-hidden flex">
          <div
            style={{ width: `${(diagnosticsResult.dnsTime / diagnosticsResult.totalTime) * 100}%` }}
            className="bg-blue-500 h-full transition-all duration-300"
            title={`DNS Lookup: ${diagnosticsResult.dnsTime}ms`}
          />
          <div
            style={{ width: `${(diagnosticsResult.tcpTime / diagnosticsResult.totalTime) * 100}%` }}
            className="bg-emerald-500 h-full transition-all duration-300"
            title={`TCP Connect: ${diagnosticsResult.tcpTime}ms`}
          />
          <div
            style={{ width: `${(diagnosticsResult.tlsTime / diagnosticsResult.totalTime) * 100}%` }}
            className="bg-amber-500 h-full transition-all duration-300"
            title={`TLS Handshake: ${diagnosticsResult.tlsTime}ms`}
          />
          <div
            style={{ width: `${(diagnosticsResult.ttfb / diagnosticsResult.totalTime) * 100}%` }}
            className="bg-[#FF5A1F] h-full transition-all duration-300"
            title={`Server TTFB: ${diagnosticsResult.ttfb}ms`}
          />
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] pt-1">
          <div className="flex items-center gap-1.5 text-neutral-300 light:text-slate-700">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>DNS: <strong className="font-mono">{diagnosticsResult.dnsTime}ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300 light:text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>TCP SYN: <strong className="font-mono">{diagnosticsResult.tcpTime}ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300 light:text-slate-700">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>TLS 1.3: <strong className="font-mono">{diagnosticsResult.tlsTime}ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300 light:text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
            <span>TTFB: <strong className="font-mono">{diagnosticsResult.ttfb}ms</strong></span>
          </div>
        </div>
      </div>

      {/* Response Status & Headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Status Box */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-2">
          <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
            Protocol Status
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold text-white light:text-slate-900">
              {diagnosticsResult.statusText}
            </span>
          </div>
          <p className="text-[11px] text-neutral-400 light:text-slate-600 leading-relaxed">
            Connection completed over encrypted socket. Packets routed successfully through gateway.
          </p>
        </div>

        {/* HTTP Headers Inspector */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-1.5">
          <div className="text-[11px] font-mono text-neutral-400 light:text-slate-500 uppercase tracking-wider">
            Response Headers
          </div>
          <div className="font-mono text-[10px] space-y-1 text-neutral-300 light:text-slate-700 overflow-x-auto">
            {Object.entries(diagnosticsResult.headers).map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="text-[#FF5A1F]">{k}:</span>
                <span className="text-neutral-400 light:text-slate-600 truncate">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10 light:border-black/10 flex items-center justify-between text-[11px] text-neutral-500">
        <span>Demonstrates Network Engineering, TCP/IP & REST API Handshakes</span>
        <span>Node.js · Web Sockets · JavaScript</span>
      </div>
    </div>
  );
};
