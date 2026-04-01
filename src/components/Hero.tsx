"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Vervang dit door jullie eigen werk: zet `hero-mfk.jpg` in /public en wijzig de src hieronder naar "/hero-mfk.jpg" (dan mag deze externe URL weg). */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80";

const ease = [0.25, 0.1, 0.25, 1] as const;

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center bg-background pt-20 overflow-hidden"
  >
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Vakmanschap
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            20 jaar · Limburg
          </p>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-primary leading-[0.95] mb-6 tracking-tighter">
          Uw wanden in <br />
          <span className="text-foreground">perfecte handen</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
          MFK Stukadoors staat voor kwaliteit, precisie en vakmanschap. Wij
          transformeren uw ruwbouw tot een spiegelglat resultaat.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button
            asChild
            size="lg"
            className="group shadow-lg shadow-primary/10"
          >
            <Link href="/#contact">
              Vraag een offerte
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary/5"
          >
            <Link href="/#diensten">Bekijk onze diensten</Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="relative hidden lg:block"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        <div className="relative aspect-[4/5] max-h-[min(85vh,560px)] w-full overflow-hidden rounded-3xl bg-muted shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
          <Image
            src={HERO_IMAGE}
            alt="Strak afgewerkte muren en modern interieur — visuele sfeerbeeld voor kwaliteitspleisterwerk"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
