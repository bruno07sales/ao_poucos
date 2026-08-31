const ACCESS_TOKEN_KEY = 'aos_poucos_access_token'
const LEGACY_TOKEN_KEY = 'aos_poucos_token'

export const sessionStorage = {
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY) || localStorage.getItem(LEGACY_TOKEN_KEY)
  },
  setAccessToken(token) {
    if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token)
    else localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(LEGACY_TOKEN_KEY)
  },
  clear() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(LEGACY_TOKEN_KEY)
  },
}

export const SESSION_EXPIRED_EVENT = 'aos-poucos:session-expired'
