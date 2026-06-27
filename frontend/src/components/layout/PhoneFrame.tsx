import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <section className="relative mx-auto flex w-full max-w-[460px] items-center justify-center px-4 py-4 sm:max-w-none sm:px-0 sm:py-8">
      <div
        className="relative w-full max-w-[390px] overflow-hidden rounded-[3.75rem] border-[14px] border-[#0d0d0d] bg-[#faf7f7] shadow-[0_35px_80px_rgba(0,0,0,0.22)] ring-1 ring-black/10 sm:max-w-[405px]"
        style={{ aspectRatio: '0.46 / 1' }}
      >
        <div className="absolute inset-0 rounded-[3.05rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,255,255,0.85)_45%,_rgba(248,244,244,0.95)_100%)]" />
        <div className="absolute inset-[10px] overflow-hidden rounded-[2.8rem] border border-white/80 bg-[rgba(255,255,255,0.65)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          {children}
        </div>
      </div>
    </section>
  )
}
