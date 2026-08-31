import { Router } from 'express'
import { query } from '../db/pool.js'

export const healthRouter = Router()

healthRouter.get('/health', (req, res) => res.json({ status: 'ok', service: 'aos-poucos-api' }))

healthRouter.get('/ready', async (req, res) => {
  try {
    await query('SELECT 1')
    res.json({ status: 'ready', database: 'connected' })
  } catch {
    res.status(503).json({ status: 'not_ready', database: 'unavailable' })
  }
})
