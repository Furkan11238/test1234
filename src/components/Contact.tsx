"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ShieldCheck,
  Star,
  MapPinned,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "0488 83 93 92", href: "tel:+32488839392" },
  {
    icon: Mail,
    label: "info@mfkstukadoors.be",
    href: "mailto:info@mfkstukadoors.be",
  },
  { icon: MapPin, label: "Halstraat 12, 3550 Heusden-Zolder" },
  {
    icon: Globe,
    label: "www.mfkstukadoors.be",
    href: "https://www.mfkstukadoors.be",
  },
];

const serviceOptions = [
  "Binnenpleisterwerken",
  "Buitenpleisterwerken",
  "Gyproc / Droge bouw",
  "Spuitplamuur",
  "Schilderwerken",
  "Renovatie & Herstellingen",
];

const emptyForm = {
  naam: "",
  email: "",
  telefoon: "",
  service: "",
  bericht: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const set =
    (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.naam,
          email: form.email,
          telephone: form.telefoon,
          service: form.service,
          message: form.bericht,
        }),
      });
      if (response.ok) {
        toast({
          title: "Aanvraag verstuurd!",
          description: "Wij nemen zo snel mogelijk contact met u op.",
        });
        setForm(emptyForm);
      } else {
        toast({
          title: "Fout bij het versturen!",
          description: "Probeer het later opnieuw.",
        });
      }
    } catch {
      toast({
        title: "Fout bij het versturen!",
        description: "Probeer het later opnieuw.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading
          className="mb-16"
          eyebrow="Neem contact op"
          title="Contacteer ons"
          description="Vraag een gratis offerte aan of stel uw vraag."
        />
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-6 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Contactgegevens
              </p>
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <c.icon
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{c.label}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-6 pt-2 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground pt-6">
                Waarom kiezen voor ons?
              </p>
              <div className="flex items-start gap-4">
                <ShieldCheck
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    20 jaar vakmanschap
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Meer dan twee decennia ervaring in pleisterwerken en
                    afwerking.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Gratis & vrijblijvende offerte
                  </p>
                  <p className="text-sm text-muted-foreground">
                    U zit nergens aan vast. Wij komen ter plaatse en geven een
                    eerlijke prijs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPinned
                  className="w-5 h-5 text-primary mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Actief in heel Limburg
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Van Hasselt tot Genk en ver daarbuiten — wij komen naar u
                    toe.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-lg p-8 shadow-[0_0_0_1px_hsl(var(--border)),0_4px_12px_rgba(0,0,0,0.06)] space-y-5"
          >
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">
                Naam
              </label>
              <Input
                required
                placeholder="Uw naam"
                value={form.naam}
                onChange={set("naam")}
                className="focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-bold text-foreground mb-1.5 block">
                  E-mail
                </label>
                <Input
                  required
                  type="email"
                  placeholder="uw@email.be"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              <div>
                <label className="text-sm font-bold text-foreground mb-1.5 block">
                  Telefoon
                </label>
                <Input
                  type="tel"
                  placeholder="04XX XX XX XX"
                  value={form.telefoon}
                  onChange={set("telefoon")}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">
                Type werk
              </label>
              <Select
                value={form.service}
                onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer een dienst" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-bold text-foreground mb-1.5 block">
                Bericht
              </label>
              <Textarea
                required
                rows={4}
                placeholder="Beschrijf kort uw project..."
                value={form.bericht}
                onChange={set("bericht")}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={sending}
            >
              {sending ? "Versturen..." : "Verstuur aanvraag"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
