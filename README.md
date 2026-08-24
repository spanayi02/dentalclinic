# Dr. Vasilis I. Koutsoftas — Dental Practice Website

Marketing website για το ιδιωτικό οδοντιατρείο του Dr. Vasilis I. Koutsoftas στη Λατσιά, Λευκωσία.

## Τεχνικό stack

**Vite + React + TypeScript + Tailwind CSS + Framer Motion.**

Η πρώτη εκδοχή αυτού του site ήταν σκόπιμα plain HTML/CSS/JS, επειδή στο μηχάνημα
ανάπτυξης δεν υπήρχε αρχικά Node.js. Μετά από feedback ότι το αποτέλεσμα έμοιαζε
γενικό/templated και χωρίς αληθινό motion, εγκαταστάθηκε Node.js και το site
ξαναχτίστηκε από την αρχή με React + Tailwind + Framer Motion, ώστε να είναι
εφικτό το επίπεδο polish/animation που ζητήθηκε (στο πνεύμα βιβλιοθηκών
components όπως το 21st.dev) χωρίς να γράφουμε τα πάντα σε raw CSS keyframes.

- **Vite**: γρήγορο dev server + build, μηδενική περιττή configuration.
- **React**: components ανά ενότητα (Hero, About, Services, WhyUs, Contact, Footer).
- **Tailwind CSS**: utility-first styling πάνω σε ένα custom design system (χρώματα/τυπογραφία στο `tailwind.config.js`), ώστε να μην ξεφεύγουμε από τους δικούς μας tokens.
- **Framer Motion**: πραγματικά spring-based animations (scroll-reveal με stagger, mobile menu, hover/press feedback) αντί για CSS που εύκολα «κολλάει» σε στατικές τιμές.

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
index.html                 Vite entry point (minimal — React κάνει mount εδώ)
src/main.tsx                React bootstrap
src/App.tsx                 Συναρμολογεί τις ενότητες της σελίδας
src/index.css                Tailwind directives + λίγα global styles (grain texture, selection κ.λπ.)
src/components/              Ένα component ανά ενότητα + reusable κομμάτια (IndexCard, Stamp, Grommet)
tailwind.config.js            Χρωματική παλέτα, τυπογραφία, shadows
```

## Design direction — "Ο Φάκελος Ασθενούς"

Αντί για ένα τυπικό stacked-sections marketing template, το site υιοθετεί τη
μεταφορά ενός **φυσικού φακέλου/ευρετηρίου ασθενούς**: το hero είναι μια
"κάρτα ασθενούς" με ανάγλυφο brass κρίκο και σφραγίδα ("Ασθενής από το 2005"),
οι Υπηρεσίες παρουσιάζονται ως οριζόντιο, scrollable "συρτάρι" καρτών
ευρετηρίου (με χρωματιστές ετικέτες Α–Ε, όπως τα πραγματικά ευρετήρια
βιβλιοθηκών), και οι ενότητες About/Contact είναι κάρτες με χαρτί-υφή
(paper grain) και soft shadows αντί για επίπεδα vector ορθογώνια.

Ζεστή Μεσογειακή παλέτα: άμμος/πλάστης φόντο, βαθύ πράσινο verdigris
(`#33544a`) + τερακότα accent (`#9c5527`). Τυπογραφία: **GFS Didot**
(κλασική ελληνική serif, Greek Font Society) για τίτλους, **Work Sans** για
κείμενο. Κανένα emoji/έτοιμο icon-library — όλα τα εικονίδια είναι
χειροσχεδιασμένα SVG.

## ⚠️ Placeholder στοιχεία — χρειάζονται επιβεβαίωση πριν πάει live

| Στοιχείο | Τι υπάρχει τώρα | Ενέργεια |
|---|---|---|
| **Ωράριο λειτουργίας** | Ενδεικτικό ωράριο (Δευτ–Παρ 09:00–13:00 & 15:00–19:00, Σάββατο κατόπιν ραντεβού) στην ενότητα Επικοινωνίας, με ετικέτα «προς επιβεβαίωση» | Να επιβεβαιωθεί το πραγματικό ωράριο από τον πελάτη και να αφαιρεθεί η ετικέτα |
| **Φωτογραφίες** | Δεν χρησιμοποιήθηκε καμία φωτογραφία γιατρού/ιατρείου — μόνο χειροσχεδιασμένα SVG (κάρτα ασθενούς, σφραγίδες, brass κρίκοι) | Αν ο πελάτης έχει πραγματικές φωτογραφίες ιατρείου/προσωπικού, μπορούν να προστεθούν |
| **Τιμές** | Δεν αναφέρονται πουθενά τιμές υπηρεσιών | Χρειάζεται ξεχωριστή επιβεβαίωση από τον πελάτη — δεν επινοήθηκε καμία τιμή |
| **Χάρτης** | Ενσωματωμένο Google Maps iframe βασισμένο στη διεύθυνση κειμένου (χωρίς API key) | Συνιστάται έλεγχος ότι ο pin δείχνει ακριβώς το σωστό κτίριο |
| **Domain / hosting** | Το site δεν έχει ακόμα deploy target | Να οριστεί πού θα φιλοξενηθεί (π.χ. Vercel, Netlify, GitHub Pages) |
| **Πολυγλωσσία (EL/EN/RU)** | Το περιεχόμενο είναι μόνο στα Ελληνικά (κύρια γλώσσα της τοπικής αγοράς) | Follow-up εργασία, όχι placeholder |

## Επόμενα βήματα (προαιρετικά)

- Πραγματικές φωτογραφίες ιατρείου/προσωπικού
- Φόρμα ραντεβού online (αντί μόνο τηλεφωνικής κλήσης)
- Αγγλική & Ρωσική εκδοχή της σελίδας
- Google Business Profile integration / reviews
- CI deploy pipeline (π.χ. Vercel/Netlify auto-deploy από το `main`)
