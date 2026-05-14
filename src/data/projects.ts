export type ProjectCategory = "Web" | "AI" | "Systems" | "Games";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "wip";
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "voxjobs",
    title: "VoxJobs",
    description:
      "Voice-driven AI job discovery platform combining STT, RAG semantic search, and TTS for hands-free job hunting.",
    longDescription:
      "Final Year Project. VoxJobs lets users discover and apply for jobs entirely through voice. Speech-to-text captures intent, a RAG pipeline performs semantic search over a vectorized job corpus, and TTS reads results back. Designed for accessibility and on-the-go use.",
    category: "AI",
    tech: ["Python", "FastAPI", "RAG", "Whisper", "LangChain", "React"],
    features: [
      "Real-time speech-to-text with Whisper",
      "RAG pipeline over vectorized job listings",
      "Conversational job filtering & application",
      "Natural TTS responses",
    ],
    status: "wip",
    gradient: "from-indigo-500 via-purple-500 to-cyan-500",
  },
  {
    id: "real-estate",
    title: "Real Estate Marketplace",
    description:
      "Full-stack property platform with JWT auth, role-based dashboards, and advanced multi-filter property search.",
    longDescription:
      "A production-grade marketplace where buyers, sellers, and agents each get tailored dashboards. Features secure JWT authentication, advanced search with geo and price filters, image galleries, and an admin moderation panel.",
    category: "Web",
    tech: ["React", "FastAPI", "PostgreSQL", "JWT", "TailwindCSS"],
    features: [
      "Role-based dashboards (buyer / seller / admin)",
      "Advanced search with geo & price filters",
      "Secure JWT authentication & refresh flow",
      "Image upload & property galleries",
    ],
    status: "live",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    id: "whispering-hands",
    title: "Whispering Hands",
    description:
      "Real-time AI sign-language translator with gesture recognition, sign-to-text, and speech output.",
    longDescription:
      "An assistive AI tool that bridges the Deaf and hearing communities. Uses MediaPipe for hand landmark detection and a trained classifier to convert signs into text and synthesized speech in real time.",
    category: "AI",
    tech: ["React", "FastAPI", "MediaPipe", "OpenCV", "TensorFlow"],
    features: [
      "Real-time hand landmark detection",
      "Sign-to-text classification",
      "Text-to-speech output",
      "Webcam-based, zero install for end users",
    ],
    status: "live",
    gradient: "from-fuchsia-500 to-indigo-500",
  },
  {
    id: "event-booking",
    title: "Event Booking Microservices",
    description:
      "Containerized microservices platform with REST APIs, Kubernetes orchestration, and scalable deployment.",
    longDescription:
      "An event ticketing system designed as decoupled microservices — auth, events, bookings, and payments — communicating over REST. Containerized with Docker and orchestrated on Kubernetes with horizontal autoscaling.",
    category: "Systems",
    tech: ["Docker", "Kubernetes", "Node.js", "PostgreSQL", "Nginx"],
    features: [
      "Independent microservices with REST APIs",
      "Docker + Kubernetes orchestration",
      "Horizontal pod autoscaling",
      "Centralized logging & health checks",
    ],
    status: "live",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    id: "netsol-fullstack",
    title: "Loan Workflow App",
    description:
      "Internship project at Netsol — full-stack app with FastAPI backend, React frontend, and CI via GitHub Actions.",
    longDescription:
      "Built during my Python Developer internship at Netsol Technologies. Implemented authentication workflows, REST API integration, and a React dashboard. Deployment automated through GitHub Actions.",
    category: "Web",
    tech: ["FastAPI", "React", "Python", "Axios", "GitHub Actions"],
    features: [
      "JWT-based authentication workflows",
      "Typed REST API with OpenAPI docs",
      "React dashboard with Axios integration",
      "CI/CD via GitHub Actions",
    ],
    status: "live",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "network-tool",
    title: "Network Protocol Toolkit",
    description:
      "Low-level networking toolkit implementing custom protocols over raw sockets in C++ and Python.",
    longDescription:
      "An academic systems project exploring custom packet structures, reliable transport over UDP, and a CLI inspector for live traffic. Demonstrates OSI-model fundamentals end to end.",
    category: "Systems",
    tech: ["C++", "Python", "Sockets", "Wireshark"],
    features: [
      "Custom packet framing & parsing",
      "Reliable transport over UDP",
      "CLI traffic inspector",
      "Cross-platform (Linux / macOS)",
    ],
    status: "live",
    gradient: "from-emerald-500 to-teal-500",
  },
];
