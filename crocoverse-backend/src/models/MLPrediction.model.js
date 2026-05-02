import mongoose from "mongoose";

const MLPredictionSchema = new mongoose.Schema(
  {
    // 🔹 Tool Identifier
    toolName: {
      type: String,
      required: true,
      enum: [
        "weight-predictor",
        "age-classifier",
        "conservation-predictor",
        "habitat-suitability",
        "observation-trend",
        "population-risk",
        "species-identifier"
      ],
      index: true
    },

    // 🔹 Flexible Input / Output (Different per tool)
    inputData: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },

    outputData: {
      type: mongoose.Schema.Types.Mixed
    },

    // 🔹 ML Metrics
    confidence: {
      type: Number,
      min: 0,
      max: 1
    },

    processingMs: {
      type: Number,
      min: 0
    },

    // 🔹 Execution Status
    status: {
      type: String,
      enum: ["success", "error", "timeout"],
      default: "success"
    },

    errorMessage: {
      type: String
    }
  },
  {
    timestamps: true
  }
);


// 🔑 Analytics Index (CRITICAL for dashboard queries)
MLPredictionSchema.index({ toolName: 1, createdAt: -1 });


export default mongoose.model("MLPrediction", MLPredictionSchema);