import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/portfolio-button";
import { GlassCard } from "@/components/ui/glass-card";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // mailto fallback — opens user's mail client (no EmailJS keys provided)
    const body = `Hi ${profile.name.split(" ")[0]},\n\n${data.message}\n\n— ${data.name} (${data.email})`;
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(
      data.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      reset();
    }, 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-14 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              06 — Contact
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's <span className="text-gradient">build something</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Have an opportunity, project, or just want to say hi? My inbox is open.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <RevealOnScroll className="lg:col-span-3">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      autoComplete="name"
                      placeholder="Your name"
                      className={cn(inputClass, errors.name && "border-destructive/60")}
                      {...register("name", { required: "Name is required", maxLength: 100 })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      className={cn(inputClass, errors.email && "border-destructive/60")}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    placeholder="What's this about?"
                    className={cn(inputClass, errors.subject && "border-destructive/60")}
                    {...register("subject", { required: "Subject is required", maxLength: 150 })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your idea, role, or project..."
                    className={cn(inputClass, "resize-none", errors.message && "border-destructive/60")}
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Min 10 characters" },
                      maxLength: 1000,
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={isSubmitting}>
                    <Send size={14} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <AnimatePresence>
                    {sent && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-1.5 text-sm text-emerald-400"
                      >
                        <CheckCircle2 size={16} /> Mail client opened!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="block"
              >
                <GlassCard glow>
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground break-all">
                        {profile.email}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block">
                <GlassCard glow>
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                      <p className="text-sm font-medium text-foreground">
                        Let's connect
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </a>

              <a href={profile.github} target="_blank" rel="noreferrer" className="block">
                <GlassCard glow>
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-foreground">
                      <Github size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
                      <p className="text-sm font-medium text-foreground">
                        @abdurraheemshaikh
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </a>

              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-foreground">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">{profile.location}</p>
                  </div>
                </div>
              </GlassCard>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(profile.resumeUrl, "_blank")}
              >
                <Download size={14} /> Download Resume
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
