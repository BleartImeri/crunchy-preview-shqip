import sticks from "@/assets/crunchy-sticks.jpeg";
import sandwich from "@/assets/sandwich-hotdog.jpeg";
import wrap from "@/assets/wrap.jpeg";
import hotdog from "@/assets/hotdog.jpeg";
import pomfritos from "@/assets/pomfritos.jpeg";
import storefront from "@/assets/storefront.jpeg";

const photos = [
  { src: sticks, alt: "Crunchy Sticks", span: "md:col-span-2 md:row-span-2" },
  { src: sandwich, alt: "Sanduiç" },
  { src: pomfritos, alt: "Pomfritos" },
  { src: wrap, alt: "Wrap" },
  { src: hotdog, alt: "Hot Dog" },
  { src: storefront, alt: "Lokacioni" },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-3xl text-brand-red">Galeria</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Një shije e <span className="text-brand-red">CrunchyTime</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group shadow-soft ${p.span ?? ""}`}
            >
              <img src={p.src} alt={p.alt} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
