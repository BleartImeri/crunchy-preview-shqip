import sandwich from "@/assets/sandwich-hotdog.jpeg";
import sticks from "@/assets/crunchy-sticks.jpeg";
import wrap from "@/assets/wrap.jpeg";
import hotdog from "@/assets/hotdog.jpeg";
import pomfritos from "@/assets/pomfritos.jpeg";

const items = [
  { name: "Chicken Sandwich Crunchy", desc: "Bukë sezami, fileto pule krokante, djathë, sallatë, domate dhe salcë shtëpie.", price: "2.90€", img: sandwich, tag: "Best Seller" },
  { name: "Crunchy Sticks", desc: "Shirita pule të krijuar nga përzierja jonë sekrete, me pomfrit dhe dy salca.", price: "4.50€", img: sticks, tag: "Popullor" },
  { name: "Chicken Wrap", desc: "Wrap i pjekur në grill me pulë, djathë cheddar, perime dhe salcat tona.", price: "3.00€", img: wrap },
  { name: "Hot Dog Crunchy", desc: "Bukë e freskët, pulë krokante, sallatë jeshile dhe majonezë shtëpie.", price: "1.80€", img: hotdog },
  { name: "Pomfritos", desc: "Pomfrit i artë me pulë, djathë cheddar të shkrirë dhe salca pikante.", price: "5.40€", img: pomfritos, tag: "Ofertë" },
];

export function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-3xl text-brand-red">Menyja jonë</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Krokant. I freskët. <span className="text-brand-red">I pakrahasueshëm.</span></h2>
          <p className="mt-4 text-muted-foreground">
            Çdo pjatë përgatitet me përbërës të freskët dhe me recetat origjinale të CrunchyTime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={it.name}
              className={`group relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 ${
                i === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "h-72 lg:h-[28rem]" : "h-56"}`}>
                <img src={it.img} alt={it.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {it.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                    {it.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-display text-lg px-3 py-1 rounded-full shadow-yellow">
                  {it.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-foreground">{it.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </article>
          ))}

          {/* offer card */}
          <article className="rounded-3xl p-6 bg-gradient-hero text-primary-foreground flex flex-col justify-between shadow-glow">
            <div>
              <span className="text-xs font-bold tracking-widest opacity-80">OFERTË SPECIALE</span>
              <h3 className="font-display text-3xl mt-2 leading-tight">Combo Crunchy</h3>
              <p className="mt-2 text-sm opacity-90">Chicken Cheese + Pomfrit + Coca Cola</p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-xs line-through opacity-70">5.40€</div>
                <div className="font-display text-4xl">4.50€</div>
              </div>
              <a href="#kontakt" className="rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold hover:scale-105 transition-transform">
                Porosit
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
