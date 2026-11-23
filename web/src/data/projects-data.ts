export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  // Whether the GitHub repository is public. Only public projects are shown on
  // the site so every "View on GitHub" link resolves for external visitors.
  public: boolean;
  // Total commits on the default branch; drives display priority.
  commits: number;
  category: "embedded" | "ai" | "web" | "research";
  account: "dramirezbe" | "mochapulse";
}

// Ordered by commit count (desc). All entries here are public; the list is
// curated to portfolio projects (course/assignment repos are intentionally
// excluded even when their commit counts are high).
export const projects: Project[] = [
  {
    title: "codeanvil-gcpds",
    description:
      "Agent-agnostic harness that takes a hardware spec to a verified prototype — any AI coding agent, any OS. Deterministic and human gates keep every step auditable.",
    technologies: ["Python", "LLM Agents", "MCP", "HIL/SIL", "V-Model", "SDR"],
    repoUrl: "https://github.com/dramirezbe/codeanvil-gcpds",
    public: true,
    commits: 411,
    category: "ai",
    account: "dramirezbe",
  },
  {
    title: "SDR-SpectrumMonitoring-Sensor",
    description:
      "Autonomous spectral monitoring sensor based on SDR technologies. Orchestrates RF measurements programmatically and in real-time with dynamic configuration.",
    technologies: ["Python", "C", "HackRF", "Raspberry Pi", "WebRTC"],
    repoUrl: "https://github.com/dramirezbe/SDR-SpectrumMonitoring-Sensor",
    public: true,
    commits: 250,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "nexus-API",
    description:
      "A secure, lightweight 24/7 daemon API to monitor telemetry, sniff systemd logs, and manage server power states (sleep & shutdown).",
    technologies: ["Python", "API", "Systemd", "Telemetry"],
    repoUrl: "https://github.com/mochapulse/nexus-API",
    public: true,
    commits: 68,
    category: "web",
    account: "mochapulse",
  },
  {
    title: "EdgeSDR-Nexus",
    description:
      "Remote radio spectrum monitoring platform with Edge-to-Cloud architecture. SDR sensor nodes (Raspberry Pi 5 + HackRF One) with C data plane, Python control, and centralized platform (Node.js, React, PostgreSQL).",
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "SDR", "Raspberry Pi"],
    repoUrl: "https://github.com/dramirezbe/EdgeSDR-Nexus",
    public: true,
    commits: 36,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "lan-controller-esp32",
    description:
      "ESP32 firmware with embedded web dashboard, real-time device status monitoring, and Wake-on-LAN control. Built with ESP-IDF v6.0.2.",
    technologies: ["C", "ESP32", "ESP-IDF", "WoLAN", "Web Dashboard"],
    repoUrl: "https://github.com/mochapulse/lan-controller-esp32",
    public: true,
    commits: 34,
    category: "embedded",
    account: "mochapulse",
  },
  {
    title: "RFFT-Scope-FPGA",
    description:
      "FPGA-based FFT scope implementation for real-time signal processing.",
    technologies: ["Verilog", "FPGA", "DSP"],
    repoUrl: "https://github.com/dramirezbe/RFFT-Scope-FPGA",
    public: true,
    commits: 32,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "CheapestSpectrumSensingProject",
    description:
      "Frontend-backend and SDR hardware/software handlers for streaming spectrum in a webpage in real-time.",
    technologies: ["Python", "SDR", "Web Streaming"],
    repoUrl: "https://github.com/dramirezbe/CheapestSpectrumSensingProject",
    public: true,
    commits: 29,
    category: "web",
    account: "dramirezbe",
  },
  {
    title: "RPI-DashWake",
    description:
      "Smart clock with integrated environmental monitoring (temperature, humidity, air quality). Includes web server for real-time metric visualization and programmable alarm management.",
    technologies: ["C", "Python", "Arduino", "JavaScript"],
    repoUrl: "https://github.com/dramirezbe/RPI-DashWake",
    public: true,
    commits: 28,
    category: "embedded",
    account: "dramirezbe",
  },
];

// Projects shown on the site: public only, highest commit count first.
export const featuredProjects = projects
  .filter((p) => p.public)
  .sort((a, b) => b.commits - a.commits);
