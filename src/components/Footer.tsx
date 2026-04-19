import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CrunchyTime" className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary/40" />
            <div>
              <div className="font-display text-xl text-secondary">CrunchyTime</div>
              <div className="text-[10px] tracking-widest text-background/60 font-bold">BEST QUALITY • PEJË</div>
              <div className="text-xs text-background/70 mt-1">Rruga Mbretëresha Teutë, Pejë</div>
            </div>
          </div>

          <div className="text-sm text-background/80">
            <div className="font-display text-secondary text-base mb-2">Orari</div>
            <div>E Hënë – E Diel: <span className="font-semibold">09:00 – 23:00</span></div>
            <div className="text-background/60">E Martë: <span className="font-semibold text-secondary">Pushim</span></div>
          </div>

          <div className="text-sm text-background/80 md:text-right">
            <div className="font-display text-secondary text-base mb-2">Kontakt</div>
            <a href="tel:+38343810800" className="block hover:text-secondary transition-colors">+383 43 810 800</a>
            <div className="flex gap-3 md:justify-end mt-3 text-xs">
              <a href="#menu" className="hover:text-secondary transition-colors">Menyja</a>
              <span>•</span>
              <a href="#galeri" className="hover:text-secondary transition-colors">Galeria</a>
              <span>•</span>
              <a href="#kontakt" className="hover:text-secondary transition-colors">Kontakt</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10 text-center text-xs text-background/60">
          © {new Date().getFullYear()} CrunchyTime. Të gjitha të drejtat të rezervuara.
        </div>
      </div>
    </footer>
  );
}
