import { useState } from 'react'

import { AuthField } from './AuthField'
import { LockIcon, VisibilityIcon, VisibilityOffIcon } from '../icons/auth-icons'

type PasswordFieldProps = {
  placeholder: string
}

export function PasswordField({ placeholder }: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <AuthField
      placeholder={placeholder}
      type={isVisible ? 'text' : 'password'}
      icon={<LockIcon className="h-7 w-7" />}
      trailingAction={
        <button
          type="button"
          className="cursor-pointer rounded-full p-1 text-[#7a8190] transition-colors hover:text-[#DD0205]"
          aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
          onClick={() => setIsVisible((value) => !value)}
        >
          {isVisible ? <VisibilityIcon className="h-7 w-7" /> : <VisibilityOffIcon className="h-7 w-7" />}
        </button>
      }
    />
  )
}
