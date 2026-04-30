import { sendSuccess, sendError } from '../utils/apiResponse.js'

// GET /api/species
export const getAllSpecies = async (req, res) => {
  try {
    // placeholder for DB call
    const species = []

    return sendSuccess(res, species, 'Species fetched successfully')
  } catch (err) {
    return sendError(res, err.message)
  }
}

// GET /api/species/:id
export const getSpeciesById = async (req, res) => {
  try {
    const { id } = req.params

    // placeholder
    const species = null

    if (!species) {
      return sendError(res, 'Species not found', 404)
    }

    return sendSuccess(res, species, 'Species fetched successfully')
  } catch (err) {
    return sendError(res, err.message)
  }
}

// POST /api/species
export const createSpecies = async (req, res) => {
  try {
    const data = req.body

    // placeholder
    const createdSpecies = data

    return sendSuccess(
      res,
      createdSpecies,
      'Species created successfully',
      201
    )
  } catch (err) {
    return sendError(res, err.message)
  }
}

// PUT /api/species/:id
export const updateSpecies = async (req, res) => {
  try {
    const { id } = req.params
    const updates = req.body

    // placeholder
    const updatedSpecies = null

    if (!updatedSpecies) {
      return sendError(res, 'Species not found', 404)
    }

    return sendSuccess(
      res,
      updatedSpecies,
      'Species updated successfully'
    )
  } catch (err) {
    return sendError(res, err.message)
  }
}

// DELETE /api/species/:id
export const deleteSpecies = async (req, res) => {
  try {
    const { id } = req.params

    // placeholder
    const deleted = false

    if (!deleted) {
      return sendError(res, 'Species not found', 404)
    }

    return sendSuccess(res, null, 'Species deleted successfully')
  } catch (err) {
    return sendError(res, err.message)
  }
}