import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const address = "Rruga Mbretëresha Teutë, Pejë";
  const coords = "42.6590739,20.2862844";
  const embedSrc = `https://www.google.com/maps?q=${coords}&z=18&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${coords}`;
  const phone = "+383 43 810 800";
  const schedule = t.contact.schedule;

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="font-script text-3xl text-brand-red">{t.contact.kicker}</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            {t.contact.title1} <span className="text-brand-red">CrunchyTime</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.contact.desc}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border p-7 shadow-soft flex flex-col"
          >
            <div className="space-y-6 flex-1">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl shrink-0">📍</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red">{t.contact.addressLabel}</div>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-semibold block hover:text-brand-red transition-colors"
                  >
                    {address}
                  </a>
                  <div className="text-sm text-muted-foreground">{t.contact.addressCountry}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-2xl shrink-0">📞</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red">{t.contact.phoneLabel}</div>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="mt-1 font-semibold block hover:text-brand-red transition-colors">
                    {phone}
                  </a>
                  <div className="text-sm text-muted-foreground">{t.contact.phoneNote}</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-gradient-hero text-primary-foreground p-7 shadow-glow flex flex-col relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-yellow/30 blur-2xl" />
            <div className="flex items-center gap-3 mb-5 relative">
              <span className="text-3xl">🕒</span>
              <h3 className="font-display text-2xl">{t.contact.hoursTitle}</h3>
            </div>
            <ul className="space-y-2 relative flex-1">
              {schedule.map((s) => (
                <li
                  key={s.day}
                  className={`flex items-center justify-between text-sm border-b border-primary-foreground/15 pb-2 ${
                    s.closed ? "opacity-90" : ""
                  }`}
                >
                  <span className="font-semibold">{s.day}</span>
                  <span className={s.closed ? "bg-secondary text-secondary-foreground font-bold rounded-full px-3 py-0.5 text-xs" : "font-mono"}>
                    {s.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs opacity-90 relative">
              {t.contact.hoursNote}
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-glow ring-4 ring-secondary/30 min-h-[420px]"
          >
            <iframe
              title={t.contact.mapTitle}
              src={embedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
