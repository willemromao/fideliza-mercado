import { ChevronLeftIcon, ChevronRightIcon } from '../icons/auth-icons'

type CarouselSlide = {
  eyebrow?: string
  title: string
  description: string
}

type WelcomeCarouselProps = {
  slides: CarouselSlide[]
  activeIndex: number
  onPrevious: () => void
  onNext: () => void
  className?: string
}

export function WelcomeCarousel({
  slides,
  activeIndex,
  onPrevious,
  onNext,
  className = '',
}: WelcomeCarouselProps) {
  const activeSlide = slides[activeIndex] ?? slides[0]
  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < slides.length - 1

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start gap-3">
        {hasPrev ? (
          <button
            type="button"
            className="cursor-pointer self-center p-0 text-[#DD0205] transition-transform active:scale-95"
            aria-label="Voltar carrossel"
            onClick={onPrevious}
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
        ) : (
          <span className="h-8 w-8 shrink-0" />
        )}

        <div className="min-w-0 flex-1">
          {activeSlide.eyebrow ? (
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#D60606]">
              {activeSlide.eyebrow}
            </p>
          ) : null}
          <p className="mt-2 text-[1.08rem] font-semibold tracking-[-0.03em] text-[#0f172a] sm:text-[1.14rem]">
            {activeSlide.title}
          </p>
          <p className="mt-2 text-[1.02rem] leading-[1.65] text-[#6f7584] sm:text-[1.08rem]">
            {activeSlide.description}
          </p>
        </div>

        {hasNext ? (
          <button
            type="button"
            className="cursor-pointer self-center p-0 text-[#DD0205] transition-transform active:scale-95"
            aria-label="Avançar carrossel"
            onClick={onNext}
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        ) : (
          <span className="h-8 w-8 shrink-0" />
        )}
      </div>
    </div>
  )
}
