export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  featured: boolean;
  category: "embedded" | "ai" | "web" | "research";
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
  },
  {
    title: "SDR-SpectrumMonitoring-Sensor",
    description:
      "Autonomous spectral monitoring sensor based on SDR technologies. Orchestrates RF measurements programmatically and in real-time with dynamic configuration.",
    technologies: ["Python", "C", "HackRF", "Raspberry Pi", "WebRTC"],
    repoUrl: "https://github.com/dramirezbe/SDR-SpectrumMonitoring-Sensor",
    featured: true,
    category: "embedded",
  },
  {
    title: "SelfHostedContextCrafter",
    description:
      "Automated architectural team that orchestrates RAG-based expert agents on local hardware. Digests hardware datasheets, software documentation, and network protocols to generate structured context.",
    technologies: ["Python", "RAG", "Local LLMs", "LaTeX"],
    repoUrl: "https://github.com/dramirezbe/SelfHostedContextCrafter",
    featured: true,
    category: "ai",
  },
  {
    title: "RPI-DashWake",
    description:
      "Smart clock with integrated environmental monitoring (temperature, humidity, air quality). Includes web server for real-time metric visualization and programmable alarm management.",
    technologies: ["C", "Python", "Arduino", "JavaScript"],
    repoUrl: "https://github.com/dramirezbe/RPI-DashWake",
    featured: true,
    category: "embedded",
  },
  {
    title: "CheapestSpectrumSensingProject",
    description:
      "Frontend-backend and SDR hardware/software handlers for streaming spectrum in a webpage in real-time.",
    technologies: ["Python", "SDR", "Web Streaming"],
    repoUrl: "https://github.com/dramirezbe/CheapestSpectrumSensingProject",
    featured: false,
    category: "web",
  },
  {
    title: "RFFT-Scope-FPGA",
    description:
      "FPGA-based FFT scope implementation for real-time signal processing.",
    technologies: ["Verilog", "FPGA", "DSP"],
    repoUrl: "https://github.com/dramirezbe/RFFT-Scope-FPGA",
    featured: false,
    category: "embedded",
  },
  {
    title: "RAG-study",
    description:
      "Research and implementation of Retrieval-Augmented Generation patterns for domain-specific knowledge bases.",
    technologies: ["Python", "RAG", "LLMs"],
    repoUrl: "https://github.com/dramirezbe/RAG-study",
    featured: false,
    category: "ai",
  },
  {
    title: "Gpio-kernel-driver",
    description:
      "Linux kernel driver for GPIO control with maximum authority, demonstrating low-level system programming.",
    technologies: ["C", "Linux", "Kernel", "GPIO"],
    repoUrl: "https://github.com/dramirezbe/Gpio-kernel-driver",
    featured: false,
    category: "embedded",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
