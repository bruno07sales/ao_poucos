import { readonly, ref } from 'vue'
import { api, USE_MOCKS } from '../services/api'
import { SESSION_EXPIRED_EVENT, sessionStorage } from '../services/session'

const user = ref(null)
const status = ref('guest')
const initialized = ref(false)
let listenerRegistered = false

async function initialize() {
  if (initialized.value) return
  if (!listenerRegistered) {
    window.addEventListener(SESSION_EXPIRED_EVENT, () => {
      user.value = null
      status.value = 'guest'
    })
    listenerRegistered = true
  }

  const token = sessionStorage.getAccessToken()
  if (!token || USE_MOCKS) {
    status.value = 'guest'
    initialized.value = true
    return
  }

  status.value = 'loading'
  try {
    const session = await api.getSession()
    user.value = session.user
    status.value = 'authenticated'
  } catch {
    sessionStorage.clear()
    status.value = 'guest'
  } finally {
    initialized.value = true
  }
}

async function login(credentials) {
  status.value = 'loading'
  const session = await api.login(credentials)
  sessionStorage.setAccessToken(session.accessToken)
  user.value = session.user
  status.value = 'authenticated'
  return session.user
}

async function logout() {
  try {
    if (!USE_MOCKS) await api.logout()
  } finally {
    sessionStorage.clear()
    user.value = null
    status.value = 'guest'
  }
}

export function useAuth() {
  return { user: readonly(user), status: readonly(status), initialized: readonly(initialized), initialize, login, logout }
}
