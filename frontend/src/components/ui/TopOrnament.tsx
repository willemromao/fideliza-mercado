import folhasAsset from '../../assets/folhas2.png'

type TopOrnamentProps = {
  className?: string
}

export function TopOrnament({ className = '' }: TopOrnamentProps) {
  return (
    <div className={`pointer-events-none relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.28),rgba(254,245,244,0.9))]" />
      <div className="relative mx-auto flex w-full max-w-7xl justify-center px-3 sm:px-6">
        <div className="relative w-full max-w-[22rem] sm:max-w-[34rem] lg:max-w-[62rem]">
          <img
            src={folhasAsset}
            alt=""
            aria-hidden="true"
            className="h-20 w-full object-cover object-center opacity-85 sm:h-24 lg:h-32"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22),rgba(255,255,255,0)_18%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.22))]" />
          <div className="absolute inset-x-6 bottom-2 h-px bg-[linear-gradient(90deg,transparent,rgba(221,2,5,0.18),transparent)] sm:inset-x-12" />
        </div>
      </div>
      <div className="h-10 bg-[linear-gradient(180deg,#fef5f4_0%,rgba(254,245,244,0.86)_55%,rgba(254,245,244,0)_100%)] sm:h-12 lg:h-14" />
    </div>
  )
}
