import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Sparkles } from "lucide-react";
import {
  SiReact,
  SiPython,
  SiTypescript,
  SiFastapi,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { Button } from "@/components/ui/portfolio-button";
import { profile } from "@/data/profile";

const orbitIcons = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiFastapi, color: "#009688" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiDocker, color: "#2496ED" },
];

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export function Hero() {
  const role = useTypewriter(profile.roles);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Mesh gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary-glow">
            <Sparkles size={12} />
            Available for opportunities
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">Hey, I'm</span>
            <span className="block text-gradient animate-gradient bg-gradient-to-r from-primary-glow via-accent to-primary-glow">
              {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}.
            </span>
          </h1>

          <div className="mt-4 flex h-8 items-center gap-2 font-mono text-lg text-muted-foreground sm:text-xl">
            <span className="text-accent">&gt;</span>
            <span>{role}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-primary-glow" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollTo("projects")} size="lg">
              View My Work <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(profile.resumeUrl, "_blank")}
            >
              <Download size={16} /> Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Right: orbit visual */}
        <motion.div
          className="relative mx-auto flex h-[380px] w-[380px] items-center justify-center sm:h-[460px] sm:w-[460px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Outer rings */}
          <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
          <div
            className="absolute inset-8 rounded-full border border-accent/20"
            style={{ animation: "spin-slow 24s linear infinite reverse" }}
          />
          <div className="absolute inset-16 rounded-full border border-primary/10" />

          {/* Orbiting icons */}
          {orbitIcons.map(({ Icon, color }, idx) => {
            const angle = (idx / orbitIcons.length) * 2 * Math.PI;
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={idx}
                className="absolute grid h-12 w-12 place-items-center rounded-2xl glass shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                style={{ left: `calc(50% + ${x}px - 24px)`, top: `calc(50% + ${y}px - 24px)` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={22} color={color} />
              </motion.div>
            );
          })}

          {/* Center avatar / monogram */}
          <motion.div
            className="relative grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-primary via-primary-glow to-accent shadow-[0_0_60px_rgba(99,102,241,0.5)]"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-5xl font-bold text-primary-foreground">
              {profile.initials}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
