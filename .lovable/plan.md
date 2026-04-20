
Që ta kesh të qartë: problemi nuk është te lokacioni yt, por te mënyra si po hapet harta në desktop.

Çfarë po ndodh tani:
- Në `src/components/Contact.tsx` harta po shfaqet me një `iframe` nga Google Maps:
  `https://www.google.com/maps?q=42.6590739,20.2862844&z=18&output=embed`
- Preview i Lovable vetë hapet brenda një frame.
- Kur Google Maps futet edhe ai si `iframe` brenda atij preview, në disa laptop/desktop browser-a del:
  `maps.google.com refused to connect` ose `ERR_BLOCKED_BY_RESPONSE`
- Kjo ndodh shpesh nga kufizimet e Google, browser-it, ose extension-eve/ad blockers. Pra nuk do të thotë që lokacioni nuk funksionon fare.

Për pyetjen tënde kryesore:
- Po, në shumicën e telefonave do të funksionojë mirë hapja e lokacionit, sidomos kur përdoruesi klikon te adresa/linku i Google Maps.
- Kur faqja bëhet publike, klientët në telefon zakonisht do të ridrejtohen normalisht te Google Maps app ose browser.
- Ajo që nuk është 100% e garantuar në çdo laptop/browser është vetë `iframe` i Google Maps brenda faqes.

Pra për përdorim real:
- Telefonat: po, zakonisht funksionon mirë.
- Desktop/laptop: linku për lokacion zakonisht funksionon, por embed-i i hartës mund të bllokohet në disa raste.

Zgjidhja profesionale që do të rekomandoja:
1. Ta lëmë adresën si link kryesor për hapje në Google Maps.
2. Ta heqim `iframe`-in e Google Maps ose ta zëvendësojmë me një hartë statike / preview card më estetik.
3. Të shtojmë një CTA më të qartë si:
   - “Hape lokacionin”
   - “Navigo në Google Maps”
4. Në telefon, ky link do ta çojë përdoruesin direkt te Maps app në shumicën e rasteve.
5. Në desktop, hapet në tab të ri pa u varur nga embed block.

Detaje teknike:
- Problemi lidhet me embedding/nested iframe, jo me koordinatat.
- Kodit aktual i janë caktuar:
  - `coords = "42.6590739,20.2862844"`
  - `directions = https://www.google.com/maps/dir/?api=1&destination=...`
- Linku `directions` është pjesa më e besueshme për klientët.
- Nëse do stabilitet maksimal në të gjitha pajisjet, mos u mbështet te Google Maps embed si funksioni kryesor.

Nëse e aprovon, hapi tjetër do të jetë:
- ta bëj seksionin e kontaktit më clean dhe më profesional,
- ta heq hartën e embed-it që bllokohet në laptop,
- dhe ta lë vetëm lokacionin me opening link elegant që punon më sigurt për klientët në telefon dhe desktop.
