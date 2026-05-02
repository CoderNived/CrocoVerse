import mongoose from "mongoose";

const SpeciesSchema = new mongoose.Schema(
  {
    // 🔹 Core Identity
    commonName: {
      type: String,
      required: true,
      trim: true
    },
    scientificName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    slug: {
      type: String,
      unique: true,
      index: true
    },

    // 🔹 Taxonomy
    kingdom: {
      type: String,
      default: "Animalia"
    },
    class: {
      type: String,
      default: "Reptilia"
    },
    order: {
      type: String,
      default: "Crocodilia"
    },
    family: {
      type: String,
      enum: ["Crocodylidae", "Alligatoridae", "Gavialidae"]
    },

    // 🔹 Physical
    averageLength: {
      type: Number,
      min: 0
    },
    maxLength: {
      type: Number,
      min: 0
    },
    averageWeight: {
      type: Number,
      min: 0
    },
    maxWeight: {
      type: Number,
      min: 0
    },
    lifespanYears: {
      type: Number,
      min: 0
    },

    // 🔹 Geographic
    continent: {
      type: String,
      enum: [
        "Africa",
        "Asia",
        "Americas",
        "Australia",
        "Europe",
        "Worldwide"
      ]
    },
    nativeRegions: [
      {
        type: String
      }
    ],
    habitat: {
      type: String,
      enum: ["Freshwater", "Saltwater", "Brackish", "Both"]
    },

    // 🔹 Conservation
    conservationStatus: {
      type: String,
      enum: [
        "Least Concern",
        "Near Threatened",
        "Vulnerable",
        "Endangered",
        "Critically Endangered",
        "Extinct in Wild",
        "Extinct"
      ]
    },
    populationSize: Number,
    populationTrend: {
      type: String,
      enum: ["Increasing", "Stable", "Decreasing", "Unknown"]
    },

    // 🔹 Scores (ML-ready)
    habitatScore: {
      type: Number,
      min: 0,
      max: 100
    },
    riskScore: {
      type: Number,
      min: 0,
      max: 100
    },

    // 🔹 Content
    overview: String,
    habitat_details: String,
    behavior: String,
    diet: String,
    conservationInfo: String,

    quickFacts: [
      {
        icon: String,
        value: String,
        label: String
      }
    ],

    // 🔹 Media
    images: [String]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


// 🔑 Slug Generator (Pre-save Hook)
SpeciesSchema.pre("save", function (next) {
  if (this.isModified("commonName")) {
    this.slug = this.commonName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});


// 🔑 Virtual Field: Full Taxonomy
SpeciesSchema.virtual("fullTaxonomy").get(function () {
  return `${this.kingdom} > ${this.class} > ${this.order} > ${this.family}`;
});


// 🔑 Indexes (important for performance)
SpeciesSchema.index({ slug: 1 });
SpeciesSchema.index({ commonName: 1 });
SpeciesSchema.index({ scientificName: 1 });


export default mongoose.model("Species", SpeciesSchema);