# Dr. Vasilis I. Koutsoftas — Dental Practice Website

Marketing website για το ιδιωτικό οδοντιατρείο του Dr. Vasilis I. Koutsoftas στη Λατσιά, Λευκωσία.

## Τεχνικό stack

**Vite + React + TypeScript + Tailwind CSS.** Framer Motion παραμένει μόνο για
το mobile menu (interaction-triggered animation, όχι κρίσιμο για την ορατότητα
περιεχομένου).

Ιστορικό αποφάσεων:
1. Η πρώτη εκδοχή ήταν plain HTML/CSS/JS επειδή δεν υπήρχε Node.js στο μηχάνημα ανάπτυξης.
2. Μετά από feedback ότι έμοιαζε γενικό, εγκαταστάθηκε Node.js και έγινε rebuild σε React + Tailwind + Framer Motion.
3. Η αρχική React εκδοχή είχε ένα mount-triggered Framer Motion animation (`initial`/`animate`) που δεν πυροδοτούνταν ποτέ σε παραγωγικό browser — αφήνοντας το hero αόρατο. Αντί να «κυνηγηθεί» ένα timing bug σε JS/`requestAnimationFrame`, όλα τα entrance animations μετατράπηκαν σε καθαρό CSS `@keyframes` (`.reveal` class στο `src/index.css`) — τρέχουν από τον ίδιο τον browser, χωρίς εξάρτηση από React/JS timing, άρα δεν μπορούν να «κολλήσουν» ξανά.
4. Το πρώτο React design (μεταφορά "φακέλου ασθενούς" με stamp/brass κρίκο) κρίθηκε πολύ αφηρημένο — δεν διάβαζε ως οδοντιατρείο. Αντικαταστάθηκε με καθαρή, άμεση οδοντιατρική ταυτότητα (line-art tooth mark σε header/hero/footer/υπηρεσίες).

## Τοπική εκτέλεση

Χρειάζεται Node.js 18+ εγκατεστημένο.

```bash
npm install
npm run dev
```

Μετά επισκεφθείτε το URL που θα εμφανίσει το Vite (συνήθως `http://localhost:5173`).

Για production build:

```bash
npm run build
npm run preview
```

## Δομή αρχείων

```
index.html                 Vite entry point + SEO meta tags + JSON-LD structured data
src/main.tsx                React bootstrap
src/App.tsx                 Συναρμολογεί τις ενότητες της σελίδας (η σειρά εδώ)
src/index.css                Tailwind directives + reveal-animation keyframes + global styles
src/components/              Ένα component ανά ενότητα
tailwind.config.js            Χρωματική παλέτα, τυπογραφία, shadows
public/robots.txt, sitemap.xml  Βασικό SEO scaffolding
```

Σειρά ενοτήτων στην αρχική: Hero → TrustBar → About (+ συνεργάτης) → Services →
WhyUs → Testimonials → Journey (τι να περιμένετε) → FAQ → Final CTA → Contact → Footer.

## Design direction

Ζεστή Μεσογειακή παλέτα (όχι το στερεότυπο κρύο λευκό-μπλε, ούτε το εξίσου
στερεότυπο "AI cream" — άμμος με ψυχρότερο, γκριζωπό undertone ώστε να μη
διαβάζεται σαν το τυπικό safe φόντο): βαθύ πράσινο verdigris (`#33544a`) +
τερακότα accent (`#9c5527`). Τυπογραφία: **GFS Didot** (κλασική ελληνική
serif, Greek Font Society) για τίτλους, **Work Sans** για κείμενο. Ένα
χειροσχεδιασμένο line-art σχέδιο δοντιού (`ToothMark.tsx`) λειτουργεί ως
ενιαίο, αναγνωρίσιμο brand mark σε όλη τη σελίδα — όχι έτοιμο icon-library,
όχι παιδιάστικο clipart.

## Πραγματικά στοιχεία που προστέθηκαν (επαληθευμένα, όχι εφευρημένα)

- **Dr. Katerina Koutsofta** αναφέρεται ως συνεργάτης στο ιατρείο (ενότητα
  About) — επιβεβαιώθηκε από ανεξάρτητη πηγή
  ([knowyourdoctor.com.cy](https://www.knowyourdoctor.com.cy/dentists-dental-clinics/dr-katerina-koutsofta/)):
  Χειρουργός Οδοντίατρος, Γενική & Παιδοδοντιατρική, ίδια διεύθυνση.
  Δεν προστέθηκε φωτογραφία/βιογραφικό — μόνο τα επαληθευμένα στοιχεία.
- **Testimonials**: 4 πραγματικές κριτικές Google (επιλεγμένες, θετικές,
  σύντομες) + το πραγματικό aggregate rating (4.5/5, 34 κριτικές). Η
  βαθμολογία εμφανίζεται ως έχει — δεν κρύφτηκαν οι λίγες αρνητικές κριτικές
  από τον υπολογισμό. **Χρειάζεται έλεγχος ότι το rating είναι ακόμα ακριβές
  πριν πάει live**, μιας και τα reviews αλλάζουν με τον καιρό.

## ⚠️ Placeholder στοιχεία — χρειάζονται επιβεβαίωση πριν πάει live

| Στοιχείο | Τι υπάρχει τώρα | Ενέργεια |
|---|---|---|
| **Ωράριο λειτουργίας** | Ενδεικτικό ωράριο (Δευτ–Παρ 09:00–13:00 & 15:00–19:00, Σάββατο κατόπιν ραντεβού) στην ενότητα Επικοινωνίας, με ετικέτα «προς επιβεβαίωση» | Να επιβεβαιωθεί το πραγματικό ωράριο από τον πελάτη και να αφαιρεθεί η ετικέτα |
| **Φωτογραφίες** | Δεν χρησιμοποιήθηκε καμία φωτογραφία γιατρού/ιατρείου — μόνο το χειροσχεδιασμένο SVG tooth mark | Αν ο πελάτης έχει πραγματικές φωτογραφίες ιατρείου/προσωπικού, μπορούν να προστεθούν |
| **Τιμές** | Δεν αναφέρονται πουθενά τιμές υπηρεσιών | Χρειάζεται ξεχωριστή επιβεβαίωση από τον πελάτη — δεν επινοήθηκε καμία τιμή |
| **Testimonials / rating** | 4 πραγματικά reviews Google + 4.5/5 (34 κριτικές), όπως βρέθηκαν τη στιγμή της ανάπτυξης | Να επαληθευτεί ότι είναι ακόμα ακριβή πριν πάει live· ιδανικά αντικατάσταση με ζωντανό Google Reviews widget |
| **Dr. Katerina Koutsofta** | Αναφέρεται ως συνεργάτης με βάση εξωτερική πηγή, όχι απευθείας επιβεβαίωση πελάτη | Να επιβεβαιωθεί ο ακριβής ρόλος/τίτλος πριν πάει live |
| **Χάρτης** | Ενσωματωμένο Google Maps iframe βασισμένο στη διεύθυνση κειμένου (χωρίς API key) | Συνιστάται έλεγχος ότι ο pin δείχνει ακριβώς το σωστό κτίριο |
| **Domain / hosting** | `index.html` έχει placeholder canonical/OG URLs (`koutsoftasdental.example`) | Να αντικατασταθούν με το πραγματικό domain μόλις οριστεί hosting (Vercel/Netlify/GitHub Pages) |
| **Πολυγλωσσία (EL/EN/RU)** | Το περιεχόμενο είναι μόνο στα Ελληνικά (κύρια γλώσσα της τοπικής αγοράς) | Follow-up εργασία, όχι placeholder |

## Τι δεν χτίστηκε (σκόπιμα, εκτός scope)

Ζητήθηκε σε κάποιο σημείο ένα πλήρες πολυσέλιδο Next.js site (treatments
per-slug pages, team pages, blog, CMS-ready αρχιτεκτονική, GDPR pages,
analytics integration). Δεν έγινε migration σε Next.js μέσα σε αυτή τη
συνεδρία — θα σήμαινε rewrite ολόκληρου του stack πάνω σε ένα site που μόλις
είχε διορθωθεί, με νέο ρίσκο (routing/SSR bugs) πριν καν επιβεβαιωθεί ότι το
τρέχον αποτέλεσμα δουλεύει. Αντ' αυτού προστέθηκαν τα ουσιώδη κομμάτια του
brief (trust bar, testimonials, patient journey, FAQ με structured data,
τελικό CTA, βασικό SEO) πάνω στο υπάρχον μονοσέλιδο site. Αν χρειαστεί
πραγματικά πολυσέλιδη αρχιτεκτονική (π.χ. για SEO ανά υπηρεσία), είναι
ξεχωριστό, μεγαλύτερο follow-up project.

## Επόμενα βήματα (προαιρετικά)

- Πραγματικές φωτογραφίες ιατρείου/προσωπικού
- Φόρμα ραντεβού online (αντί μόνο τηλεφωνικής κλήσης)
- Αγγλική & Ρωσική εκδοχή της σελίδας
- Ζωντανό Google Reviews widget αντί για στατικά quotes
- CI deploy pipeline (π.χ. Vercel/Netlify auto-deploy από το `main`)
