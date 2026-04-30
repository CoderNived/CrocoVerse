import { sendSuccess } from '../utils/apiResponse.js'

// GET /api/dashboard/stats
export const getAggregatedStats = async (req, res) => {
  return sendSuccess(
    res,
    {
      totalSpecies: 0,
      endangered: 0,
      observations: 0,
    },
    'Aggregated stats fetched (stub)'
  )
}

// GET /api/dashboard/distribution
export const getContinentDistribution = async (req, res) => {
  return sendSuccess(
    res,
    [],
    'Continent distribution fetched (stub)'
  )
}

// GET /api/dashboard/conservation
export const getConservationBreakdown = async (req, res) => {
  return sendSuccess(
    res,
    [],
    'Conservation breakdown fetched (stub)'
  )
}

// GET /api/dashboard/observations
export const getObservationTrends = async (req, res) => {
  return sendSuccess(
    res,
    [],
    'Observation trends fetched (stub)'
  )
}