export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Databases"
  | "DevOps & Tools"
  | "AI / ML";

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: SkillCategory;
  icon: string; // react-icons name (resolved in component)
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 92, category: "Frontend", icon: "SiReact" },
  { name: "TypeScript", level: 85, category: "Frontend", icon: "SiTypescript" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", icon: "SiTailwindcss" },
  

  // Backend
  { name: "FastAPI", level: 90, category: "Backend", icon: "SiFastapi" },
  { name: "Node.js", level: 82, category: "Backend", icon: "SiNodedotjs" },
  { name: "Express", level: 78, category: "Backend", icon: "SiExpress" },
  { name: "REST APIs", level: 90, category: "Backend", icon: "TbApi" },

  // Languages
  { name: "Python", level: 92, category: "Languages", icon: "SiPython" },
  { name: "JavaScript", level: 90, category: "Languages", icon: "SiJavascript" },
  { name: "C++", level: 80, category: "Languages", icon: "SiCplusplus" },
  { name: "Java", level: 70, category: "Languages", icon: "FaJava" },

  // Databases
  { name: "PostgreSQL", level: 85, category: "Databases", icon: "SiPostgresql" },
  { name: "MongoDB", level: 80, category: "Databases", icon: "SiMongodb" },
 

  // DevOps
  { name: "Docker", level: 82, category: "DevOps & Tools", icon: "SiDocker" },
  { name: "Kubernetes", level: 70, category: "DevOps & Tools", icon: "SiKubernetes" },
  { name: "Git & GitHub", level: 92, category: "DevOps & Tools", icon: "SiGithub" },
  { name: "Linux", level: 85, category: "DevOps & Tools", icon: "SiLinux" },
  { name: "GitHub Actions", level: 75, category: "DevOps & Tools", icon: "SiGithubactions" },

  // AI / ML
  { name: "LangChain / RAG", level: 82, category: "AI / ML", icon: "SiOpenai" },
  { name: "TensorFlow", level: 72, category: "AI / ML", icon: "SiTensorflow" },
  { name: "OpenCV", level: 78, category: "AI / ML", icon: "SiOpencv" },
  { name: "MediaPipe", level: 75, category: "AI / ML", icon: "TbBrain" },
];
