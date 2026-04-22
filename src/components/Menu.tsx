import { motion } from "framer-motion";
import chickenCrunchy from "@/assets/chicken-crunchy.jpeg";
import chickenCheese from "@/assets/chicken-cheese.jpeg";
import chickenBbq from "@/assets/chicken-bbq.jpeg";
import bigChicken from "@/assets/big-chicken-crunchy.jpeg";
import sandwich from "@/assets/chicken-sandwich-crunchy.jpeg";
import wrap from "@/assets/wrap.jpeg";
import fillet from "@/assets/chicken-fillet.jpeg";
import sticks from "@/assets/crunchy-sticks-new.jpeg";
import hotdog from "@/assets/hotdog-classic.jpeg";
import pomfrit from "@/assets/pomfrit-new.jpeg";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKeys } from "@/i18n/translations";

type Item = {
  name: string;
  desc: string;
  price: string;
  half?: string;
  img: string;
  tag?: string;
};

function buildBurgers(t: TranslationKeys): Item[] {
  return [
    { name: "Chicken Crunchy", desc: t.menu.items.chickenCrunchy, price: "2.90€", img: chickenCrunchy, tag: t.menu.tagBest },
    { name: "Chicken Cheese", desc: t.menu.items.chickenCheese, price: "2.60€", img: chickenCheese },
    { name: "Chicken BBQ", desc: t.menu.items.chickenBbq, price: "3.00€", img: chickenBbq },
    { name: "Big Chicken Crunchy", desc: t.menu.items.bigChicken, price: "4.60€", img: bigChicken, tag: t.menu.tagXXL },
    { name: "Chicken Sandwich Crunchy", desc: t.menu.items.chickenSandwich, price: "2.90€", img: sandwich },
    { name: "Chicken Wrap", desc: t.menu.items.chickenWrap, price: "3.00€", img: wrap },
  ];
}

function buildSides(t: TranslationKeys): Item[] {
  return [
    { name: "Chicken Fillet", desc: t.menu.items.chickenFillet, price: "3.90€", img: fillet, tag: t.menu.tagPlate },
    { name: "Crunchy Sticks", desc: t.menu.items.crunchySticks, price: "4.50€", half: `${t.menu.halfLabel} 3.00€`, img: sticks, tag: t.menu.tagPopular },
    { name: "Pomfrites", desc: t.menu.items.pomfrites, price: "2.50€", half: `${t.menu.halfLabel} 1.50€`, img: pomfrit },
    { name: "Hot Dog", desc: t.menu.items.hotDog, price: "1.80€", img: hotdog },
  ];
}

function buildDrinks(t: TranslationKeys) {
  return [
    { name: "Coca Cola", price: "1.30€" },
    { name: "Coca Cola Zero", price: "1.30€" },
    { name: "Fanta Orange", price: "1.30€" },
    { name: "Fanta Tropical", price: "1.30€" },
    { name: "Sprite", price: "1.30€" },
    { name: "Ice Tea", price: "1.30€" },
    { name: "Schweppes", price: "1.30€" },
    { name: "Strawberry", price: "1.30€" },
    { name: "Peach", price: "1.30€" },
    { name: t.menu.naturalWater, price: "0.70€" },
    { name: t.menu.mineralWater, price: "1.00€" },
  ];
}

const sauces = [
  "Garlic Sauce", "BBQ Sauce", "Sweet Chilli", "Sweet & Sour", "Home Sauce", "Home Mayo", "Home Spicy",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

function FoodCard({ it, i, featured }: { it: Item; i: number; featured?: boolean }) {
  return (
    <motion.article
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className={`group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-glow transition-all duration-500 ${
        featured ? "lg:row-span-2" : ""
      }`}
    >
      {/* shimmer sweep on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

      <div className={`relative overflow-hidden ${featured ? "h-72 lg:h-[28rem]" : "h-56"}`}>
        <img
          src={it.img}
          alt={it.name}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-80" />
        {it.tag && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-glow animate-pulse-glow">
            {it.tag}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-display text-lg px-3 py-1 rounded-full shadow-yellow group-hover:scale-110 transition-transform">
          {it.price}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-foreground">{it.name}</h3>
        {it.half && (
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-brand-red bg-secondary/40 rounded-full px-3 py-1">
            ½ {it.half}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Menu() {
  const { t } = useLanguage();
  const burgers = buildBurgers(t);
  const sides = buildSides(t);
  const drinks = buildDrinks(t);
  return (
    <section id="menu" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-brand-yellow opacity-20 blur-3xl" />
      <div className="absolute bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-red opacity-10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="font-script text-3xl text-brand-red">{t.menu.kicker}</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">
            {t.menu.title1} <span className="text-brand-red">{t.menu.title2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.menu.desc}
          </p>
        </motion.div>

        {/* Burgers */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-script text-2xl text-brand-red">{t.menu.burgersTitle}</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgers.map((it, i) => (
              <FoodCard key={it.name} it={it} i={i} featured={i === 0} />
            ))}
          </div>
        </div>

        {/* Sides + Hot Dogs */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-script text-2xl text-brand-red">{t.menu.sidesTitle}</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sides.map((it, i) => (
              <FoodCard key={it.name} it={it} i={i} />
            ))}

            {/* offer card */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl p-6 bg-gradient-hero text-primary-foreground flex flex-col justify-between shadow-glow relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-yellow/30 blur-2xl" />
              <div className="relative">
                <span className="text-xs font-bold tracking-widest opacity-90">{t.menu.offerLabel}</span>
                <h3 className="font-display text-3xl mt-2 leading-tight">{t.menu.offerTitle}</h3>
                <p className="mt-2 text-sm opacity-90">{t.menu.offerDesc}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider bg-secondary/90 text-secondary-foreground inline-block rounded-full px-3 py-1">
                  {t.menu.offerNote}
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between relative">
                <div>
                  <div className="text-xs line-through opacity-70">5.40€</div>
                  <div className="font-display text-4xl">4.50€</div>
                </div>
                <span className="rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold">
                  {t.menu.offerBadge}
                </span>
              </div>
            </motion.article>
          </div>
        </div>

        {/* Drinks + Sauces */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border border-border p-7 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">🥤</span>
              <h3 className="font-display text-2xl text-brand-red">{t.menu.drinks}</h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {drinks.map((d) => (
                <li key={d.name} className="flex items-baseline justify-between gap-2 border-b border-dashed border-border/60 py-1.5">
                  <span className="text-foreground">{d.name}</span>
                  <span className="font-bold text-brand-red shrink-0">{d.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-warm border border-border p-7 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-3xl">🌶️</span>
              <h3 className="font-display text-2xl text-brand-red">{t.menu.sauces}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {sauces.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full bg-card border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary/40 hover:text-brand-red transition-colors"
                >
                  {s}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-bold">
                {t.menu.allSauces}
              </span>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              {t.menu.saucesNote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
