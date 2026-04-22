import { motion } from "framer-motion";
import interior from "@/assets/interior.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["🍗", "🔥", "⚡", "❤️"];

export function About() {
  const { t } = useLanguage();
  const features = t.about.features.map((f, i) => ({ icon: icons[i], ...f }));
  return (
    <section id="rreth" className="py-20 md:py-28 bg-gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-glow ring-4 ring-secondary/30">
              <img src={interior} alt={t.about.interiorAlt} className="w-full h-[460px] object-cover" />
            </div>
            <motion.div
              initial={{ scale: 0, rotate: 20 }}
              whileInView={{ scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground rounded-2xl p-5 shadow-glow"
            >
              <div className="font-display text-3xl">NEW</div>
              <div className="text-xs uppercase tracking-wider">{t.about.grandOpening}</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-script text-3xl text-brand-red">{t.about.kicker}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">
              {t.about.title1} <span className="text-brand-red">{t.about.title2}</span> {t.about.title3}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {t.about.desc}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-card border border-border p-5 hover:border-primary/40 transition-colors"
                >
                  <div className="text-3xl">{f.icon}</div>
                  <h3 className="mt-3 font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
