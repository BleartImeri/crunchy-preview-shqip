import interior from "@/assets/interior.jpeg";

const features = [
  { icon: "🍗", title: "Pulë e Freskët", desc: "Vetëm mish pule i freskët, asnjëherë i ngrirë." },
  { icon: "🔥", title: "Receta Origjinale", desc: "Përzierja jonë sekrete e erëzave që ju ben të kërkoni më shumë." },
  { icon: "⚡", title: "Shërbim i Shpejtë", desc: "Porosit, paguaj dhe shijo brenda pak minutash." },
  { icon: "❤️", title: "Bërë me Dashuri", desc: "Çdo pjatë përgatitet me kujdes nga ekipi ynë." },
];

export function About() {
  return (
    <section id="rreth" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-glow ring-4 ring-secondary/30">
              <img src={interior} alt="Interieri i CrunchyTime" className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground rounded-2xl p-5 shadow-glow rotate-[-3deg]">
              <div className="font-display text-3xl">2024</div>
              <div className="text-xs uppercase tracking-wider">Grand Opening</div>
            </div>
          </div>

          <div>
            <p className="font-script text-3xl text-brand-red">Rreth Nesh</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Vendi më <span className="text-brand-red">krokant</span> në Pejë.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              CrunchyTime është një vend i ri fast food në qendër të Pejës, ku pasioni për shijen e mirë
              takohet me cilësinë e premiumit. Specialiteti ynë? Pulë krokante e përgatitur me
              recetën tonë sekrete, e shërbyer në një ambient modern dhe miqësor.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-card border border-border p-5 hover:border-primary/40 transition-colors">
                  <div className="text-3xl">{f.icon}</div>
                  <h3 className="mt-3 font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
