import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { notFound } from './middlewares/errorMiddleware.js'


dotenv.config()

connectDB()

const app = express()

// Allows JSON data from the req.body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})


app.use(notFound)


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
