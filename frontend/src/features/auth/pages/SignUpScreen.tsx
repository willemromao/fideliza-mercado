import { AuthButton } from '../../../components/ui/AuthButton'
import { AuthField } from '../../../components/ui/AuthField'
import { BrandMark } from '../../../components/ui/BrandMark'
import { PhoneFrame } from '../../../components/layout/PhoneFrame'
import { EyeIcon, LockIcon, MailIcon, PersonIcon } from '../../../components/icons/auth-icons'
import folhasBg from '../../../assets/folhas2.png'
import bagImage from '../../../assets/bag.png'

export function SignUpScreen() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#faf8f8_40%,_#f4f1f1_100%)] text-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(15,23,42,0.9)_1px,transparent_1px)] [background-size:22px_22px]" />

      <PhoneFrame>
        <div
          className="relative flex h-full flex-col overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url(${folhasBg})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <header className="relative z-10 flex items-start justify-between px-7 pt-4">
            <div className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[#0d0d0f]">9:41</div>

            <div className="mt-1 flex h-11 w-[41%] items-center justify-center rounded-full bg-black shadow-[inset_0_-1px_0_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#19a7ff]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#19a7ff]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#19a7ff]" />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[#111111]">
              <div className="flex items-end gap-[2px]">
                <span className="h-[10px] w-[6px] rounded-full bg-current" />
                <span className="h-[14px] w-[6px] rounded-full bg-current" />
                <span className="h-[18px] w-[6px] rounded-full bg-current" />
                <span className="h-[22px] w-[6px] rounded-full bg-current" />
              </div>
              <div className="h-[18px] w-[18px] rounded-full border-[2.5px] border-current" />
              <div className="h-5 w-10 rounded-[0.35rem] border-[1.5px] border-current/90 p-[2px]">
                <div className="h-full w-[68%] rounded-[0.18rem] bg-current" />
              </div>
            </div>
          </header>

          <div className="relative z-10 flex flex-1 flex-col px-6 pb-4 pt-6">
            <BrandMark className="mt-8" />

            <section className="mt-8 text-center">
              <h1 className="text-[2.95rem] font-black tracking-[-0.05em] text-[#0c0c0d]">
                Crie sua conta
              </h1>
              <p className="mx-auto mt-3 max-w-[20rem] text-[1.1rem] leading-[1.45] text-[#6f7584]">
                Cadastre-se para acessar suas receitas, pontos e recompensas.
              </p>
            </section>

            <section className="mt-7 rounded-[2rem] bg-[rgba(255,255,255,0.88)] px-4 pb-6 pt-5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-[2px]">
              <div className="space-y-4">
                <AuthField placeholder="Nome completo" icon={<PersonIcon className="h-7 w-7" />} />
                <AuthField placeholder="E-mail" icon={<MailIcon className="h-7 w-7" />} />
                <AuthField
                  placeholder="Senha"
                  type="password"
                  icon={<LockIcon className="h-7 w-7" />}
                  trailingAction={<EyeIcon className="h-7 w-7" />}
                />
                <AuthField
                  placeholder="Confirmar senha"
                  type="password"
                  icon={<LockIcon className="h-7 w-7" />}
                  trailingAction={<EyeIcon className="h-7 w-7" />}
                />
              </div>

              <div className="mt-5 space-y-4">
                <AuthButton>Criar conta</AuthButton>
                <AuthButton variant="secondary">Já tenho conta</AuthButton>
              </div>
            </section>

            <div className="relative mt-4 flex flex-1 flex-col items-center justify-end">
              <div className="relative h-[13.6rem] w-full">
                <div className="absolute left-[20%] top-[12%] h-4 w-4 rotate-45 rounded-sm bg-[#ffc1c1]" />
                <div className="absolute right-[18%] top-[18%] h-4 w-4 rotate-45 rounded-sm bg-[#ffc1c1]" />
                <div className="absolute left-[66%] top-[36%] h-4 w-4 rotate-45 rounded-sm bg-[#ffc1c1]" />
                <div className="absolute left-[47%] top-[48%] h-36 w-40 -translate-x-1/2 rounded-b-[1.2rem] rounded-t-[2rem] bg-[linear-gradient(180deg,_rgba(255,130,138,0.98)_0%,_rgba(255,92,102,0.92)_100%)] shadow-[0_22px_42px_rgba(221,2,5,0.18)]" />
                <div className="absolute left-1/2 top-[3.5%] h-20 w-[5.4rem] -translate-x-1/2 rounded-t-[3rem] border-[4px] border-[#ff8a93] border-b-0" />
                <div className="absolute left-[calc(50%-1.55rem)] top-[20%] h-4 w-1.5 rounded-full bg-[#d11821]" />
                <div className="absolute left-[calc(50%+1.25rem)] top-[20%] h-4 w-1.5 rounded-full bg-[#d11821]" />
                <div className="absolute left-1/2 top-[31%] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white">
                  <div className="h-7 w-7 rounded-[0.2rem] bg-white [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_72%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
                </div>
                <div className="absolute left-[62%] top-[45%] flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.55)]">
                  <div className="h-6 w-6 rounded-[0.2rem] bg-white [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_72%,21%_91%,32%_57%,2%_35%,39%_35%)]" />
                </div>
                <img
                  src={bagImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-1/2 top-[5.5%] w-[15.4rem] -translate-x-1/2 object-contain drop-shadow-[0_20px_30px_rgba(221,2,5,0.16)]"
                />
              </div>

              <p className="mx-auto mt-2 max-w-[19rem] text-center text-[0.96rem] leading-[1.55] text-[#6e7481]">
                Ao criar sua conta, você concorda com os{' '}
                <a href="#" className="font-medium text-[#D60606]">
                  Termos
                </a>{' '}
                e{' '}
                <a href="#" className="font-medium text-[#D60606]">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </main>
  )
}
