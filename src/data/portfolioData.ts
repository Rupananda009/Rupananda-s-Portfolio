import atsCheckerImg from '../assets/images/project_ats_checker_1790350142562.jpg';
import syspulseImg from '../assets/images/project_syspulse_preview_1790350257600.jpg';
import netpulseImg from '../assets/images/project_network_inspector_1790349686893.jpg';
import todoImg from '../assets/images/project_todo_preview_1790348821606.jpg';
import wikiImg from '../assets/images/project_wiki_preview_1790348838261.jpg';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  learnings: string[];
  image: string;
  liveDemoAvailable: boolean;
  hasInteractiveDemo: boolean;
  externalUrl?: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web' | 'Backend' | 'Database' | 'Systems' | 'Emerging Technology';
  description: string;
  level: string;
  iconName: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  summary: string;
  technologies: string[];
  capabilities: string[];
}

export const PORTFOLIO_DATA = {
  name: 'Rupananda Ganesh Kumar',
  fullName: 'Rupananda Ganesh Kumar Kadiyala',
  shortName: 'RGK',
  role: 'Developer & Technology Enthusiast',
  tagline: 'Aspiring Software Developer • Continuous Learner • Problem Solver',
  location: 'Kakinada, Andhra Pradesh, India',
  email: 'rupananda@gmail.com',
  phone: '7569286598',
  linkedin: 'https://www.linkedin.com/in/kadiyala-rupananda-ganesh-kumar-76b25b25b?utm_source=chatgpt.com',
  atsCheckerUrl: 'https://resumeai-691652860397.asia-southeast1.run.app/',

  hero: {
    greeting: "HELLO, I'M",
    headingLine1: 'Rupananda',
    headingLine2: 'Ganesh Kumar',
    subheading: 'Developer & Technology Enthusiast',
    bio: 'I build responsive web experiences, backend solutions, and technology-driven applications while continuously exploring Python, AI, networking, Linux, and modern web technologies.',
    ctaPrimary: 'Explore My Work',
    ctaSecondary: 'Get in Touch',
  },

  skillStrip: [
    { number: '01', name: 'Python' },
    { number: '02', name: 'JavaScript' },
    { number: '03', name: 'Node.js' },
    { number: '04', name: 'SQL' },
    { number: '05', name: 'Linux' },
    { number: '06', name: 'Networking' },
    { number: '07', name: 'AI' },
    { number: '08', name: 'Responsive Web Design' },
  ],

  about: {
    kicker: 'ABOUT ME',
    heading: 'Building my foundation in technology, one project at a time.',
    paragraphs: [
      'My name is Rupananda Ganesh Kumar, and I am from Kakinada, Andhra Pradesh. I completed my B.Tech in Mechanical Engineering from Pragati Engineering College in 2025. Alongside my degree, I developed a strong interest in software and technology and gained hands-on experience with HTML, CSS, Python, JavaScript, Node.js, SQL, networking, Linux, and AI.',
      'I am passionate about technology and enjoy learning how different systems work, building applications, and improving my technical skills through practical projects.',
      'As a fresher, I am looking for opportunities where I can apply my knowledge, work on real-world problems, learn from experienced professionals, and grow as a developer.',
    ],
    cta: "Let's Build Something",
    quickStats: [
      { label: 'Academic Graduation', value: '2025' },
      { label: 'Degree', value: 'B.Tech Mechanical' },
      { label: 'Technical Focus', value: 'Software & Web' },
      { label: 'Base Location', value: 'Kakinada, AP' },
    ],
  },

  education: {
    year: '2025',
    degree: 'B.Tech — Mechanical Engineering',
    institution: 'Pragati Engineering College',
    note: 'While my formal academic degree is in Mechanical Engineering, I self-directed my career toward software engineering and computer technology. I built strong practical competence in programming languages, web standards, server-side development, databases, networking principles, and Linux environments.',
  },

  skills: [
    {
      name: 'Python',
      category: 'Programming',
      description: 'Programming, automation, scripting, and practical application development.',
      level: 'Hands-on practice',
      iconName: 'Terminal',
    },
    {
      name: 'JavaScript',
      category: 'Programming',
      description: 'Core ES6+, DOM manipulation, asynchronous programming, and web logic.',
      level: 'Hands-on practice',
      iconName: 'Code',
    },
    {
      name: 'HTML',
      category: 'Web',
      description: 'Semantic markup, accessible page structure, and modern document standards.',
      level: 'Strong foundation',
      iconName: 'Layout',
    },
    {
      name: 'CSS',
      category: 'Web',
      description: 'Flexbox, Grid, custom styling, responsive layouts, and visual hierarchy.',
      level: 'Strong foundation',
      iconName: 'Palette',
    },
    {
      name: 'Responsive Web Design',
      category: 'Web',
      description: 'Fluid viewports, mobile-first breakpoints, and adaptive user interfaces.',
      level: 'Core focus',
      iconName: 'Smartphone',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'Server-side execution, REST APIs, event loops, and asynchronous runtime.',
      level: 'Building with',
      iconName: 'Server',
    },
    {
      name: 'SQL',
      category: 'Database',
      description: 'Relational data modeling, schema definition, queries, and joins.',
      level: 'Hands-on practice',
      iconName: 'Database',
    },
    {
      name: 'Linux',
      category: 'Systems',
      description: 'Shell commands, file system hierarchy, permissions, and environment setup.',
      level: 'Daily environment',
      iconName: 'Cpu',
    },
    {
      name: 'Networking',
      category: 'Systems',
      description: 'TCP/IP, HTTP/HTTPS, DNS, routing concepts, and network troubleshooting.',
      level: 'Conceptual & practical',
      iconName: 'Network',
    },
    {
      name: 'AI',
      category: 'Emerging Technology',
      description: 'Prompt engineering, LLM integrations, and modern AI development tools.',
      level: 'Currently exploring',
      iconName: 'Sparkles',
    },
  ] as SkillItem[],

  services: [
    {
      number: '01',
      title: 'Web Development',
      summary: 'Build responsive and modern websites that work smoothly across desktop, tablet, and mobile devices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
      capabilities: [
        'Semantic HTML & accessible structure',
        'Mobile-first responsive layouts',
        'Modern CSS styling & animations',
        'Interactive client-side JavaScript logic',
      ],
    },
    {
      number: '02',
      title: 'Backend Development',
      summary: 'Develop server-side functionality and APIs using Node.js and related technologies.',
      technologies: ['Node.js', 'APIs', 'Server-side logic', 'Database integration'],
      capabilities: [
        'RESTful API design and endpoints',
        'Asynchronous server-side logic in Node.js',
        'Relational database integration with SQL',
        'JSON data handling and input validation',
      ],
    },
    {
      number: '03',
      title: 'Networking & Linux',
      summary: 'Work with fundamental networking and Linux concepts, system environments, and troubleshooting.',
      technologies: ['Linux', 'Networking fundamentals', 'System configuration', 'Troubleshooting'],
      capabilities: [
        'Linux command-line navigation and shell operations',
        'Understanding TCP/IP, DNS, and HTTP protocol flows',
        'Basic server environment setup and process management',
        'System diagnostics and connectivity troubleshooting',
      ],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: 'ats-checker',
      number: '01',
      title: 'ResumeAI — AI ATS Resume Checker',
      category: 'AI & Web Application',
      shortDescription: 'An intelligent applicant tracking system (ATS) scanner that analyzes resume structure, calculates keyword compatibility, and optimizes formatting for hiring algorithms.',
      fullDescription: 'An intelligent web application designed to benchmark and evaluate tech resumes against automated applicant tracking systems (ATS). Features real-time ATS compatibility scoring, keyword density extraction, formatting audits, and automated suggestions to increase recruiter callback rates.',
      technologies: ['React', 'AI / LLM Integration', 'JavaScript', 'Node.js', 'Document Analysis'],
      features: [
        'Real-time ATS parsing and compatibility score generation',
        'Semantic keyword matching against modern tech job descriptions',
        'Section-by-section structure audit (contact info, skills, experience, education)',
        'Actionable bullet-point improvements to bypass automated candidate filters',
        'Direct live deployed application hosted on Google Cloud Run',
      ],
      learnings: [
        'Built full-stack document processing logic and semantic keyword analysis',
        'Designed high-contrast data visualization scorecards and audit breakdowns',
        'Integrated containerized web service deployment workflows on Cloud Run',
      ],
      image: atsCheckerImg,
      externalUrl: 'https://resumeai-691652860397.asia-southeast1.run.app/',
      liveDemoAvailable: true,
      hasInteractiveDemo: true,
    },
    {
      id: 'syspulse-app',
      number: '02',
      title: 'SysPulse — Linux Server & Process Telemetry',
      category: 'Linux & Systems Engineering',
      shortDescription: 'A real-time Linux server and process telemetry dashboard monitoring CPU cores, RAM allocation, background daemon processes, and TCP socket states.',
      fullDescription: 'A systems dashboard built to monitor and analyze Linux server runtime environments, active systemd processes, memory allocation, and open network sockets. Demonstrates core Linux command-line mastery, process inspection (ps aux/top), and automated system metrics collection.',
      technologies: ['Linux', 'Python', 'Bash Scripting', 'Systems Monitoring', 'WebSockets / REST'],
      features: [
        'Live dynamic CPU core load gauge and multi-channel RAM telemetry',
        'Interactive process tree with PID, user permissions, and resource consumption',
        'Built-in simulated Linux terminal shell executing commands like uptime, free -h, and top',
        'Network socket states and open port diagnostics (80, 443, 8000, 5432)',
        'Dark/light responsive dashboard design with high-contrast system alerts',
      ],
      learnings: [
        'Engineered real-time process monitoring heuristics and shell command simulations',
        'Analyzed memory buffer/cache distributions and Linux system kernel metrics',
        'Combined Linux system administration concepts with intuitive web visualization',
      ],
      image: syspulseImg,
      liveDemoAvailable: true,
      hasInteractiveDemo: true,
    },
    {
      id: 'netpulse-app',
      number: '03',
      title: 'NetPulse — Network & API Protocol Inspector',
      category: 'Systems & Networking',
      shortDescription: 'A real-time network and API diagnostics web tool for inspecting HTTP response headers, measuring TCP/IP round-trip latency, and analyzing DNS resolution.',
      fullDescription: 'A practical networking application built to analyze and understand how computer networks, servers, and modern web clients communicate. Features real-time endpoint latency breakdowns (DNS, TCP, TLS handshake, TTFB), HTTP status code analysis, and live header inspection.',
      technologies: ['JavaScript', 'Node.js', 'Networking Protocols', 'REST APIs', 'CSS3'],
      features: [
        'Interactive endpoint probing with preset web & DNS servers',
        'Visual latency breakdown across DNS, TCP connect, TLS 1.3, and TTFB',
        'HTTP response headers viewer and protocol security status check',
        'Live simulated packet round-trip time (RTT) monitor',
        'Responsive dark/light telemetry dashboard with animated metrics',
      ],
      learnings: [
        'Deepened practical knowledge of TCP/IP handshakes, DNS lookup chains, and socket states',
        'Analyzed HTTP/2 and HTTP/3 transport performance characteristics',
        'Constructed modular diagnostic visualization widgets using modern JavaScript',
      ],
      image: netpulseImg,
      liveDemoAvailable: true,
      hasInteractiveDemo: true,
    },
    {
      id: 'todo-app',
      number: '04',
      title: 'To-Do List Application',
      category: 'Web Application',
      shortDescription: 'A responsive task-management application designed to help users create, manage, update, and organize their daily tasks.',
      fullDescription: 'A responsive task-management application designed to help users create, manage, update, and organize their daily tasks efficiently. Built using core web technologies to demonstrate strong fundamental JavaScript and DOM manipulation skills.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage API'],
      features: [
        'Add new tasks with title and category priority',
        'Mark tasks as completed with immediate visual feedback',
        'Delete tasks with confirmation',
        'Filter tasks by All, Active, and Completed states',
        'Persistent storage using browser LocalStorage',
        'Fully responsive design optimized for mobile and desktop screens',
      ],
      learnings: [
        'Deepened understanding of DOM manipulation without external frameworks',
        'Implemented state persistence with JSON serialization in LocalStorage',
        'Structured modular JavaScript event listeners and clean styling patterns',
      ],
      image: todoImg,
      liveDemoAvailable: true,
      hasInteractiveDemo: true,
    },
    {
      id: 'wiki-project',
      number: '05',
      title: 'Wikipedia-Inspired Web Project',
      category: 'Editorial Portal',
      shortDescription: 'A web project focused on creating a structured information page inspired by the layout and content organization of Wikipedia.',
      fullDescription: 'A web project focused on creating a structured information page inspired by the layout and content organization of Wikipedia. Demonstrates mastery over information hierarchy, typographic balance, sticky index navigation, and responsive content reading.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Typography'],
      features: [
        'Clear typographic hierarchy modeled after encyclopedic standards',
        'Sticky table of contents with smooth section jumping',
        'Collapsible infoboxes and reference citations',
        'Interactive in-page search and reading progress bar',
        'Clean responsive layout that scales gracefully across screens',
      ],
      learnings: [
        'Engineered responsive multi-column layouts using CSS Grid and Flexbox',
        'Crafted accessible heading trees and semantic anchor navigation',
        'Practiced editorial readability and high-contrast dark theme accessibility',
      ],
      image: wikiImg,
      liveDemoAvailable: true,
      hasInteractiveDemo: true,
    },
  ] as Project[],

  currentFocus: {
    kicker: 'CURRENTLY EXPLORING',
    heading: 'Always learning. Always building.',
    description: 'I believe technology is constantly evolving, so I focus on continuously improving my skills, experimenting with new technologies, and building practical projects that strengthen my understanding.',
    topics: [
      { name: 'AI', tag: 'Emerging', description: 'Integrating AI capabilities and prompt flows into applications' },
      { name: 'Backend Development', tag: 'Core', description: 'Deepening API architecture, Express, and microservices logic' },
      { name: 'Linux', tag: 'System', description: 'Mastering shell scripting, permissions, and system administration' },
      { name: 'Networking', tag: 'System', description: 'Deepening network layers, socket communication, and protocols' },
      { name: 'Modern Web Development', tag: 'Frontend', description: 'Component-driven frontends, performance, and responsive UI' },
      { name: 'Programming', tag: 'Core', description: 'Algorithmic problem-solving in Python and JavaScript' },
    ],
  },

  whyMe: {
    heading: 'A MECHANICAL ENGINEERING GRADUATE WITH A SOFTWARE MINDSET.',
    supportingText: 'My academic background taught me structured problem-solving and engineering fundamentals. My journey into software development has allowed me to combine that mindset with programming, web technologies, backend development, Linux, networking, and AI.',
    pillars: [
      {
        number: '01',
        title: 'Curious',
        description: 'Always willing to learn new technologies, explore unfamiliar codebases, and stay enthusiastic about technical challenges.',
      },
      {
        number: '02',
        title: 'Problem Solver',
        description: 'Enjoy breaking complex real-world problems down into clear, manageable, and logically sound software solutions.',
      },
      {
        number: '03',
        title: 'Continuous Learner',
        description: 'Focused on improving everyday through hands-on projects, code reviews, and learning from experienced engineering peers.',
      },
    ],
  },

  contact: {
    kicker: "LET'S CONNECT",
    heading: "Let's Connect",
    subheading: 'Have an opportunity, project idea, or simply want to connect? Feel free to reach out.',
    email: 'rupananda@gmail.com',
    phone: '7569286598',
    location: 'Kakinada, Andhra Pradesh, India',
    linkedin: 'https://www.linkedin.com/in/kadiyala-rupananda-ganesh-kumar-76b25b25b?utm_source=chatgpt.com',
  },
};
