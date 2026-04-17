export function Contact() {
  const address = "Rruga Mbretëresha Teutë, Pejë";
  const mapsQuery = encodeURIComponent("Rruga Mbretëresha Teutë, Pejë, Kosovo");
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-3xl text-brand-red">Na Gjeni</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Eja dhe shijo <span className="text-brand-red">CrunchyTime</span></h2>
          <p className="mt-4 text-muted-foreground">Në qendër të Pejës, lehtë për t'u gjetur.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl bg-card border border-border p-8 shadow-soft flex flex-col">
            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl shrink-0">📍</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red">Adresa</div>
                  <div className="mt-1 font-semibold">{address}</div>
                  <div className="text-sm text-muted-foreground">Kosovë</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl shrink-0">🕒</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red">Orari</div>
                  <div className="mt-1 font-semibold">E Hënë – E Diel</div>
                  <div className="text-sm text-muted-foreground">10:00 – 23:00</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl shrink-0">📞</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red">Porosit / Informacion</div>
                  <div className="mt-1 font-semibold">Vizito lokalin tonë</div>
                  <div className="text-sm text-muted-foreground">Porosit dhe paguaj në vend</div>
                </div>
              </div>
            </div>

            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Hap në Google Maps →
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-glow ring-4 ring-secondary/30 min-h-[420px]">
            <iframe
              title="CrunchyTime Lokacioni"
              src={embedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
