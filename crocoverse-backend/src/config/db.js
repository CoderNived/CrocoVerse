import mongoose from 'mongoose'
import env from './env.js'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // fail fast if DB unreachable
      maxPoolSize: 10, // control connection pool size
    })

    console.log(`✅ MongoDB connected: ${conn.connection.host}`)

    // Optional: log DB name (useful for debugging multiple environments)
    console.log(`📦 Database: ${conn.connection.name}`)

    // Handle runtime connection issues
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB runtime error:', err.message)
    })

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected')
    })

  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`)

    if (env.NODE_ENV === 'development') {
      console.error(error)
    }

    process.exit(1) // fail fast
  }
}

export default connectDB