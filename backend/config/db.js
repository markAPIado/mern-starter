import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // Updated connection | mongoose@6.0.6
    const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
