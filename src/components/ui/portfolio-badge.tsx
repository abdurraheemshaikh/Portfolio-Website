import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: "default" | "primary" | "accent";
}

export function Badge({ children, className, tone = "default", ...props }: BadgeProps) {
  const toneClasses = {
    default: "bg-muted text-muted-foreground border border-border",
    primary: "bg-primary/15 text-primary-glow border border-primary/30",
    accent: "bg-accent/15 text-accent border border-accent/30",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-mono",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
