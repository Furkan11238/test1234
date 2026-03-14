"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.25, 0.1, 0.25, 1] as const;

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center bg-background pt-20 overflow-hidden">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="inline-block py-1 px-3 rounded-lg bg-primary/10 text-primary text-sm font-bold mb-6">
          20 jaar vakmanschap · Limburg
        </span>
        <h1 className="text-5xl lg:text-7xl font-black text-primary leading-[0.95] mb-6 tracking-tighter">
          Uw wanden in <br />
          <span className="text-foreground">perfecte handen</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
          MFK Stukadoors staat voor kwaliteit, precisie en vakmanschap.
          Wij transformeren uw ruwbouw tot een spiegelglat resultaat.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Button asChild size="lg" className="group shadow-lg shadow-primary/10">
            <a href="#contact">
              Vraag een offerte
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5">
            <a href="#diensten">Bekijk onze diensten</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-bold text-foreground">
          {["20 jaar ervaring", "Gratis offerte", "Heel Limburg"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative hidden lg:block"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
      >
        <div className="aspect-square bg-light rounded-3xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary fill-none" strokeWidth="0.5">
              <path d="M 0 100 Q 50 0 100 100" />
              <path d="M 10 100 Q 50 20 90 100" />
            </svg>
          </div>
          <div className="text-center z-10">
            <div className="w-48 h-48 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
              <span className="text-6xl font-black italic text-primary-foreground">MFK</span>
            </div>
            <p className="text-primary font-black tracking-[0.3em] text-xl">STUKADOORS</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
