import express from 'express'
import {
  getAllSpecies,
  getSpeciesById,
  createSpecies,
  updateSpecies,
  deleteSpecies,
} from '../controllers/species.controller.js'

import asyncHandler from '../middleware/asyncHandler.js'

const router = express.Router()

// GET /api/species
router.get('/', asyncHandler(getAllSpecies))

// GET /api/species/:id
router.get('/:id', asyncHandler(getSpeciesById))

// POST /api/species
router.post('/', asyncHandler(createSpecies))

// PUT /api/species/:id
router.put('/:id', asyncHandler(updateSpecies))

// DELETE /api/species/:id
router.delete('/:id', asyncHandler(deleteSpecies))

export default router