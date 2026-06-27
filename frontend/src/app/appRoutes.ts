export const appRoutes = {
  login: '/',
  cadastro: '/cadastro',
} as const

export function navigateTo(path: string) {
  window.location.assign(path)
}
