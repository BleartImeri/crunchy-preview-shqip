import { motion } from "framer-motion";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const links = [
    { href: "#menu", label: t.nav.menu },
    { href: "#rreth", label: t.nav.about },
    { href: "#galeri", label: t.nav.gallery },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="CrunchyTime logo" className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30" />
          <div className="leading-tight">
            <div className="font-display text-lg text-brand-red">CrunchyTime</div>
            <div className="text-[10px] tracking-widest text-brand-yellow font-bold">BEST QUALITY</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a
            href="#kontakt"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            {t.nav.order}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-secondary text-secondary-foreground"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden border-t border-border bg-background/95 overflow-hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3 text-sm font-semibold">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
