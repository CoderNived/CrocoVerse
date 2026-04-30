import express from 'express'
import {
  getAggregatedStats,
  getContinentDistribution,
  getConservationBreakdown,
  getObservationTrends,
} from '../controllers/dashboard.controller.js'

// async wrapper (required for proper error flow)
import asyncHandler from '../middleware/asyncHandler.js'

const router = express.Router()

// GET /api/dashboard/stats
router.get('/stats', asyncHandler(getAggregatedStats))

// GET /api/dashboard/distribution
router.get('/distribution', asyncHandler(getContinentDistribution))

// GET /api/dashboard/conservation
router.get('/conservation', asyncHandler(getConservationBreakdown))

// GET /api/dashboard/observations
router.get('/observations', asyncHandler(getObservationTrends))

export default router