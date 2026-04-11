# 🐊 CrocoVerse — Phase 1, Step 2: Layout System

Before we build pages, we need the skeleton of the app. Every page in CrocoVerse will share the same Navbar and Footer. This is your **layout system** — and getting it right now saves you from messy refactoring later.

---

## 🧠 The Mental Model First

Think of your app's visual structure like this:

```
┌─────────────────────────────┐
│           NAVBAR            │  ← Always visible
├─────────────────────────────┤
│                             │
│        PAGE CONTENT         │  ← Changes per route
│     (Homepage / Species     │
│      Detail / ML Tools)     │
│                             │
├─────────────────────────────┤
│           FOOTER            │  ← Always visible
└─────────────────────────────┘
```

The `PageWrapper` is the component that glues these together. Every route renders inside the `PageWrapper` — so you never repeat Navbar/Footer code.

---

## 📐 Component Breakdown

You'll build **3 components** this step:

### 1. `Navbar.jsx` — inside `components/layout/`

Responsible for:
- Brand logo/name on the left (`CrocoVerse`)
- Navigation links on the right (Home, Species, ML Tools)
- Responsive behavior (hamburger on mobile — stub it for now)

> **Design goal:** Think dark, professional — like a SaaS product header. Not colorful, not cartoonish.

---

### 2. `Footer.jsx` — inside `components/layout/`

Responsible for:
- Brand tagline
- Quick links
- Copyright line

Keep it minimal. A 3-column footer is more than enough.

---

### 3. `PageWrapper.jsx` — inside `components/layout/`

This is the **most important component** this step. It does one job:

```jsx
<Navbar />
  {children}   {/* whatever page is active gets slotted here */}
<Footer />
```

It also handles:
- Minimum screen height (so footer doesn't float mid-page on short content)
- A consistent max-width container for all page content

---

## 🔀 Routing Setup in `App.jsx`

Once your layout is ready, your `App.jsx` should wire up React Router. The mental model:

```
App
 └── PageWrapper
      ├── Route: "/"            → <HomePage />
      ├── Route: "/species/:id" → <SpeciesDetailPage />
      └── Route: "/ml-tools"   → <MLToolsPage />
```

Create empty placeholder page components for now — just a `<div>` with the page name. You'll fill them in Steps 3, 4, 5.

---

## ✅ Task Checklist

### 2.1 — Create `Navbar.jsx` in `src/components/layout/`

> 🔑 **Hint:** Use `<nav>` semantically. Use React Router's `<Link>` (not `<a>`) for navigation links — this prevents full page reloads.

---

### 2.2 — Create `Footer.jsx` in `src/components/layout/`

> 🔑 Keep it simple. 3 columns, tagline, copyright. Tailwind `grid-cols-3` is your friend.

---

### 2.3 — Create `PageWrapper.jsx` in `src/components/layout/`

> 🔑 **Hint:** It should accept a `children` prop. Use Tailwind's `min-h-screen` and `flex flex-col` to keep the footer pinned to the bottom even on short pages. Make the content area `flex-grow`.

---

### 2.4 — Create 3 placeholder page files in `src/pages/`

- `Home/index.jsx` → just renders `<div>Home Page</div>`
- `SpeciesDetail/index.jsx` → just renders `<div>Species Detail Page</div>`
- `MLTools/index.jsx` → just renders `<div>ML Tools Page</div>`

---

### 2.5 — Set up routing in `App.jsx`

> 🔑 **Hint:** Wrap everything in `<BrowserRouter>`. Use `<Routes>` and `<Route>` from `react-router-dom`. Wrap the `<Routes>` block inside your `<PageWrapper>`.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';
import HomePage from './pages/Home';
import SpeciesDetailPage from './pages/SpeciesDetail';
import MLToolsPage from './pages/MLTools';

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/species/:id" element={<SpeciesDetailPage />} />
          <Route path="/ml-tools" element={<MLToolsPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
```

---

### 2.6 — Test all 3 routes in the browser

Visit `localhost:5173/`, `/species/test`, and `/ml-tools` — each should show the right placeholder text, with Navbar and Footer visible on all three.

---

## ⚠️ Common Mistakes to Avoid

| Mistake | Why it's bad | Fix |
|---|---|---|
| Using `<a href>` instead of `<Link>` | Causes full page reload, breaks SPA behavior | Always use `<Link>` from `react-router-dom` |
| Putting Navbar inside each page | Repetition, hard to maintain | Put it only in `PageWrapper` |
| Forgetting `flex-grow` on main content | Footer floats up on short pages | `<main className="flex-grow">` |
| Hardcoding nav links as text | Hard to update later | Consider a `navLinks` array you map over |

---

## 💡 Bonus Thinking Prompt

Before you code the Navbar, ask yourself:

> *"If CrocoVerse later adds a user login system, where would the login button live?"*

Design the Navbar with that slot in mind — even if it's empty today. This is how senior engineers think: **design for what's coming, not just what's here.**

---

*Phase 1, Step 2 complete. Next up: building out the real Home page.*