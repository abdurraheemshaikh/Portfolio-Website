import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { GraduationCap, Target } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { profile } from "@/data/profile";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.4, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              01 — About
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient">A bit</span> about me
            </h2>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {profile.stats.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.1}>
              <GlassCard glow className="text-center">
                <p className="font-mono text-5xl font-bold text-gradient">
                  <CountUp value={s.value} />+
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-3">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">{profile.bio}</p>

              <GlassCard className="border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {profile.education.school}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {profile.education.degree}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {profile.education.detail}
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    <Target size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">Career Goal</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{profile.goal}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="lg:col-span-2">
            <div className="relative mx-auto h-full min-h-[360px] w-full max-w-md">
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary via-primary-glow to-accent opacity-30 blur-2xl" />
              <GlassCard className="relative flex h-full flex-col items-center justify-center gap-4 p-8">
                <div className="grid h-32 w-32 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent font-mono text-5xl font-bold text-primary-foreground shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                  {profile.initials}
                </div>
                <div className="grid w-full grid-cols-2 gap-2">
                  {["Full Stack", "AI / ML", "Systems", "DevOps"].map((chip, i) => (
                    <motion.span
                      key={chip}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-center font-mono text-xs text-muted-foreground"
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
