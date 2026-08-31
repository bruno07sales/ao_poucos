const configuredUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '')
const API_URL = configuredUrl || '/api'
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === 'true' || !configuredUrl

export class ApiError extends Error {
  constructor(message, status = 0, details = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

async function request(path, options = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 12000)
  const token = sessionStorage.getAccessToken()

  try {
    const response = await fetch(`${API_URL}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    })

    const body = response.status === 204 ? null : await response.json().catch(() => null)
    if (!response.ok) {
      if (response.status === 401) {
        sessionStorage.clear()
        window.dispatchEvent(new CustomEvent(SESSION_EXPIRED_EVENT))
      }
      throw new ApiError(body?.message || 'Não foi possível concluir a solicitação.', response.status, body)
    }
    return body
  } catch (error) {
    if (error instanceof ApiError) throw error
    if (error.name === 'AbortError') throw new ApiError('A conexão demorou mais que o esperado.')
    throw new ApiError('Não foi possível conectar ao servidor.')
  } finally {
    clearTimeout(timeout)
  }
}

export const api = {
  login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  logout: () => request('/auth/logout', { method: 'POST' }),
  getSession: () => request('/auth/session'),
  refreshSession: () => request('/auth/refresh', { method: 'POST' }),
  getDashboard: () => request('/dashboard'),
  getLevels: () => request('/levels'),
  getProgress: () => request('/progress'),
  completeLesson: (lessonId) => request(`/lessons/${lessonId}/complete`, { method: 'POST' }),
  completeMission: (missionId) => request(`/missions/${missionId}/complete`, { method: 'POST' }),
}

export { USE_MOCKS }
import { SESSION_EXPIRED_EVENT, sessionStorage } from './session'
