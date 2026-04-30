import express from 'express'
import {
  weightPredictor,
  ageClassifier,
  conservationPredictor,
  habitatSuitability,
  observationTrend,
  populationRisk,
  speciesIdentifier,
} from '../controllers/ml.controller.js'

// async wrapper (critical)
import asyncHandler from '../middleware/asyncHandler.js'

const router = express.Router()

// POST /api/ml/weight-predictor
router.post('/weight-predictor', asyncHandler(weightPredictor))

// POST /api/ml/age-classifier
router.post('/age-classifier', asyncHandler(ageClassifier))

// POST /api/ml/conservation-predictor
router.post('/conservation-predictor', asyncHandler(conservationPredictor))

// POST /api/ml/habitat-suitability
router.post('/habitat-suitability', asyncHandler(habitatSuitability))

// POST /api/ml/observation-trend
router.post('/observation-trend', asyncHandler(observationTrend))

// POST /api/ml/population-risk
router.post('/population-risk', asyncHandler(populationRisk))

// POST /api/ml/species-identifier
router.post('/species-identifier', asyncHandler(speciesIdentifier))

export default router