import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CrunchyTime" className="h-12 w-12 rounded-full object-cover ring-2 ring-secondary/40" />
            <div>
              <div className="font-display text-xl text-secondary">CrunchyTime</div>
              <div className="text-[10px] tracking-widest text-background/60 font-bold">BEST QUALITY • PEJË</div>
            </div>
          </div>
          <p className="text-sm text-background/70 text-center">
            © {new Date().getFullYear()} CrunchyTime. Të gjitha të drejtat të rezervuara.
          </p>
          <div className="flex gap-3 text-xs text-background/70">
            <a href="#menu" className="hover:text-secondary transition-colors">Menyja</a>
            <span>•</span>
            <a href="#kontakt" className="hover:text-secondary transition-colors">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
