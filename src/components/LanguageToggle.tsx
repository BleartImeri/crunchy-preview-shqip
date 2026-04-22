import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur p-0.5 text-xs font-bold">
      <button
        onClick={() => setLang("sq")}
        aria-pressed={lang === "sq"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "sq" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        SQ
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}