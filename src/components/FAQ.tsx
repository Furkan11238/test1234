"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "In welke regio bent u actief?", a: "Wij zijn actief in heel Limburg en omstreken." },
  { q: "Hoe vraag ik een offerte aan?", a: "Via het contactformulier of telefonisch op 0488 83 93 92. Wij nemen snel contact op." },
  { q: "Voeren jullie ook kleine herstellingen uit?", a: "Ja, ook voor kleine reparaties en herstellingen zijn wij beschikbaar." },
  { q: "Hoe lang duurt een pleisterwerkopdracht?", a: "Dit hangt af van de omvang. Een gemiddelde kamer is klaar in 1 à 2 dagen." },
  { q: "Werken jullie voor particulieren en bedrijven?", a: "Ja, wij werken zowel voor particulieren als voor aannemers en bedrijven." },
];

const FAQ = () => (
  <section id="faq" className="py-24 bg-light">
    <div className="container mx-auto px-6 max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-foreground mb-4">Veelgestelde Vragen</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg px-6 border-none shadow-[0_0_0_1px_hsl(var(--border)),0_2px_4px_rgba(0,0,0,0.05)]">
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
