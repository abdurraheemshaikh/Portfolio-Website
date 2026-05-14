import { Trophy, Medal, Award, FileBadge } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/portfolio-badge";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { achievements, type Achievement } from "@/data/achievements";

const iconFor = (icon: Achievement["icon"]) => {
  switch (icon) {
    case "trophy":
      return Trophy;
    case "medal":
      return Medal;
    case "certificate":
      return FileBadge;
    default:
      return Award;
  }
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              05 — Achievements
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Awards & <span className="text-gradient">recognition</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = iconFor(a.icon);
            return (
              <RevealOnScroll key={a.title} delay={i * 0.06}>
                <GlassCard glow className="group relative h-full overflow-hidden">
                  {/* Shimmer */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <div className="mb-4 flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary-glow group-hover:from-primary/30 group-hover:to-accent/30">
                      <Icon size={22} />
                    </div>
                    <Badge>{a.type}</Badge>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{a.title}</h3>
                  <p className="mt-1 text-xs text-accent">
                    {a.issuer} · {a.date}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{a.description}</p>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
