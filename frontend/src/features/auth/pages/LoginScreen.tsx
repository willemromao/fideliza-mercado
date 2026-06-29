import { useState } from 'react'

import { AuthButton } from '../../../components/ui/AuthButton'
import { AuthField } from '../../../components/ui/AuthField'
import { BrandMark } from '../../../components/ui/BrandMark'
import { MailIcon } from '../../../components/icons/auth-icons'
import { PasswordField } from '../../../components/ui/PasswordField'
import { WelcomeCarousel } from '../../../components/ui/WelcomeCarousel'
import { appRoutes, navigateTo } from '../../../app/appRoutes'
import folhasBg from '../../../assets/folhas2.png'
import bagImage from '../../../assets/bag.png'

export function LoginScreen() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  const slides = [
    {
      eyebrow: 'Receitas',
      title: 'Receitas que viram rotina',
      description:
        'Entre para ver sugestões, acompanhar seus pontos e transformar cada compra em uma experiência mais inteligente.',
    },
    {
      eyebrow: 'Benefícios',
      title: 'Vantagens que fazem diferença',
      description:
        'Seu mercado favorito em um só lugar, com recompensas claras, resgates simples e vantagens que fazem sentido no dia a dia.',
    },
    {
      eyebrow: 'Conexão',
      title: 'Tudo perto de você',
      description:
        'Acompanhe sua jornada, descubra novidades e aproveite uma área feita para ganhar tempo sem perder o estilo.',
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950 lg:h-screen lg:overflow-hidden">

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:h-full lg:px-8 lg:py-6">
        <div className="relative flex min-h-[calc(100vh-2rem)] flex-1 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)] lg:h-full lg:min-h-0 lg:rounded-[2.5rem]">
          <div className="relative grid min-h-full flex-1 lg:h-full lg:grid-cols-[1.08fr_0.92fr]">
            <aside className="relative flex min-h-[16rem] items-start justify-center overflow-hidden px-5 pb-10 pt-0 sm:px-8 lg:min-h-full lg:pl-10 lg:pr-0 lg:pb-12 lg:pt-0">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[9.5rem] overflow-hidden sm:h-[11.5rem] lg:h-[14rem]">
                <img
                  src={folhasBg}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="relative z-10 flex w-full max-w-none flex-col items-center pt-[9.25rem] text-center sm:pt-[11rem] lg:items-start lg:text-left lg:pt-[13.25rem]">
                <div className="mb-6 sm:mb-8">
                  <BrandMark className="justify-center lg:justify-start" />
                </div>

                <h1 className="max-w-[14ch] text-[2.4rem] font-black leading-[0.98] tracking-[-0.06em] text-[#0c0c0d] sm:text-[3.2rem] lg:max-w-[12ch] lg:text-[4.45rem]">
                  Bem-vindo!
                </h1>

                <div className="mt-4 w-full max-w-[31rem] sm:mt-5 lg:mt-6">
                  <WelcomeCarousel
                    slides={slides}
                    activeIndex={carouselIndex}
                    onPrevious={() => setCarouselIndex((value) => Math.max(0, value - 1))}
                    onNext={() => setCarouselIndex((value) => Math.min(slides.length - 1, value + 1))}
                  />
                </div>

                <div className="mt-8 hidden w-full max-w-[28rem] lg:flex lg:justify-center">
                  <div className="flex items-center justify-center gap-3">
                    {slides.map((slide, slideIndex) => {
                      const isActive = slideIndex === carouselIndex

                      return (
                        <button
                          key={slide.title}
                          type="button"
                          className={`cursor-pointer rounded-full transition-all ${
                            isActive
                              ? 'h-2.5 w-12 bg-[#DD0205]'
                              : 'h-2.5 w-10 bg-[#f3c7c7] hover:bg-[#efb3b3]'
                          }`}
                          aria-label={`Ir para o slide ${slideIndex + 1}`}
                          onClick={() => setCarouselIndex(slideIndex)}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </aside>

            <section className="relative flex items-center justify-center px-4 py-8 sm:px-6 lg:pl-0 lg:pr-10 lg:py-12">
              <div className="relative w-full max-w-[31rem]">
                <div className="absolute -inset-3 rounded-[2.25rem] bg-[radial-gradient(circle_at_top,_rgba(221,2,5,0.08),transparent_55%)] blur-2xl" />

                <div className="relative rounded-[2rem] bg-[rgba(255,255,255,0.9)] px-4 py-5 shadow-[0_16px_48px_rgba(15,23,42,0.08)] ring-1 ring-black/5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
                  <div className="space-y-4 sm:space-y-4.5">
                    <AuthField placeholder="E-mail ou CPF" icon={<MailIcon className="h-7 w-7" />} />
                    <PasswordField placeholder="Senha" />
                  </div>
                  <div className="mt-5 space-y-4">
                    <AuthButton>Entrar</AuthButton>
                    <AuthButton variant="secondary" onClick={() => navigateTo(appRoutes.cadastro)}>
                      Criar conta
                    </AuthButton>
                  </div>
                </div>

                <div className="relative mt-8 flex flex-col items-center px-2 sm:px-8 lg:mt-10">
                  <img
                    src={bagImage}
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-[18rem] object-contain drop-shadow-[0_20px_30px_rgba(221,2,5,0.16)] sm:max-w-[20rem] lg:max-w-[21rem]"
                  />

                  <p className="mx-auto mt-2 max-w-[22rem] text-center text-[0.96rem] leading-[1.6] text-[#6e7481] sm:text-[1rem]">
                    Ao entrar, você concorda com os{' '}
                    <a href="#" className="cursor-pointer font-medium text-[#D60606]">
                      Termos
                    </a>{' '}
                    e{' '}
                    <a href="#" className="cursor-pointer font-medium text-[#D60606]">
                      Política de Privacidade
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
