import brandIcon from '../../assets/carrinhologo.png'

type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img
        src={brandIcon}
        alt=""
        aria-hidden="true"
        className="h-12 w-12 shrink-0 object-contain sm:h-14 mb-5 sm:w-14"
      />
      <div className="leading-none">
        <div className="text-[2.05rem] font-extrabold tracking-tight text-[#DD0205] sm:text-[2.2rem]">
          Fideliza
        </div>
        <div className="-mt-1 text-[1.6rem] font-extrabold tracking-tight text-[#5f616a] sm:text-[1.74rem]">
          Mercado
        </div>
      </div>
    </div>
  )
}
