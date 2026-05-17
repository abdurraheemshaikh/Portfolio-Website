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
    id: "astrahr",
    title: "AstraHR",
    description:
      "Complete HRMS with payroll calculations, leave workflows, role-based dashboards, and automated reporting.",
    longDescription:
      "Developed for Software Engineering (CS3009) during my 6th semester. AstraHR is a full HR management suite built with Agile–Scrum practices. It covers end-to-end employee operations including payroll computation, leave request workflows, and role-based dashboards for HR, managers, and employees. The project included full documentation: SRS, UML diagrams, test cases using ECP/BVA techniques, and verification documentation.",
    category: "Web",
    tech: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "TailwindCSS"],
    features: [
      "Automated payroll calculation engine",
      "Multi-stage leave approval workflows",
      "Role-based dashboards (HR / Manager / Employee)",
      "Automated reporting & analytics",
    ],
    status: "live",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: "eventopia",
    title: "Eventopia",
    description:
      "Microservices-based event management platform with RabbitMQ, JWT auth, Docker deployment, and CI/CD pipelines.",
    longDescription:
      "Built for DevOps (CS4067) during my 6th semester. Eventopia is a distributed event management system composed of independent microservices for events, bookings, users, and notifications. It uses RabbitMQ for asynchronous messaging, JWT for secure authentication, and Docker for containerized deployment. This project strengthened my skills in distributed system design, CI/CD, and container orchestration.",
    category: "Systems",
    tech: ["React", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "RabbitMQ", "Docker"],
    features: [
      "Decoupled microservices architecture",
      "RabbitMQ event-driven notifications",
      "JWT-based authentication & authorization",
      "Docker-based CI/CD deployment pipelines",
    ],
    status: "live",
    gradient: "from-rose-500 to-orange-500",
  },
];
