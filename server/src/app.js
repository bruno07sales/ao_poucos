import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { config } from './config.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import { healthRouter } from './routes/health.js'

export const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: config.frontendOrigin, credentials: true }))
app.use(express.json({ limit: '100kb' }))
app.use('/v1', healthRouter)
app.use(notFound)
app.use(errorHandler)
