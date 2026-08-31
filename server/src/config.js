import 'dotenv/config'

function required(name) {
  const value = process.env[name]
  if (!value) throw new Error(`Variável obrigatória ausente: ${name}`)
  return value
}

export const config = Object.freeze({
  env: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  databaseUrl: required('DATABASE_URL'),
  databaseSsl: process.env.DATABASE_SSL === 'true',
  frontendOrigin: process.env.FRONTEND_ORIGIN || 'http://127.0.0.1:4173',
})
