export function notFound(req, res) {
  res.status(404).json({ message: 'Rota não encontrada.', code: 'NOT_FOUND' })
}

export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error)
  console.error(error)
  res.status(error.status || 500).json({
    message: error.expose ? error.message : 'Ocorreu um erro interno.',
    code: error.code || 'INTERNAL_ERROR',
  })
}
