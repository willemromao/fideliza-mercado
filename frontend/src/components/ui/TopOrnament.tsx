import folhasAsset from '../../assets/folhas2.png'

type TopOrnamentProps = {
  className?: string
}

export function TopOrnament({ className = '' }: TopOrnamentProps) {
  return (
    <div className={`pointer-events-none relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#fef5f4_0%,rgba(254,245,244,0.92)_36%,rgba(254,245,244,0)_100%)] sm:h-28 lg:h-32" />
      <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="relative h-[7.25rem] w-full overflow-hidden sm:h-[8.5rem] lg:h-[10.5rem]">
          <img
            src={folhasAsset}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(254,245,244,0.96)_0%,rgba(254,245,244,0)_12%,rgba(254,245,244,0)_88%,rgba(254,245,244,0.96)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(180deg,rgba(254,245,244,0)_0%,rgba(254,245,244,0.96)_100%)]" />
          <div className="absolute inset-x-[8%] bottom-2 h-px bg-[linear-gradient(90deg,transparent,rgba(221,2,5,0.2),transparent)] sm:inset-x-[12%]" />
        </div>
      </div>
    </div>
  )
}
