"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-xl text-left",
        className,
      )}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed text-muted-foreground md:text-lg",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
