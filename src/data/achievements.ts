export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  type: "Award" | "Competition" | "Certification";
  description: string;
  icon: "trophy" | "medal" | "award" | "certificate";
}

export const achievements: Achievement[] = [
  {
    title: "FYP Showcase Selection",
    issuer: "FAST NUCES",
    date: "2025",
    type: "Award",
    description:
      "VoxJobs selected for the university Final Year Project showcase for innovation in accessible AI.",
    icon: "trophy",
  },
  {
    title: "Hackathon Finalist",
    issuer: "Inter-University Hackathon",
    date: "2024",
    type: "Competition",
    description:
      "Reached finals with a real-time computer-vision prototype built in under 24 hours.",
    icon: "medal",
  },
  {
    title: "Python Developer Internship",
    issuer: "Netsol Technologies",
    date: "2025",
    type: "Certification",
    description:
      "Completed a full-stack engineering internship building production FastAPI + React systems.",
    icon: "certificate",
  },
  {
    title: "Open Source Contributor",
    issuer: "GitHub",
    date: "2023 — Present",
    type: "Award",
    description:
      "Maintaining personal open-source projects across full-stack web, AI, and systems domains.",
    icon: "award",
  },
  {
    title: "Programming Competition Top 10",
    issuer: "FAST NUCES",
    date: "2024",
    type: "Competition",
    description:
      "Placed top 10 in the university competitive programming contest among 100+ participants.",
    icon: "medal",
  },
  {
    title: "AI / ML Workshop Lead",
    issuer: "University Tech Society",
    date: "2024",
    type: "Award",
    description:
      "Led an introductory ML workshop covering model training, evaluation, and deployment basics.",
    icon: "award",
  },
];
