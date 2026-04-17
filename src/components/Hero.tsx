import logo from "@/assets/logo.jpeg";
import sandwich from "@/assets/sandwich-hotdog.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      {/* decorative blobs */}
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-yellow opacity-40 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-brand-red opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/60 border border-secondary px-3 py-1 text-xs font-bold text-brand-red mb-5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              GRAND OPENING — Peja
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-brand-red">
              Crunchy<span className="text-brand-yellow">yyy</span>
              <br />
              <span className="text-foreground">në zemër të</span>
              <br />
              <span className="text-brand-red">Pejës.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Pulë krokante, sanduiçe të freskëta, wrap-a të pjekur dhe salca origjinale.
              Shije e vërtetë fast food, e bërë me dashuri çdo ditë.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#menu" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 transition-transform">
                Shiko Menynë
              </a>
              <a href="#kontakt" className="inline-flex items-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-yellow hover:scale-105 transition-transform">
                Na Vizito
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center md:justify-start text-sm">
              <div>
                <div className="font-display text-2xl text-brand-red">100%</div>
                <div className="text-xs text-muted-foreground">Freskët çdo ditë</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-2xl text-brand-red">€1.80+</div>
                <div className="text-xs text-muted-foreground">Çmime miqësore</div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-2xl text-brand-red">⭐ 4.9</div>
                <div className="text-xs text-muted-foreground">Vlerësim klientësh</div>
              </div>
            </div>
          </div>

          {/* visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-sun rounded-[2rem] blur-2xl opacity-60" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow ring-4 ring-secondary/40">
              <img src={sandwich} alt="Sanduiç dhe hot dog CrunchyTime" className="w-full h-[420px] md:h-[520px] object-cover" />
            </div>
            <img
              src={logo}
              alt="logo"
              className="absolute -top-6 -left-6 h-24 w-24 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-background shadow-soft animate-float-slow"
            />
            <div className="absolute -bottom-5 -right-3 bg-primary text-primary-foreground rounded-full px-5 py-3 font-display text-lg shadow-glow rotate-[-6deg]">
              Best Quality!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
