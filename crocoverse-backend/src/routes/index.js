import express from 'express'

// Sub-routers
import speciesRoutes from './species.routes.js'
import mlRoutes from './ml.routes.js'
import dashboardRoutes from './dashboard.routes.js'

// Utils
import { sendSuccess, sendError } from '../utils/apiResponse.js'

const router = express.Router()

// 🔹 Health check (keep first)
router.get('/health', (req, res) => {
  return sendSuccess(
    res,
    {
      status: 'ok',
      uptime: process.uptime(), // seconds
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    },
    'API is healthy'
  )
})

// 🔹 Feature routes
router.use('/species', speciesRoutes)
router.use('/ml', mlRoutes)
router.use('/dashboard', dashboardRoutes)

// 🔹 404 handler (Express 5-safe, consistent response shape)
router.use((req, res) => {
  return sendError(
    res,
    `Route not found: ${req.originalUrl}`,
    404
  )
})

export default router