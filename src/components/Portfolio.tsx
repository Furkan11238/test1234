"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { realisaties } from "@/lib/realisaties";

export default function Portfolio() {
  return (
    <section id="realisaties" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-12">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Onze realisaties"
            description="Een greep uit onze recente projecten. Vakmanschap waar we trots op zijn."
            className="mb-0 lg:max-w-xl"
          />
          <Link
            href="/#contact"
            className="text-primary font-bold hover:underline shrink-0 flex items-center gap-1"
          >
            Start uw project →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {realisaties.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/realisaties/${p.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={p.thumbnail}
                    alt={p.label}
                    fill
                    className="object-cover transition-[filter] duration-300 group-hover:brightness-50"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-semibold text-white tracking-wide">
                      Bekijk realisatie
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-white"
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {p.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {p.location} · {p.type}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="outline" className="group border-2 border-primary text-primary hover:bg-primary/5">
            <Link href="/#contact">
              Bekijk meer realisaties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}
