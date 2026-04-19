import { motion } from "framer-motion";
import sticks from "@/assets/crunchy-sticks-new.jpeg";
import bigChicken from "@/assets/big-chicken-crunchy.jpeg";
import wrap from "@/assets/wrap.jpeg";
import hotdogLoaded from "@/assets/hotdog-loaded.jpeg";
import pomfrit from "@/assets/pomfrit-new.jpeg";
import storefront from "@/assets/storefront.jpeg";
import fillet from "@/assets/chicken-fillet.jpeg";
import chickenCrunchy from "@/assets/chicken-crunchy.jpeg";

const photos = [
  { src: bigChicken, alt: "Big Chicken Crunchy", span: "md:col-span-2 md:row-span-2" },
  { src: sticks, alt: "Crunchy Sticks" },
  { src: pomfrit, alt: "Pomfritos" },
  { src: chickenCrunchy, alt: "Chicken Crunchy" },
  { src: wrap, alt: "Wrap" },
  { src: hotdogLoaded, alt: "Hot Dog Crunchy" },
  { src: fillet, alt: "Chicken Fillet" },
  { src: storefront, alt: "Lokacioni" },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="font-script text-3xl text-brand-red">Galeria</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            Një shije e <span className="text-brand-red">CrunchyTime</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl overflow-hidden group shadow-soft ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-background font-display text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {p.alt}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
