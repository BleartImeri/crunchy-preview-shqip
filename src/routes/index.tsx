import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CrunchyTime — Fast Food në zemër të Pejës" },
      { name: "description", content: "CrunchyTime në Pejë: pulë krokante, sanduiçe, wrap-a dhe hot dog të freskët. Rruga Mbretëresha Teutë, Pejë." },
      { property: "og:title", content: "CrunchyTime — Fast Food në zemër të Pejës" },
      { property: "og:description", content: "Pulë krokante, sanduiçe dhe wrap-a të freskët në qendër të Pejës." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
