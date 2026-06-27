import type { ButtonHTMLAttributes, ReactNode } from 'react'

type AuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function AuthButton({ variant = 'primary', className = '', children, ...props }: AuthButtonProps) {
  const base =
    'flex h-[4.3rem] w-full items-center justify-center rounded-[1.25rem] text-[1.08rem] font-semibold transition-transform active:scale-[0.99]'
  const styles =
    variant === 'primary'
      ? 'bg-[#DD0205] text-white shadow-[0_18px_34px_rgba(221,2,5,0.26)]'
      : 'border border-[#f0f1f5] bg-white text-[#D60606] shadow-[0_8px_24px_rgba(15,23,42,0.05)]'

  return (
    <button type="button" className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
