import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";
import * as Fa from "react-icons/fa";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { skills, type SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Languages",
  "Databases",
  "DevOps & Tools",
  "AI / ML",
];

const iconRegistry: Record<string, React.ComponentType<{ size?: number }>> = {
  ...(Si as Record<string, React.ComponentType<{ size?: number }>>),
  ...(Tb as Record<string, React.ComponentType<{ size?: number }>>),
  ...(Fa as Record<string, React.ComponentType<{ size?: number }>>),
};

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");
  const filtered = skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              02 — Skills
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              My <span className="text-gradient">tech stack</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Tabs */}
        <RevealOnScroll>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  active === cat
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === cat && (
                  <motion.span
                    layoutId="skill-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_18px_rgba(99,102,241,0.4)]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((skill, i) => {
              const Icon = iconRegistry[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <GlassCard glow className="group">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted text-foreground transition group-hover:bg-primary/15 group-hover:text-primary-glow group-hover:shadow-[0_0_18px_rgba(99,102,241,0.4)]">
                        {Icon ? <Icon size={20} /> : <span className="text-xs">?</span>}
                      </div>
                      <div className="flex flex-1 items-center justify-between">
                        <h3 className="font-medium text-foreground">{skill.name}</h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
