export type Lang = "sq" | "en";

type Schedule = ReadonlyArray<{ day: string; hours: string; closed?: boolean }>;
type Feature = { title: string; desc: string };

export type TranslationKeys = {
  nav: { menu: string; about: string; gallery: string; contact: string; order: string };
  hero: {
    openBadge: string; titlePart1: string; titlePart2: string; titlePart3: string; titlePart4: string;
    desc: string; ctaMenu: string; ctaVisit: string; stat1Label: string; stat2Label: string; bestQuality: string;
  };
  menu: {
    kicker: string; title1: string; title2: string; desc: string;
    burgersTitle: string; sidesTitle: string; drinks: string; sauces: string;
    allSauces: string; saucesNote: string;
    offerLabel: string; offerTitle: string; offerDesc: string; offerNote: string; offerBadge: string;
    tagBest: string; tagXXL: string; tagPlate: string; tagPopular: string; halfLabel: string;
    naturalWater: string; mineralWater: string;
    items: {
      chickenCrunchy: string; chickenCheese: string; chickenBbq: string; bigChicken: string;
      chickenSandwich: string; chickenWrap: string; chickenFillet: string; crunchySticks: string;
      pomfrites: string; hotDog: string;
    };
  };
  about: {
    kicker: string; title1: string; title2: string; title3: string; desc: string;
    grandOpening: string; features: ReadonlyArray<Feature>; interiorAlt: string;
  };
  gallery: { kicker: string; title1: string; locationAlt: string };
  contact: {
    kicker: string; title1: string; desc: string;
    addressLabel: string; addressCountry: string; phoneLabel: string; phoneNote: string;
    hoursTitle: string; closed: string; hoursNote: string; mapTitle: string;
    schedule: Schedule;
  };
  footer: {
    tagline: string; address: string; hoursTitle: string; hoursWeek: string; hoursTuesday: string;
    closed: string; contactTitle: string; menu: string; gallery: string; contact: string; rights: string;
  };
};

export const translations: Record<Lang, TranslationKeys> = {
  sq: {
    nav: {
      menu: "Menyja",
      about: "Rreth Nesh",
      gallery: "Galeria",
      contact: "Kontakt",
      order: "Porosit Tani",
    },
    hero: {
      openBadge: "I HAPUR — 09:00 deri 23:00",
      titlePart1: "Crunchy",
      titlePart2: "yyy",
      titlePart3: "në zemër të",
      titlePart4: "Pejës.",
      desc: "Pulë crispy, sanduiçe të freskëta, wrap-a të pjekur dhe salca origjinale. Shije e vërtetë fast food, e bërë me dashuri çdo ditë.",
      ctaMenu: "Shiko Menynë",
      ctaVisit: "Na Vizito",
      stat1Label: "Freskët çdo ditë",
      stat2Label: "Çmime miqësore",
      bestQuality: "Best Quality!",
    },
    menu: {
      kicker: "Menyja jonë",
      title1: "Crispy. I freskët.",
      title2: "I pakrahasueshëm.",
      desc: "Çdo pjatë përgatitet me përbërës të freskët dhe me recetat origjinale të CrunchyTime.",
      burgersTitle: "Burgers & Wraps",
      sidesTitle: "Sticks, Pomfrit & Hot Dog",
      drinks: "Pijet",
      sauces: "Salcat shtëpie",
      allSauces: "Të gjitha 0.50€",
      saucesNote: "Salcat tona janë të shijshme — sekreti i shijes CrunchyTime.",
      offerLabel: "OFERTË SPECIALE",
      offerTitle: "Combo Crunchy",
      offerDesc: "Chicken Cheese + Pomfrit + Coca Cola",
      offerNote: "Vetëm në vend · jo me porosi",
      offerBadge: "Ja vlen!",
      tagBest: "Best Seller",
      tagXXL: "XXL",
      tagPlate: "Plate",
      tagPopular: "Popullor",
      halfLabel: "1/2 porcion",
      naturalWater: "Ujë natyral",
      mineralWater: "Ujë mineral",
      items: {
        chickenCrunchy: "Bukë sezami, fileto pule crispy, djathë cheddar, sallatë, domate dhe salcë shtëpie.",
        chickenCheese: "Klasiku me dyfish djathë cheddar të shkrirë mbi pulën tonë crispy.",
        chickenBbq: "Pulë crispy me salcë BBQ të ëmbël-pikante dhe perime të freskëta.",
        bigChicken: "Dyshe e plotë: dy fileto pule, dyfish djathë, sallatë dhe salca shtëpie.",
        chickenSandwich: "Bukë e zgjatur, pulë crispy, djathë, sallatë dhe salcat tona origjinale.",
        chickenWrap: "Wrap i pjekur në grill me pulë, djathë cheddar, perime dhe salcat tona.",
        chickenFillet: "Fileto pule crispy me pomfrit, sallatë të freskët dhe dy salca.",
        crunchySticks: "Shirita pule të krijuar nga përzierja jonë sekrete, me dy salca.",
        pomfrites: "Pomfrit i artë me erëza shtëpie, i shërbyer i nxehtë.",
        hotDog: "Bukë e freskët, pulë crispy, sallatë jeshile dhe majonezë shtëpie.",
      },
    },
    about: {
      kicker: "Rreth Nesh",
      title1: "Vendi më",
      title2: "crispy",
      title3: "në Pejë.",
      desc: "CrunchyTime është një vend i ri fast food në qendër të Pejës, ku pasioni për shijen e mirë takohet me cilësinë e premiumit. Specialiteti ynë? Pulë crispy e përgatitur me recetën tonë sekrete, e shërbyer në një ambient modern dhe miqësor.",
      grandOpening: "Grand Opening",
      features: [
        { title: "Pulë e Freskët", desc: "Vetëm pulë e freskët, përgatitur me shije autentike." },
        { title: "Receta Origjinale", desc: "Përzierja jonë sekrete e erëzave që ju bën të kërkoni më shumë." },
        { title: "Shërbim i Shpejtë", desc: "Porosit, paguaj dhe shijo brenda pak minutash." },
        { title: "Bërë me Dashuri", desc: "Çdo pjatë përgatitet me kujdes nga ekipi ynë." },
      ],
      interiorAlt: "Interieri i CrunchyTime",
    },
    gallery: {
      kicker: "Galeria",
      title1: "Një shije e",
      locationAlt: "Lokacioni",
    },
    contact: {
      kicker: "Na Gjeni",
      title1: "Eja dhe shijo",
      desc: "Në qendër të Pejës, lehtë për t'u gjetur.",
      addressLabel: "Adresa",
      addressCountry: "Kosovë",
      phoneLabel: "Telefon",
      phoneNote: "Porosit dhe paguaj në vend",
      hoursTitle: "Orari i Punës",
      closed: "Pushim",
      hoursNote: "⚠️ Çdo ditë e martë jemi të mbyllur — pushimi javor.",
      mapTitle: "CrunchyTime Lokacioni",
      schedule: [
        { day: "E Hënë", hours: "09:00 – 23:00" },
        { day: "E Martë", hours: "Pushim", closed: true },
        { day: "E Mërkurë", hours: "09:00 – 23:00" },
        { day: "E Enjte", hours: "09:00 – 23:00" },
        { day: "E Premte", hours: "09:00 – 23:00" },
        { day: "E Shtunë", hours: "09:00 – 23:00" },
        { day: "E Diel", hours: "09:00 – 23:00" },
      ],
    },
    footer: {
      tagline: "BEST QUALITY • PEJË",
      address: "Rruga Mbretëresha Teutë, Pejë",
      hoursTitle: "Orari",
      hoursWeek: "E Hënë – E Diel:",
      hoursTuesday: "E Martë:",
      closed: "Pushim",
      contactTitle: "Kontakt",
      menu: "Menyja",
      gallery: "Galeria",
      contact: "Kontakt",
      rights: "Të gjitha të drejtat të rezervuara.",
    },
  },
  en: {
    nav: {
      menu: "Menu",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      order: "Order Now",
    },
    hero: {
      openBadge: "OPEN — 09:00 to 23:00",
      titlePart1: "Crunchy",
      titlePart2: "yyy",
      titlePart3: "in the heart of",
      titlePart4: "Peja.",
      desc: "Crispy chicken, fresh sandwiches, grilled wraps and original sauces. True fast food flavor, made with love every day.",
      ctaMenu: "View Menu",
      ctaVisit: "Visit Us",
      stat1Label: "Fresh every day",
      stat2Label: "Friendly prices",
      bestQuality: "Best Quality!",
    },
    menu: {
      kicker: "Our Menu",
      title1: "Crispy. Fresh.",
      title2: "Unmatched.",
      desc: "Every dish is prepared with fresh ingredients and CrunchyTime's original recipes.",
      burgersTitle: "Burgers & Wraps",
      sidesTitle: "Sticks, Fries & Hot Dog",
      drinks: "Drinks",
      sauces: "Homemade Sauces",
      allSauces: "All 0.50€",
      saucesNote: "Our sauces are delicious — the secret to CrunchyTime's flavor.",
      offerLabel: "SPECIAL OFFER",
      offerTitle: "Combo Crunchy",
      offerDesc: "Chicken Cheese + Fries + Coca Cola",
      offerNote: "In-store only · not for delivery",
      offerBadge: "Worth it!",
      tagBest: "Best Seller",
      tagXXL: "XXL",
      tagPlate: "Plate",
      tagPopular: "Popular",
      halfLabel: "1/2 portion",
      naturalWater: "Still water",
      mineralWater: "Sparkling water",
      items: {
        chickenCrunchy: "Sesame bun, crispy chicken fillet, cheddar cheese, lettuce, tomato and house sauce.",
        chickenCheese: "The classic with double melted cheddar over our crispy chicken.",
        chickenBbq: "Crispy chicken with sweet-spicy BBQ sauce and fresh veggies.",
        bigChicken: "Full double: two chicken fillets, double cheese, lettuce and house sauces.",
        chickenSandwich: "Long bun, crispy chicken, cheese, lettuce and our original sauces.",
        chickenWrap: "Grilled wrap with chicken, cheddar, veggies and our sauces.",
        chickenFillet: "Crispy chicken fillet with fries, fresh salad and two sauces.",
        crunchySticks: "Chicken strips made with our secret blend, served with two sauces.",
        pomfrites: "Golden fries with house spices, served hot.",
        hotDog: "Fresh bun, crispy chicken, green salad and homemade mayo.",
      },
    },
    about: {
      kicker: "About Us",
      title1: "The crispiest",
      title2: "spot",
      title3: "in Peja.",
      desc: "CrunchyTime is a new fast food spot in the center of Peja, where passion for great taste meets premium quality. Our specialty? Crispy chicken made with our secret recipe, served in a modern and friendly setting.",
      grandOpening: "Grand Opening",
      features: [
        { title: "Fresh Chicken", desc: "Only fresh chicken, prepared with authentic flavor." },
        { title: "Original Recipes", desc: "Our secret spice blend that keeps you coming back." },
        { title: "Fast Service", desc: "Order, pay and enjoy within minutes." },
        { title: "Made with Love", desc: "Every dish is prepared with care by our team." },
      ],
      interiorAlt: "CrunchyTime interior",
    },
    gallery: {
      kicker: "Gallery",
      title1: "A taste of",
      locationAlt: "Location",
    },
    contact: {
      kicker: "Find Us",
      title1: "Come and enjoy",
      desc: "In the center of Peja, easy to find.",
      addressLabel: "Address",
      addressCountry: "Kosovo",
      phoneLabel: "Phone",
      phoneNote: "Order and pay on site",
      hoursTitle: "Opening Hours",
      closed: "Closed",
      hoursNote: "⚠️ Closed every Tuesday — weekly day off.",
      mapTitle: "CrunchyTime Location",
      schedule: [
        { day: "Monday", hours: "09:00 – 23:00" },
        { day: "Tuesday", hours: "Closed", closed: true },
        { day: "Wednesday", hours: "09:00 – 23:00" },
        { day: "Thursday", hours: "09:00 – 23:00" },
        { day: "Friday", hours: "09:00 – 23:00" },
        { day: "Saturday", hours: "09:00 – 23:00" },
        { day: "Sunday", hours: "09:00 – 23:00" },
      ],
    },
    footer: {
      tagline: "BEST QUALITY • PEJA",
      address: "Mbretëresha Teutë Street, Peja",
      hoursTitle: "Hours",
      hoursWeek: "Mon – Sun:",
      hoursTuesday: "Tuesday:",
      closed: "Closed",
      contactTitle: "Contact",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
};