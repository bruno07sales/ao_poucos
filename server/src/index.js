import { app } from './app.js'
import { config } from './config.js'
import { pool } from './db/pool.js'

const server = app.listen(config.port, '127.0.0.1', () => {
  console.log(`API disponível em http://127.0.0.1:${config.port}/v1`)
})

async function shutdown(signal) {
  console.log(`${signal} recebido; encerrando conexões.`)
  server.close(async () => {
    await pool.end()
    process.exit(0)
  })
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))
