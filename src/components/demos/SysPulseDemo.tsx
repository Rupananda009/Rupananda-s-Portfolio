import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, HardDrive, Activity, RefreshCw, Play, Square, Server, Layers, CheckCircle2 } from 'lucide-react';

interface ProcessItem {
  pid: number;
  user: string;
  cpu: number;
  mem: number;
  command: string;
  status: 'running' | 'sleeping' | 'idle';
}

const INITIAL_PROCESSES: ProcessItem[] = [
  { pid: 1402, user: 'rupananda', cpu: 14.2, mem: 4.8, command: 'python3 -m app.server --port 8000', status: 'running' },
  { pid: 1891, user: 'rupananda', cpu: 6.5, mem: 3.2, command: 'node dist/api-gateway.js', status: 'running' },
  { pid: 742, user: 'postgres', cpu: 2.1, mem: 8.4, command: 'postgres -D /var/lib/postgresql/data', status: 'running' },
  { pid: 310, user: 'root', cpu: 0.8, mem: 1.1, command: 'nginx: master process /usr/sbin/nginx', status: 'sleeping' },
  { pid: 98, user: 'root', cpu: 0.2, mem: 0.5, command: 'systemd-journald', status: 'sleeping' },
  { pid: 2450, user: 'rupananda', cpu: 0.1, mem: 0.9, command: 'bash --login', status: 'idle' },
];

export const SysPulseDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [cpuUsage, setCpuUsage] = useState(24);
  const [memUsage, setMemUsage] = useState(48);
  const [processes, setProcesses] = useState<ProcessItem[]>(INITIAL_PROCESSES);
  const [activeTab, setActiveTab] = useState<'processes' | 'shell' | 'network'>('processes');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Linux kernel 6.8.0-generic x86_64 Ubuntu 24.04 LTS',
    'Logged in as rupananda@kakinada-dev-box:~$',
    'Type "top", "free -h", "uptime", or "ps aux" to execute simulated shell commands.',
  ]);

  // Dynamic simulation ticker
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = (Math.random() - 0.48) * 8;
        return Math.min(92, Math.max(12, Math.round(prev + delta)));
      });
      setMemUsage((prev) => {
        const delta = (Math.random() - 0.5) * 2;
        return Math.min(85, Math.max(35, Math.round(prev + delta)));
      });
      setProcesses((prev) =>
        prev.map((proc) => {
          if (proc.status === 'running') {
            const jitter = (Math.random() - 0.5) * 3;
            return { ...proc, cpu: Math.max(0.1, +(proc.cpu + jitter).toFixed(1)) };
          }
          return proc;
        })
      );
    }, 1800);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    let response = '';
    switch (cmd.toLowerCase()) {
      case 'uptime':
        response = '15:42:10 up 14 days, 3:28, 2 users, load average: 0.45, 0.38, 0.32';
        break;
      case 'free -h':
        response = '               total        used        free      shared  buff/cache   available\nMem:           15.6Gi       7.5Gi       4.2Gi       210Mi       3.9Gi       7.8Gi\nSwap:           2.0Gi          0B       2.0Gi';
        break;
      case 'uname -a':
        response = 'Linux dev-box 6.8.0-45-generic #45-Ubuntu SMP PREEMPT x86_64 GNU/Linux';
        break;
      case 'whoami':
        response = 'rupananda (developer @ Pragati / Kakinada)';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'ps aux':
      case 'top':
        response = `PID   USER      %CPU  %MEM  COMMAND\n1402  rupananda ${cpuUsage}%   4.8%  python3 -m app.server\n1891  rupananda 6.5%   3.2%  node dist/api-gateway.js\n742   postgres  2.1%   8.4%  postgres daemon`;
        break;
      default:
        response = `bash: ${cmd}: command executed successfully (demo environment)`;
    }

    setTerminalHistory((prev) => [...prev, `rupananda@dev-box:~$ ${cmd}`, response]);
    setTerminalInput('');
  };

  return (
    <div className="rounded-2xl bg-[#121212] light:bg-white border border-white/10 light:border-slate-200 overflow-hidden shadow-2xl transition-colors">
      {/* Top telemetry bar */}
      <div className="px-5 py-3.5 bg-[#181818] light:bg-slate-100 border-b border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <Server className="w-4 h-4 text-[#FF5A1F]" />
          <span className="font-semibold text-white light:text-slate-900">
            SysPulse · Linux Server & Process Telemetry
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 light:bg-slate-200 text-neutral-300 light:text-slate-700">
            Node: kakinada-dev-01
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
              isRunning
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
            }`}
          >
            {isRunning ? <Activity className="w-3 h-3 animate-pulse" /> : <Square className="w-3 h-3" />}
            <span>{isRunning ? 'Live Telemetry Active' : 'Telemetry Paused'}</span>
          </button>
        </div>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Metric gauge cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* CPU Card */}
          <div className="p-4 rounded-xl bg-[#161616] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 light:text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#FF5A1F]" />
                CPU LOAD
              </span>
              <span>8 Cores</span>
            </div>
            <div className="text-2xl font-black font-display text-white light:text-slate-900">
              {cpuUsage}%
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 light:bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF5A1F] to-[#FF6A00] transition-all duration-500"
                style={{ width: `${cpuUsage}%` }}
              />
            </div>
          </div>

          {/* Memory Card */}
          <div className="p-4 rounded-xl bg-[#161616] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 light:text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                RAM USAGE
              </span>
              <span>16 GB DDR4</span>
            </div>
            <div className="text-2xl font-black font-display text-white light:text-slate-900">
              {memUsage}% <span className="text-xs font-normal text-neutral-400">({((memUsage * 16) / 100).toFixed(1)} GB)</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 light:bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500"
                style={{ width: `${memUsage}%` }}
              />
            </div>
          </div>

          {/* Network Socket Card */}
          <div className="p-4 rounded-xl bg-[#161616] light:bg-slate-50 border border-white/10 light:border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 light:text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                ACTIVE SOCKETS
              </span>
              <span>TCP ESTABLISHED</span>
            </div>
            <div className="text-2xl font-black font-display text-white light:text-slate-900">
              18 <span className="text-xs font-normal text-emerald-400">Stable</span>
            </div>
            <div className="text-[11px] text-neutral-400 light:text-slate-500 font-mono">
              Ports: 80, 443, 8000, 5432 open
            </div>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-2 border-b border-white/10 light:border-slate-200 pb-2 text-xs">
          <button
            onClick={() => setActiveTab('processes')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'processes'
                ? 'bg-[#FF5A1F] text-white'
                : 'text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-black'
            }`}
          >
            Process Tree (ps aux)
          </button>
          <button
            onClick={() => setActiveTab('shell')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'shell'
                ? 'bg-[#FF5A1F] text-white'
                : 'text-neutral-400 light:text-slate-600 hover:text-white light:hover:text-black'
            }`}
          >
            Interactive Bash Terminal
          </button>
        </div>

        {/* Process Table View */}
        {activeTab === 'processes' && (
          <div className="rounded-xl border border-white/10 light:border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#181818] light:bg-slate-100 text-neutral-400 light:text-slate-600 border-b border-white/10 light:border-slate-200">
                  <tr>
                    <th className="p-3">PID</th>
                    <th className="p-3">USER</th>
                    <th className="p-3">%CPU</th>
                    <th className="p-3">%MEM</th>
                    <th className="p-3">STATUS</th>
                    <th className="p-3">COMMAND</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 light:divide-slate-200 bg-[#0F0F0F] light:bg-white text-neutral-300 light:text-slate-700">
                  {processes.map((proc) => (
                    <tr key={proc.pid} className="hover:bg-white/5 light:hover:bg-slate-50 transition-colors">
                      <td className="p-3 text-neutral-400">{proc.pid}</td>
                      <td className="p-3 text-[#FF5A1F] font-semibold">{proc.user}</td>
                      <td className="p-3 font-semibold">{proc.cpu}%</td>
                      <td className="p-3">{proc.mem}%</td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] ${
                          proc.status === 'running'
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          {proc.status}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-neutral-200 light:text-slate-900 truncate max-w-xs sm:max-w-md">
                        {proc.command}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Interactive Bash Terminal View */}
        {activeTab === 'shell' && (
          <div className="rounded-xl bg-[#0A0A0A] border border-white/15 p-4 font-mono text-xs text-neutral-300 space-y-3">
            <div className="space-y-1.5 max-h-56 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {terminalHistory.map((line, idx) => (
                <div key={idx} className={line.startsWith('rupananda@') ? 'text-[#FF5A1F] font-bold' : 'text-neutral-300'}>
                  {line}
                </div>
              ))}
            </div>

            <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-[#FF5A1F] font-bold">rupananda@dev-box:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'uptime', 'free -h', 'whoami', 'clear'..."
                className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono"
              />
              <button
                type="submit"
                className="px-2.5 py-1 rounded bg-[#FF5A1F] hover:bg-[#FF6A00] text-white text-[11px] font-semibold cursor-pointer"
              >
                Run
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
