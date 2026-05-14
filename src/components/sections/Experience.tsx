import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, HeartHandshake } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/portfolio-badge";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { experience, type ExperienceItem } from "@/data/experience";

const iconFor = (type: ExperienceItem["type"]) => {
  switch (type) {
    case "Internship":
      return Briefcase;
    case "Leadership":
      return Users;
    case "Volunteer":
      return HeartHandshake;
    case "Education":
      return GraduationCap;
  }
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              04 — Journey
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Experience & <span className="text-gradient">leadership</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-12">
            {experience.map((item, i) => {
              const Icon = iconFor(item.type);
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={item.role + item.org}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-4 top-2 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_rgba(99,102,241,0.6)] md:left-1/2"
                  >
                    <Icon size={14} className="text-primary-foreground" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right md:col-start-1" : "md:pl-12 md:col-start-2"}`}
                  >
                    <GlassCard glow>
                      <div
                        className={`mb-2 flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        <Badge tone="primary">{item.type}</Badge>
                        <span className="font-mono text-xs text-muted-foreground">
                          {item.dateRange}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                      <p className="text-sm text-accent">{item.org}</p>
                      <ul
                        className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}
                      >
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}
                      >
                        {item.tags.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
