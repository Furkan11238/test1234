"use client";

import { motion } from "framer-motion";
import { Home, Building2, LayoutGrid, Paintbrush, Brush, Wrench } from "lucide-react";

const services = [
  { icon: Home, title: "Binnenpleisterwerken", desc: "Strakke en duurzame binnenafwerking voor nieuwbouw en renovatie." },
  { icon: Building2, title: "Buitenpleisterwerken", desc: "Weerbestendige gevelbekleding die uw woning beschermt en verfraait." },
  { icon: LayoutGrid, title: "Gyproc / Droge bouw", desc: "Snelle en nette plaatsing van gipskartonwanden en -plafonds." },
  { icon: Paintbrush, title: "Spuitplamuur", desc: "Spiegelgladde muurafwerking klaar voor schilderwerk." },
  { icon: Brush, title: "Schilderwerken", desc: "Professioneel schilderwerk binnen en buiten voor een perfect eindresultaat." },
  { icon: Wrench, title: "Renovatie & Herstellingen", desc: "Herstel van beschadigde muren, scheuren en oude afwerkingen." },
];

const Services = () => (
  <section id="diensten" className="py-24 bg-light">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-foreground mb-4">Onze Diensten</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Van ruwbouw tot afwerking — wij verzorgen het volledige pleisterwerk.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-card rounded-lg p-6 shadow-[0_0_0_1px_hsl(var(--border)),0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-200"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            <s.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
