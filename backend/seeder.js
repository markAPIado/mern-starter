import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    // ADD CODE HERE

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.inverse)
    process.exit(1)
  }
}

const deleteData = async () => {
  try {
    // ADD CODE HERE

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error.message}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  deleteData()
} else {
  importData()
}
