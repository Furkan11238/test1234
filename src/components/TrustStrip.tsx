"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Jaar Ervaring" },
  { value: "500+", label: "Projecten Afgerond" },
  { value: "100%", label: "Gratis Offerte" },
  { value: "Heel", label: "Limburg" },
];

const TrustStrip = () => (
  <section className="bg-dark py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl lg:text-5xl font-black text-primary-foreground mb-2">{s.value}</div>
            <div className="text-sm font-bold text-secondary/80">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
