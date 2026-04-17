import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#menu", label: "Menyja" },
  { href: "#rreth", label: "Rreth Nesh" },
  { href: "#galeri", label: "Galeria" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
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
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
        >
          Porosit Tani
        </a>
      </div>
    </header>
  );
}
