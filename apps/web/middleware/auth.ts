export default defineNuxtRouteMiddleware((to) => {
  // Example auth guard — checks localStorage for auth token
  // In production, replace with real auth check (cookie, session, etc.)
  if (import.meta.client) {
    const token = localStorage.getItem('auth_token')
    if (!token && to.path !== '/login') {
      return navigateTo('/login')
    }
  }
})
