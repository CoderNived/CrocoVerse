import express from 'express'

// Sub-routers
import speciesRoutes from './species.routes.js'
import mlRoutes from './ml.routes.js'
import dashboardRoutes from './dashboard.routes.js'

// Utils
import { sendSuccess } from '../utils/apiResponse.js'

const router = express.Router()

// 🔹 Health check (keep this ABOVE other routes for quick access)
router.get('/health', (req, res) => {
  return sendSuccess(
    res,
    {
      status: 'ok',
      uptime: process.uptime(), // seconds since server started
      timestamp: new Date().toISOString(),
    },
    'API is healthy'
  )
})

// 🔹 Feature routes
router.use('/species', speciesRoutes)
router.use('/ml', mlRoutes)
router.use('/dashboard', dashboardRoutes)

// 🔹 404 handler (for unknown API routes)
router.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    error: `Route not found: ${req.originalUrl}`,
    code: 404,
  })
})

export default router