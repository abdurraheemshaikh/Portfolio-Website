export interface ExperienceItem {
  role: string;
  org: string;
  type: "Internship" | "Leadership" | "Volunteer" | "Education";
  dateRange: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Python Developer Intern",
    org: "Netsol Technologies",
    type: "Internship",
    dateRange: "Jun 2025 — Jul 2025",
    bullets: [
      "Developed a full-stack application using FastAPI and React.js.",
      "Implemented authentication workflows and integrated REST APIs.",
      "Set up CI pipelines with GitHub Actions for automated builds.",
    ],
    tags: ["FastAPI", "React", "Python", "Axios", "GitHub Actions"],
  },
  {
    role: "Final Year Project Lead — VoxJobs",
    org: "FAST NUCES",
    type: "Leadership",
    dateRange: "2025 — Present",
    bullets: [
      "Leading a team building a voice-driven AI job platform combining STT, RAG, and TTS.",
      "Architecting the RAG retrieval pipeline and frontend voice UX.",
      "Coordinating sprints, code reviews, and stakeholder demos.",
    ],
    tags: ["AI", "RAG", "Leadership", "FastAPI"],
  },
  {
    role: "BS Computer Science",
    org: "FAST NUCES",
    type: "Education",
    dateRange: "2022 — 2026",
    bullets: [
      "Coursework: Data Structures, Operating Systems, Computer Networks, AI, Distributed Systems.",
      "Built academic projects in C++, Python, and JavaScript across systems, web, and AI domains.",
      "Active in coding competitions and university tech societies.",
    ],
    tags: ["CS", "Algorithms", "Systems"],
  },
];
