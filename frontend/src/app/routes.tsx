import { LoginScreen } from '../features/auth/pages/LoginScreen'
import { SignUpScreen } from '../features/auth/pages/SignUpScreen'
import { appRoutes } from './appRoutes'

export function AppRoutes() {
  const path = window.location.pathname

  if (path === appRoutes.cadastro) {
    return <SignUpScreen />
  }

  return <LoginScreen />
}
