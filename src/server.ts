import express from "express"
import {config} from "dotenv"
import { connectDb, disconnectDb } from "./config/db"

//Importando rotas
import recipesRoutes from './routes/recipeRoutes'
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'

config()
connectDb()

const app = express()

app.use(express.json())

//API routes
app.use('/recipes', recipesRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})