import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Eye, Circle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/portfolio-badge";
import { Modal } from "@/components/ui/portfolio-modal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ProjectCategory> = ["All", "Web", "AI", "Systems", "Games"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              03 — Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Selected <span className="text-gradient">work</span>
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition",
                  filter === f
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {filter === f && (
                  <motion.span
                    layoutId="project-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-primary/40 bg-primary/15"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <GlassCard className="group flex h-full flex-col p-0 hover:border-primary/40 hover:glow-primary">
                  {/* Image / gradient header */}
                  <div className="relative h-44 overflow-hidden rounded-t-2xl">
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-500 group-hover:scale-110",
                        p.gradient,
                      )}
                    />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <Badge tone="primary">{p.category}</Badge>
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/40 px-2.5 py-1 font-mono text-[10px] backdrop-blur">
                        <Circle
                          size={6}
                          className={p.status === "live" ? "fill-emerald-400 text-emerald-400" : "fill-amber-400 text-amber-400"}
                        />
                        {p.status === "live" ? "live" : "in progress"}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-2xl font-bold text-white/90 drop-shadow">
                      {p.title}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                      {p.tech.length > 4 && (
                        <Badge tone="accent">+{p.tech.length - 4}</Badge>
                      )}
                    </div>

                    <div className="mt-5 flex items-center gap-2 pt-4 border-t border-border">
                      <button
                        onClick={() => setOpen(p)}
                        aria-label={`View details for ${p.title}`}
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-primary/15"
                      >
                        <Eye size={14} /> Details
                      </button>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`GitHub repo for ${p.title}`}
                          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Live demo of ${p.title}`}
                          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.title}>
        {open && (
          <div>
            <Badge tone="primary" className="mb-3">
              {open.category}
            </Badge>
            <h3 className="text-3xl font-bold text-gradient">{open.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{open.longDescription}</p>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
              Key features
            </h4>
            <ul className="mt-3 space-y-2">
              {open.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary-glow" />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
              Tech stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {open.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {open.githubUrl && (
                <a
                  href={open.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/40 hover:bg-primary/10"
                >
                  <Github size={14} /> View Code
                </a>
              )}
              {open.liveUrl && (
                <a
                  href={open.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm text-primary-foreground"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
