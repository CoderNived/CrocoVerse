# 🐊 CrocoVerse — Phase 1, Step 4: Species Detail Page + Expanded ML & Dashboard Plan

---

## Part A: Species Detail Page

This is the heart of CrocoVerse. If the Homepage is the front door, the Species Detail Page is the library inside. It needs to feel authoritative, structured, and scannable — like Wikipedia, but with the visual polish of a modern product.

---

### 🧠 Study Before You Build

Before writing code, open these two pages and study their layout for 5 minutes:

- **Wikipedia** — notice the infobox on the right, the section headers, the table of contents
- **iNaturalist.org** — notice how they blend scientific data with clean modern UI

You're building something in between. Scientific credibility + modern design.

---

### 📐 Page Layout Architecture

The Species Detail page has a two-column layout on desktop, single column on mobile:

```
┌────────────────────────────────────────────────┐
│  ← Back to Species          Breadcrumb nav      │
├─────────────────────────┬──────────────────────┤
│                         │                      │
│   LEFT COLUMN (65%)     │  RIGHT COLUMN (35%)  │
│                         │                      │
│  • Page Title           │  • Species Infobox   │
│  • Table of Contents    │    (image + key       │
│  • Overview Section     │     stats)           │
│  • Habitat Section      │                      │
│  • Behavior Section     │  • Quick Facts Card  │
│  • Diet Section         │                      │
│  • Conservation Section │  • Distribution Map  │
│  • Gallery              │    (placeholder)     │
│                         │                      │
└─────────────────────────┴──────────────────────┘
```

---

### 📁 Folder Structure

```
src/pages/SpeciesDetail/
├── index.jsx                    ← route entry, fetches/selects data
└── components/
    ├── SpeciesHero.jsx          ← name, image, breadcrumb
    ├── TableOfContents.jsx      ← sticky nav for sections
    ├── InfoBox.jsx              ← Wikipedia-style right panel
    ├── SectionBlock.jsx         ← reusable content section
    ├── QuickFactsCard.jsx       ← key numbers at a glance
    ├── ConservationBadge.jsx    ← IUCN status indicator
    └── SpeciesGallery.jsx       ← image grid at the bottom
```

---

### 🗂️ Section-by-Section Blueprint

#### 1. `SpeciesHero.jsx`

**Goal:** Orient the user immediately.

Contains:
- Breadcrumb: `Home > Species > Saltwater Crocodile` — uses `<Link>` components, not plain text
- Large species common name as `<h1>`
- Scientific name in italics below (smaller, muted color)
- A full-width banner image of the species

---

#### 2. `InfoBox.jsx`

**Goal:** The Wikipedia infobox — dense, structured, scannable.

A card in the right column containing:
- Species thumbnail image
- A structured table of key attributes:
  - Kingdom / Class / Order / Family
  - Average Length / Average Weight / Lifespan
  - Conservation Status (with colored badge)
  - Native Regions

> **Design hint:** Think of it as a `<dl>` (definition list) styled as a card. Two columns inside: label (muted) on left, value (bold) on right.

---

#### 3. `TableOfContents.jsx`

**Goal:** Let users jump to sections — critical for long pages.

- A vertical list of anchor links: Overview, Habitat, Behavior, Diet, Conservation, Gallery
- Sticky positioning — follows the user as they scroll
- Active section should be highlighted

> 🔑 **Hint:** Use `id` attributes on each section div and `href="#section-id"` anchor links. Stub it as always-highlighting "Overview" for now — you'll add a scroll listener later.

---

#### 4. `SectionBlock.jsx`

**Goal:** A reusable component for every content section.

This is a key abstraction. Instead of building separate `HabitatSection`, `DietSection` etc., build one smart component that accepts:

| Prop | Purpose |
|---|---|
| `id` | For anchor linking |
| `title` | Section heading |
| `content` | Paragraph text |
| `children` | Optional — for sections needing richer content |

Every section on the page is just a `<SectionBlock>` with different props.

> 🔑 This is the **Single Responsibility + DRY principle** in action. Senior engineers build reusable primitives, not copy-pasted sections.

---

#### 5. `QuickFactsCard.jsx`

**Goal:** 3–4 visually prominent stats specific to this species.

Example for Saltwater Crocodile:
- 🦷 66 Teeth
- 📏 6.17m Max Length
- ⚖️ 1,000kg Max Weight
- 🌊 Can swim 29 km/h

Design as icon + number + label cards in a small grid. Goes in the right column below the InfoBox.

> 🔑 Accept a `facts` array as prop — each fact has `icon`, `value`, `label`.

---

#### 6. `ConservationBadge.jsx`

**Goal:** Visually communicate IUCN conservation status.

| Status | Color |
|---|---|
| Least Concern | Green |
| Near Threatened | Yellow-green |
| Vulnerable | Yellow |
| Endangered | Orange |
| Critically Endangered | Red |
| Extinct in Wild | Dark Red |
| Extinct | Black |

> 🔑 Accept `status` as a prop and use a `STATUS_COLORS` lookup object to map status → color class. **No `if/else` chains.**

---

#### 7. `SpeciesGallery.jsx`

**Goal:** A grid of species images at the bottom of the page.

- 3–6 placeholder images in a responsive grid
- Slight hover zoom effect (`hover:scale-105 transition-transform`)
- Clicking an image: stub with `console.log` for now — you'll add a lightbox later

---

### 🔌 Data Flow — How the Page Gets Its Data

For now, using static mock data — but wire it up the right way so Phase 2 (API) is a clean swap.

Expand `src/constants/species.js` with richer species objects:

```js
{
  id: "saltwater-crocodile",
  commonName: "Saltwater Crocodile",
  scientificName: "Crocodylus porosus",
  conservation: "Least Concern",
  overview: "...",
  habitat: "...",
  behavior: "...",
  diet: "...",
  conservationDetails: "...",
  length: "6.17m avg",
  weight: "1,000kg max",
  lifespan: "70 years",
  regions: ["Southeast Asia", "Northern Australia"],
  images: ["url1", "url2", "url3"],
  quickFacts: [
    { icon: "🦷", value: "66", label: "Teeth" },
    { icon: "📏", value: "6.17m", label: "Max Length" },
    { icon: "⚖️", value: "1,000kg", label: "Max Weight" },
    { icon: "🌊", value: "29 km/h", label: "Swim Speed" },
  ]
}
```

In `SpeciesDetail/index.jsx`, use React Router's `useParams()` to grab `:id`, then find the matching species from your constants array.

> 🔑 This exact pattern is what you'll **replace with one API call** in Phase 2. The component tree stays the same — only the data source changes.

---

### ✅ Task Checklist

#### 4.1 — Expand `src/constants/species.js`

Add 2–3 fully fleshed-out species objects using the schema above.

---

#### 4.2 — Build `SpeciesHero.jsx`

> 🔑 Breadcrumb + `<h1>` common name + italic scientific name + banner image.

---

#### 4.3 — Build `InfoBox.jsx`

> 🔑 Definition-list style layout. Import and use `ConservationBadge` inside it.

---

#### 4.4 — Build `ConservationBadge.jsx`

> 🔑 Use a `STATUS_COLORS` constant object — not a chain of `if/else`. Accept `status` as prop.

---

#### 4.5 — Build `SectionBlock.jsx`

> 🔑 Props: `id`, `title`, `content`, `children`. Fully reusable — no species-specific logic inside.

---

#### 4.6 — Build `TableOfContents.jsx`

> 🔑 Use `position: sticky, top: 80px` (account for navbar height). Anchor links with `href="#overview"` etc.

---

#### 4.7 — Build `QuickFactsCard.jsx`

> 🔑 Accept a `facts` array as prop — each fact has `icon`, `value`, `label`.

---

#### 4.8 — Build `SpeciesGallery.jsx`

> 🔑 Responsive grid, hover zoom. Placeholder image URLs for now.

---

#### 4.9 — Assemble `SpeciesDetail/index.jsx`

- Use `useParams()` to get the species `id`
- Find the matching species from your constants
- Handle the not-found case — show a clean "Species not found" message with a link home (no blank page, no crash)
- Render the two-column layout with all components

---

#### 4.10 — Test end-to-end

Click "Learn More" on a Homepage species card → should land on the correct detail page with the right data.

---

### ⚠️ Quality Rules for This Step

| Rule | Reason |
|---|---|
| `SectionBlock` must be truly reusable — no hardcoded species logic | DRY principle |
| Handle the "species not found" case explicitly | Production apps never crash silently |
| `useParams()` + constants lookup mirrors the future API pattern | Smooth Phase 2 transition |
| `ConservationBadge` uses a lookup object, not `if/else` | Cleaner, extensible, easier to update |
| Two-column layout collapses to single on mobile | Real products are responsive |

---

### 💡 Senior Engineer Thinking Prompts

**On `SectionBlock`:**
> *"If the Behavior section needed to render a data table instead of a paragraph, how would your component handle that?"*
> This is why it accepts `children` — text content is the default, but the door is open for richer content.

**On the not-found case:**
> *"What's the user experience if someone shares a link to a species that doesn't exist yet?"*
> A blank white screen destroys trust. A clean "not found" state with a link back home keeps the user engaged.

**On data structure:**
> *"When the backend API replaces your constants file in Phase 2, what's the minimum change needed in this page?"*
> If you've built it right — just one line changes: the data source. The entire component tree stays the same.

