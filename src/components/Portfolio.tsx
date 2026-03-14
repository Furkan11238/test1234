"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  "Binnenpleisterwerk", "Gevelrenovatie", "Gyproc plafonds",
  "Spuitplamuur", "Schilderwerken", "Renovatie",
];

const Portfolio = () => (
  <section id="realisaties" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-foreground mb-4">Onze Realisaties</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Een greep uit onze recente projecten.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-light"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/80 transition-colors duration-300 flex items-center justify-center">
              <span className="text-primary font-bold text-lg opacity-30 group-hover:opacity-0 transition-opacity">
                {p}
              </span>
              <span className="absolute text-primary-foreground font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {p}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Benieuwd wat wij voor u kunnen doen?</p>
        <Button asChild size="lg">
          <a href="#contact">Vraag een offerte</a>
        </Button>
      </div>
    </div>
  </section>
);

export default Portfolio;
