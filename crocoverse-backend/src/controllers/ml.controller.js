import { sendSuccess } from '../utils/apiResponse.js'

// POST /api/ml/weight-predictor
export const weightPredictor = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      predictedWeight: null, // placeholder
    },
    'Weight prediction (stub)'
  )
}

// POST /api/ml/age-classifier
export const ageClassifier = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      predictedAgeClass: null,
    },
    'Age classification (stub)'
  )
}

// POST /api/ml/conservation-predictor
export const conservationPredictor = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      conservationStatus: null,
    },
    'Conservation prediction (stub)'
  )
}

// POST /api/ml/habitat-suitability
export const habitatSuitability = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      suitabilityScore: null,
    },
    'Habitat suitability (stub)'
  )
}

// POST /api/ml/observation-trend
export const observationTrend = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      trend: null,
    },
    'Observation trend prediction (stub)'
  )
}

// POST /api/ml/population-risk
export const populationRisk = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      riskLevel: null,
    },
    'Population risk prediction (stub)'
  )
}

// POST /api/ml/species-identifier
export const speciesIdentifier = async (req, res) => {
  const input = req.body

  return sendSuccess(
    res,
    {
      input,
      identifiedSpecies: null,
      confidence: null,
    },
    'Species identification (stub)'
  )
}