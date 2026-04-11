# 🐊 CrocoVerse — Expanded ML Layer + Dashboard Plan

This transforms CrocoVerse from a knowledge platform into a full data science product. The remaining phases are restructured around the actual ML models.

---

## 🧠 What You're Now Building

| Module | Type | Input | Output |
|---|---|---|---|
| Weight Predictor | Regression | Length, species, age, sex | Predicted weight (kg) |
| Age Classifier | Classification | Physical traits | Age group |
| Conservation Status Predictor | Classification | Population, habitat, threats | IUCN Status |
| Habitat Suitability | Geo/Score Model | Climate, region, water proximity | Suitability score |
| Observation Trend Analysis | Time Series | Date, location, count | Trend graph |
| Population Risk Score | Scoring Model | Multiple factors | Risk score 0–100 |
| Species Identifier | Image/Feature Classification | Physical features | Species name |
| 📊 Analytics Dashboard | Visualization | Full dataset | Charts, stats, insights |

---

## 🗺️ Revised Project Phases

```
Phase 1: Frontend (current)
  ✅ Step 1:  Project Setup
  ✅ Step 2:  Layout System
  ✅ Step 3:  Homepage
  ✅ Step 4:  Species Detail Page
  🔜 Step 5:  ML Tools UI (ALL 7 tools — forms + result displays)
  🔜 Step 6:  Analytics Dashboard UI (charts + stats — no backend yet)

Phase 2: Backend (Node.js)
  Step 7:  Express server + folder structure
  Step 8:  Species CRUD APIs
  Step 9:  MongoDB schema + connection
  Step 10: ML API bridge routes (Node → Python)
  Step 11: Dashboard data aggregation APIs

Phase 3: Machine Learning (Python)
  Step 12: Dataset audit + cleaning strategy
  Step 13: Weight Predictor (regression)
  Step 14: Age Classifier (classification)
  Step 15: Conservation Status Predictor
  Step 16: Habitat Suitability Model
  Step 17: Observation Trend Analysis
  Step 18: Population Risk Score
  Step 19: Species Identifier
  Step 20: Wrap all models in FastAPI

Phase 4: Integration
  Step 21: Connect Frontend ↔ Backend
  Step 22: Connect Backend ↔ ML (FastAPI)
  Step 23: Dashboard live data wiring
  Step 24: End-to-end testing + polish
```

---

## 🔜 Immediate Next Steps (Still Phase 1)

You have 2 remaining frontend steps before backend work begins:

### Step 5 — ML Tools UI (Expanded)

Build 7 tool interfaces — each has:
- An input form
- A results display area
- A loading state
- An error state

Grouped into a tabbed or sidebar-navigated `/ml-tools` page.

---

### Step 6 — Analytics Dashboard UI

A dedicated `/dashboard` route with:

- **KPI cards** — total species, avg weight, endangered count, observation count
- **Charts** (using Recharts or Chart.js):
  - Species distribution by continent (bar chart)
  - Conservation status breakdown (pie/donut chart)
  - Weight vs Length scatter plot
  - Observation trends over time (line chart)
  - Population risk score distribution (histogram)
  - Habitat suitability heatmap (placeholder)
- **Data table** — sortable, filterable species dataset view
- **Stat comparison panel** — compare two species side by side

---

## 📁 Updated Folder Structure

```
src/
├── pages/
│   ├── Home/
│   ├── SpeciesDetail/
│   ├── MLTools/
│   │   ├── index.jsx                    ← tabbed container
│   │   └── tools/
│   │       ├── WeightPredictor.jsx
│   │       ├── AgeClassifier.jsx
│   │       ├── ConservationPredictor.jsx
│   │       ├── HabitatSuitability.jsx
│   │       ├── ObservationTrend.jsx
│   │       ├── PopulationRiskScore.jsx
│   │       └── SpeciesIdentifier.jsx
│   └── Dashboard/
│       ├── index.jsx
│       └── components/
│           ├── KPICard.jsx
│           ├── SpeciesDistributionChart.jsx
│           ├── ConservationPieChart.jsx
│           ├── WeightLengthScatter.jsx
│           ├── ObservationTrendLine.jsx
│           ├── RiskScoreHistogram.jsx
│           ├── HabitatHeatmap.jsx
│           └── SpeciesDataTable.jsx
├── constants/
│   ├── species.js                       ← already exists
│   ├── mlToolsConfig.js                 ← NEW: all 7 tools metadata
│   └── mockDashboardData.js             ← NEW: rich mock dataset
```

---

## 🧩 Updated Navbar Links

```
CrocoVerse    |    Home    Species    ML Tools    Dashboard
```

Add routes in `App.jsx`:
- `/ml-tools` → MLTools page
- `/dashboard` → Dashboard page

---

## ✅ Task Checklist

### P1 — Add `/dashboard` route to `App.jsx`

```jsx
import DashboardPage from './pages/Dashboard';

// Inside <Routes>:
<Route path="/dashboard" element={<DashboardPage />} />
```

---

### P2 — Add Dashboard link to Navbar

Add `<Link to="/dashboard">Dashboard</Link>` alongside your existing nav links.

---

### P3 — Create the expanded folder structure

```bash
mkdir -p src/pages/MLTools/tools
mkdir -p src/pages/Dashboard/components
touch src/pages/MLTools/tools/WeightPredictor.jsx
touch src/pages/MLTools/tools/AgeClassifier.jsx
touch src/pages/MLTools/tools/ConservationPredictor.jsx
touch src/pages/MLTools/tools/HabitatSuitability.jsx
touch src/pages/MLTools/tools/ObservationTrend.jsx
touch src/pages/MLTools/tools/PopulationRiskScore.jsx
touch src/pages/MLTools/tools/SpeciesIdentifier.jsx
touch src/pages/Dashboard/index.jsx
touch src/pages/Dashboard/components/KPICard.jsx
touch src/pages/Dashboard/components/SpeciesDistributionChart.jsx
touch src/pages/Dashboard/components/ConservationPieChart.jsx
touch src/pages/Dashboard/components/WeightLengthScatter.jsx
touch src/pages/Dashboard/components/ObservationTrendLine.jsx
touch src/pages/Dashboard/components/RiskScoreHistogram.jsx
touch src/pages/Dashboard/components/HabitatHeatmap.jsx
touch src/pages/Dashboard/components/SpeciesDataTable.jsx
touch src/constants/mlToolsConfig.js
touch src/constants/mockDashboardData.js
```

---

### P4 — Create `src/constants/mlToolsConfig.js`

> 🔑 An array of 7 tool config objects. Each has: `id`, `name`, `description`, `icon`, `route`, `inputFields[]`, `endpoint` (placeholder string for now). This config drives the entire ML Tools UI — no hardcoding per tool.

```js
export const ML_TOOLS_CONFIG = [
  {
    id: "weight-predictor",
    name: "Weight Predictor",
    description: "Predict the weight of a crocodilian from physical measurements.",
    icon: "⚖️",
    route: "/ml-tools/weight-predictor",
    endpoint: "/api/ml/weight-predictor",
    inputFields: [
      { name: "length", label: "Length (m)", type: "number" },
      { name: "species", label: "Species", type: "select" },
      { name: "age", label: "Age (years)", type: "number" },
      { name: "sex", label: "Sex", type: "select" },
    ],
  },
  {
    id: "age-classifier",
    name: "Age Classifier",
    description: "Classify the age group of a crocodilian from physical traits.",
    icon: "🔬",
    route: "/ml-tools/age-classifier",
    endpoint: "/api/ml/age-classifier",
    inputFields: [
      { name: "length", label: "Length (m)", type: "number" },
      { name: "weight", label: "Weight (kg)", type: "number" },
      { name: "species", label: "Species", type: "select" },
    ],
  },
  {
    id: "conservation-predictor",
    name: "Conservation Status Predictor",
    description: "Predict IUCN conservation status from population and habitat data.",
    icon: "🌿",
    route: "/ml-tools/conservation-predictor",
    endpoint: "/api/ml/conservation-predictor",
    inputFields: [
      { name: "populationSize", label: "Population Size", type: "number" },
      { name: "habitatLoss", label: "Habitat Loss (%)", type: "number" },
      { name: "threats", label: "Known Threats", type: "select" },
    ],
  },
  {
    id: "habitat-suitability",
    name: "Habitat Suitability",
    description: "Score the suitability of a region as crocodilian habitat.",
    icon: "🗺️",
    route: "/ml-tools/habitat-suitability",
    endpoint: "/api/ml/habitat-suitability",
    inputFields: [
      { name: "region", label: "Region", type: "select" },
      { name: "avgTemperature", label: "Avg Temperature (°C)", type: "number" },
      { name: "waterProximity", label: "Water Proximity (km)", type: "number" },
    ],
  },
  {
    id: "observation-trend",
    name: "Observation Trend Analysis",
    description: "Analyze observation trends over time for a given species and location.",
    icon: "📈",
    route: "/ml-tools/observation-trend",
    endpoint: "/api/ml/observation-trend",
    inputFields: [
      { name: "species", label: "Species", type: "select" },
      { name: "location", label: "Location", type: "text" },
      { name: "startYear", label: "Start Year", type: "number" },
      { name: "endYear", label: "End Year", type: "number" },
    ],
  },
  {
    id: "population-risk-score",
    name: "Population Risk Score",
    description: "Calculate a 0–100 risk score for a crocodilian population.",
    icon: "⚠️",
    route: "/ml-tools/population-risk-score",
    endpoint: "/api/ml/population-risk-score",
    inputFields: [
      { name: "species", label: "Species", type: "select" },
      { name: "populationSize", label: "Population Size", type: "number" },
      { name: "habitatScore", label: "Habitat Score (0–100)", type: "number" },
      { name: "threatLevel", label: "Threat Level", type: "select" },
    ],
  },
  {
    id: "species-identifier",
    name: "Species Identifier",
    description: "Identify a crocodilian species from physical feature inputs.",
    icon: "🐊",
    route: "/ml-tools/species-identifier",
    endpoint: "/api/ml/species-identifier",
    inputFields: [
      { name: "scalePattern", label: "Scale Pattern", type: "select" },
      { name: "snoutShape", label: "Snout Shape", type: "select" },
      { name: "length", label: "Observed Length (m)", type: "number" },
      { name: "region", label: "Observed Region", type: "select" },
    ],
  },
];
```

---

### P5 — Create `src/constants/mockDashboardData.js`

> 🔑 A rich mock dataset: 15–20 species records each with `weight`, `length`, `age`, `continent`, `conservationStatus`, `populationSize`, `riskScore`, `habitatScore`, `observationsByYear[]`.

```js
export const MOCK_DASHBOARD_DATA = [
  {
    id: "saltwater-crocodile",
    commonName: "Saltwater Crocodile",
    continent: "Asia/Oceania",
    conservationStatus: "Least Concern",
    avgWeight: 450,
    avgLength: 4.8,
    avgAge: 45,
    populationSize: 200000,
    riskScore: 12,
    habitatScore: 88,
    observationsByYear: [
      { year: 2018, count: 340 },
      { year: 2019, count: 378 },
      { year: 2020, count: 290 },
      { year: 2021, count: 412 },
      { year: 2022, count: 455 },
      { year: 2023, count: 501 },
    ],
  },
  {
    id: "nile-crocodile",
    commonName: "Nile Crocodile",
    continent: "Africa",
    conservationStatus: "Least Concern",
    avgWeight: 410,
    avgLength: 4.2,
    avgAge: 40,
    populationSize: 250000,
    riskScore: 18,
    habitatScore: 82,
    observationsByYear: [
      { year: 2018, count: 520 },
      { year: 2019, count: 490 },
      { year: 2020, count: 431 },
      { year: 2021, count: 476 },
      { year: 2022, count: 510 },
      { year: 2023, count: 533 },
    ],
  },
  {
    id: "american-alligator",
    commonName: "American Alligator",
    continent: "North America",
    conservationStatus: "Least Concern",
    avgWeight: 230,
    avgLength: 3.4,
    avgAge: 35,
    populationSize: 5000000,
    riskScore: 8,
    habitatScore: 91,
    observationsByYear: [
      { year: 2018, count: 890 },
      { year: 2019, count: 920 },
      { year: 2020, count: 870 },
      { year: 2021, count: 950 },
      { year: 2022, count: 1010 },
      { year: 2023, count: 1080 },
    ],
  },
  {
    id: "gharial",
    commonName: "Gharial",
    continent: "Asia",
    conservationStatus: "Critically Endangered",
    avgWeight: 160,
    avgLength: 3.5,
    avgAge: 30,
    populationSize: 650,
    riskScore: 91,
    habitatScore: 23,
    observationsByYear: [
      { year: 2018, count: 42 },
      { year: 2019, count: 38 },
      { year: 2020, count: 29 },
      { year: 2021, count: 33 },
      { year: 2022, count: 31 },
      { year: 2023, count: 35 },
    ],
  },
  {
    id: "mugger-crocodile",
    commonName: "Mugger Crocodile",
    continent: "Asia",
    conservationStatus: "Vulnerable",
    avgWeight: 200,
    avgLength: 3.2,
    avgAge: 28,
    populationSize: 8000,
    riskScore: 55,
    habitatScore: 54,
    observationsByYear: [
      { year: 2018, count: 110 },
      { year: 2019, count: 98 },
      { year: 2020, count: 85 },
      { year: 2021, count: 92 },
      { year: 2022, count: 101 },
      { year: 2023, count: 107 },
    ],
  },
  // Add 10–15 more records following the same pattern
];
```

---

## 💡 Why `mlToolsConfig.js` Matters

Instead of building 7 separate hardcoded tool pages, you build **one smart tool renderer** that reads from config:

- Adding a new ML tool in the future = **adding one object** to the config array
- **Zero new component files** needed
- **Consistent UI** across all tools automatically

> This is how real ML platforms like **Hugging Face** and **Vertex AI** handle dynamic tool UIs.

---

*Pre-Step-5 prep complete. Next up: Step 5 — ML Tools UI 🤖*