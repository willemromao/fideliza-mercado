import type { ReactNode } from 'react'

type AuthFieldProps = {
  placeholder: string
  icon: ReactNode
  trailingAction?: ReactNode
  type?: string
}

export function AuthField({ placeholder, icon, trailingAction, type = 'text' }: AuthFieldProps) {
  return (
    <label className="flex h-[4.65rem] items-center gap-3 rounded-[1.3rem] border border-[#e5e7eb] bg-white px-4 shadow-[0_1px_0_rgba(17,24,39,0.02)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#7a8190]">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-full min-w-0 flex-1 bg-transparent text-[1.02rem] text-[#2f3440] placeholder:text-[#6d7686] outline-none"
      />
      {trailingAction ? <span className="text-[#7a8190]">{trailingAction}</span> : null}
    </label>
  )
}
