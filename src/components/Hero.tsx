import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";
import sandwich from "@/assets/chicken-crunchy.jpeg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-warm">
      {/* decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.5, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-yellow blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-brand-red blur-3xl"
      />

      {/* floating sparks */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-2 w-2 rounded-full bg-brand-yellow/70 shadow-glow"
          style={{ top: `${15 + i * 12}%`, left: `${(i * 17) % 90}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      <div className="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary/60 backdrop-blur border border-secondary px-3 py-1 text-xs font-bold text-brand-red mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              I HAPUR — 09:00 deri 23:00
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-brand-red drop-shadow-[0_4px_20px_rgba(220,38,38,0.25)]">
              Crunchy<span className="text-brand-yellow">yyy</span>
              <br />
              <span className="text-foreground">në zemër të</span>
              <br />
              <span className="bg-gradient-to-r from-brand-red via-primary to-brand-red bg-clip-text text-transparent bg-[length:200%_auto] animate-[shine_4s_linear_infinite]">Pejës.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Pulë crispy, sanduiçe të freskëta, wrap-a të pjekur dhe salca origjinale.
              Shije e vërtetë fast food, e bërë me dashuri çdo ditë.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#menu"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow"
              >
                Shiko Menynë
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#kontakt"
                className="inline-flex items-center rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-yellow"
              >
                Na Vizito
              </motion.a>
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
          </motion.div>

          {/* visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-sun rounded-[2rem] blur-2xl opacity-60" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow ring-4 ring-secondary/40">
              <img src={sandwich} alt="Chicken Crunchy CrunchyTime" className="w-full h-[420px] md:h-[520px] object-cover" />
            </div>
            <motion.img
              animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={logo}
              alt="logo"
              className="absolute -top-6 -left-6 h-24 w-24 md:h-32 md:w-32 rounded-full object-cover ring-4 ring-background shadow-soft"
            />
            <motion.div
              initial={{ scale: 0, rotate: 30 }}
              animate={{ scale: 1, rotate: -6 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-5 -right-3 bg-primary text-primary-foreground rounded-full px-5 py-3 font-display text-lg shadow-glow"
            >
              Best Quality!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
