import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const ExpiresInKey = 'Admin-Expires-In'

const TenantKey = 'Admin-Tenant'

// 生产环境启用 secure + sameSite，降低 Token 被中间人/跨站获取的风险（需全站 HTTPS）
const cookieOptions = process.env.NODE_ENV === 'production'
  ? { secure: true, sameSite: 'Lax' }
  : {}

export function getTenant() {
  return Cookies.get(TenantKey)
}

export function setTenant(tenantid) {
  return Cookies.set(TenantKey, tenantid, cookieOptions)
}

export function removeTenant() {
  return Cookies.remove(TenantKey)
}
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, cookieOptions)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getExpiresIn() {
  return Cookies.get(ExpiresInKey) || -1
}

export function setExpiresIn(time) {
  return Cookies.set(ExpiresInKey, time, cookieOptions)
}

export function removeExpiresIn() {
  return Cookies.remove(ExpiresInKey)
}
