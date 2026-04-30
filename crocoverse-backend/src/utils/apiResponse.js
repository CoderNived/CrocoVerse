// Success response
export const sendSuccess = (
  res,
  data = null,
  message = 'Success',
  statusCode = 200,
  meta = null
) => {
  const response = {
    success: true,
    data,
    message,
  }

  // Optional metadata (useful for pagination later)
  if (meta) {
    response.meta = meta
  }

  return res.status(statusCode).json(response)
}

// Error response
export const sendError = (
  res,
  message = 'Something went wrong',
  statusCode = 500,
  errorDetails = null
) => {
  const response = {
    success: false,
    error: message,
    code: statusCode,
  }

  // Only expose detailed errors in development
  if (errorDetails && process.env.NODE_ENV === 'development') {
    response.details = errorDetails
  }

  return res.status(statusCode).json(response)
}