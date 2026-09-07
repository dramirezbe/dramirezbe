export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  featured: boolean;
  category: "embedded" | "ai" | "web" | "research";
  account: "dramirezbe" | "mochapulse";
}

export const projects: Project[] = [
  {
    title: "EdgeSDR-Nexus",
    description:
      "Remote radio spectrum monitoring platform with Edge-to-Cloud architecture. SDR sensor nodes (Raspberry Pi 5 + HackRF One) with C data plane, Python control, and centralized platform (Node.js, React, PostgreSQL).",
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "SDR", "Raspberry Pi"],
    repoUrl: "https://github.com/dramirezbe/EdgeSDR-Nexus",
    featured: true,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "SDR-SpectrumMonitoring-Sensor",
    description:
      "Autonomous spectral monitoring sensor based on SDR technologies. Orchestrates RF measurements programmatically and in real-time with dynamic configuration.",
    technologies: ["Python", "C", "HackRF", "Raspberry Pi", "WebRTC"],
    repoUrl: "https://github.com/dramirezbe/SDR-SpectrumMonitoring-Sensor",
    featured: true,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "SelfHostedContextCrafter",
    description:
      "Automated architectural team that orchestrates RAG-based expert agents on local hardware. Digests hardware datasheets, software documentation, and network protocols to generate structured context.",
    technologies: ["Python", "RAG", "Local LLMs", "LaTeX"],
    repoUrl: "https://github.com/dramirezbe/SelfHostedContextCrafter",
    featured: true,
    category: "ai",
    account: "dramirezbe",
  },
  {
    title: "RPI-DashWake",
    description:
      "Smart clock with integrated environmental monitoring (temperature, humidity, air quality). Includes web server for real-time metric visualization and programmable alarm management.",
    technologies: ["C", "Python", "Arduino", "JavaScript"],
    repoUrl: "https://github.com/dramirezbe/RPI-DashWake",
    featured: true,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "CheapestSpectrumSensingProject",
    description:
      "Frontend-backend and SDR hardware/software handlers for streaming spectrum in a webpage in real-time.",
    technologies: ["Python", "SDR", "Web Streaming"],
    repoUrl: "https://github.com/dramirezbe/CheapestSpectrumSensingProject",
    featured: false,
    category: "web",
    account: "dramirezbe",
  },
  {
    title: "RFFT-Scope-FPGA",
    description:
      "FPGA-based FFT scope implementation for real-time signal processing.",
    technologies: ["Verilog", "FPGA", "DSP"],
    repoUrl: "https://github.com/dramirezbe/RFFT-Scope-FPGA",
    featured: false,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "RAG-study",
    description:
      "Research and implementation of Retrieval-Augmented Generation patterns for domain-specific knowledge bases.",
    technologies: ["Python", "RAG", "LLMs"],
    repoUrl: "https://github.com/dramirezbe/RAG-study",
    featured: false,
    category: "ai",
    account: "dramirezbe",
  },
  {
    title: "Gpio-kernel-driver",
    description:
      "Linux kernel driver for GPIO control with maximum authority, demonstrating low-level system programming.",
    technologies: ["C", "Linux", "Kernel", "GPIO"],
    repoUrl: "https://github.com/dramirezbe/Gpio-kernel-driver",
    featured: false,
    category: "embedded",
    account: "dramirezbe",
  },
  {
    title: "nexus-API",
    description:
      "A secure, lightweight 24/7 daemon API to monitor telemetry, sniff systemd logs, and manage server power states (sleep & shutdown).",
    technologies: ["Python", "API", "Systemd", "Telemetry"],
    repoUrl: "https://github.com/mochapulse/nexus-API",
    featured: true,
    category: "web",
    account: "mochapulse",
  },
  {
    title: "lan-controller-esp32",
    description:
      "ESP32 firmware with embedded web dashboard, real-time device status monitoring, and Wake-on-LAN control. Built with ESP-IDF v6.0.2.",
    technologies: ["C", "ESP32", "ESP-IDF", "WoLAN", "Web Dashboard"],
    repoUrl: "https://github.com/mochapulse/lan-controller-esp32",
    featured: true,
    category: "embedded",
    account: "mochapulse",
  },
  {
    title: "LocalLLMTestingUsingLlamaCpp",
    description:
      "Local LLM testing and inference using llama.cpp for on-device AI capabilities.",
    technologies: ["C", "LLM", "llama.cpp", "AI"],
    repoUrl: "https://github.com/mochapulse/LocalLLMTestingUsingLlamaCpp",
    featured: false,
    category: "ai",
    account: "mochapulse",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
