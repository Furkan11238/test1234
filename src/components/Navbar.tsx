"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Section ids on the homepage — hrefs use `/#id` so links work from any route (e.g. /privacy-policy). */
const navLinks = [
  { label: "Home", id: "home" },
  { label: "Diensten", id: "diensten" },
  { label: "Realisaties", id: "realisaties" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.id);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link href="/#home" className="flex items-center">
          <span className="text-2xl font-display font-black text-primary">
            MFK
          </span>
          <span className="text-sm font-bold tracking-[0.1em] text-foreground ml-2 uppercase">
            Stukadoors
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              className={`text-sm font-bold transition-colors hover:text-primary ${
                active === `#${link.id}`
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/#contact">Vraag een offerte</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-bold text-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-2">
            <Link href="/#contact" onClick={() => setOpen(false)}>
              Vraag een offerte
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
