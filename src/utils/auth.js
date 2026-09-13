import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const ExpiresInKey = 'Admin-Expires-In'

const TenantKey = 'Admin-Tenant'

// 仅当站点确实运行在 HTTPS 时才启用 secure。
// 当前平台经 HTTP(80) 访问：若强制 secure=true，浏览器不会在 HTTP 下存储/发送
// Admin-Token，导致登录成功拿到 token 却在下个请求取不到，被路由守卫踢回 /login。
const cookieOptions = (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && window.location.protocol === 'https:')
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
