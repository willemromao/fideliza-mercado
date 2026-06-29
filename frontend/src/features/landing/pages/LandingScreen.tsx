import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { BrandMark } from "../../../components/ui/BrandMark";
import { AuthButton } from "../../../components/ui/AuthButton";
import { AuthField } from "../../../components/ui/AuthField";
import { MailIcon, PersonIcon } from "../../../components/icons/auth-icons";
import { appRoutes, navigateTo } from "../../../app/appRoutes";
import folhasHero from "../../../assets/folhas1.png";
import homeReceitas from "../../../assets/landing/home-receitas.png";
import desafioCliente from "../../../assets/landing/concluir-desafio-cliente.png";
import recompensaResgatada from "../../../assets/landing/recompensa-resgatada.png";
import pontosCard from "../../../assets/pontos-card.png";
import codigoCard from "../../../assets/codigo-card.png";

const heroReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

const staggerReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
} as const;

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
} as const;

const containerReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
} as const;

const itemReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

const benefits = [
  {
    icon: <ChartIcon className="h-6 w-6" />,
    title: "Aumente o ticket médio",
    description: "Sugestões e jornadas que estimulam compras mais completas.",
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Fidelize com desafios e pontos",
    description: "Campanhas simples para engajar sem complicar a operação.",
  },
  {
    icon: <TagIcon className="h-6 w-6" />,
    title: "Promova produtos do estoque",
    description:
      "Destaque itens com baixa saída e mova a prateleira com inteligência.",
  },
];

const landingCards = [
  {
    image: pontosCard,
    alt: "Card de pontos",
  },
  {
    image: codigoCard,
    alt: "Card de código de resgate",
  },
];

const steps = [
  {
    number: "1",
    icon: <RecipeIcon className="h-7 w-7" />,
    title: "Tenha receitas prontas",
    description: "Crie receitas com os produtos do seu estoque.",
  },
  {
    number: "2",
    icon: <PeopleIcon className="h-7 w-7" />,
    title: "O cliente participa",
    description: "Ele explora, cozinha e interage com a sua marca.",
  },
  {
    number: "3",
    icon: <BadgeIcon className="h-7 w-7" />,
    title: "Ele ganha pontos",
    description: "Cada ação gera pontos e abre novos desafios.",
  },
  {
    number: "4",
    icon: <GiftIcon className="h-7 w-7" />,
    title: "Resgata recompensas",
    description: "Pontos viram benefícios e motivos para voltar sempre.",
  },
];

export function LandingScreen() {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const phoneLift = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const blobShift = useTransform(scrollYProgress, [0, 1], [0, -64]);
  const foliageShift = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <main className="relative overflow-x-hidden bg-[radial-gradient(circle_at_top,_#fff_0%,_#faf6f5_45%,_#f5efee_100%)] text-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(15,23,42,0.9)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="flex items-center justify-between gap-4 pb-4 sm:pb-6">
          <BrandMark className="scale-[0.88] origin-left sm:scale-100" />

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => navigateTo(appRoutes.login)}
              className="cursor-pointer rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-[#D60606] shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-0.5"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => navigateTo(appRoutes.cadastro)}
              className="cursor-pointer rounded-full bg-[#DD0205] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(221,2,5,0.24)] transition-transform hover:-translate-y-0.5"
            >
              Cadastro
            </button>
          </div>
        </header>

        <motion.section
          ref={heroRef}
          initial="hidden"
          animate="visible"
          variants={staggerReveal}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-[0_36px_90px_rgba(15,23,42,0.08)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,248,247,0.96)_55%,rgba(255,255,255,0.96)_100%)]" />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={!reduceMotion ? { y: foliageShift } : undefined}
          >
            <img
              src={folhasHero}
              alt=""
              className="absolute left-[-8%] top-[-2%] h-[108%] w-[60%] object-cover object-left-top opacity-30"
            />
            <div className="absolute right-[-11rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-[#DD0205] opacity-95 blur-[2px]" />
          </motion.div>

          <div className="relative grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.02fr_1fr] lg:gap-6 lg:px-10 lg:py-10">
            <motion.div
              variants={heroReveal}
              className="relative z-10 flex flex-col"
            >
              <div className="mb-5 inline-flex w-fit rounded-full bg-[#feecea] px-4 py-2 text-[0.92rem] font-semibold text-[#DD0205] shadow-[0_8px_22px_rgba(221,2,5,0.08)]">
                Plataforma white-label para supermercados
              </div>

              <h1 className="max-w-[12ch] text-[2.6rem] font-black leading-[0.95] tracking-[-0.07em] text-[#111111] sm:text-[3.5rem] lg:max-w-[13ch] lg:text-[4.7rem]">
                Transforme seu estoque em uma experiência que faz o cliente{" "}
                <span className="text-[#D60606]">
                  comprar, pontuar e voltar.
                </span>
              </h1>

              <p className="mt-5 max-w-[33rem] text-[1.04rem] leading-[1.7] text-[#5f6573] sm:text-[1.08rem]">
                Integre estoque, gamificação e experiência digital para aumentar
                ticket médio, recorrência e fidelização na sua rede de
                supermercados.
              </p>

              <motion.div
                className="mt-8 grid gap-4 sm:grid-cols-3"
                variants={containerReveal}
              >
                {benefits.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemReveal}
                    className="rounded-[1.5rem] border border-black/5 bg-white px-4 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)]"
                  >
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff3f1] text-[#DD0205]">
                      {item.icon}
                    </div>
                    <p className="text-[0.98rem] font-semibold leading-[1.35] text-[#121212]">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={heroReveal}
                className="mt-8 rounded-[2rem] border border-black/5 bg-[rgba(255,255,255,0.94)] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6"
              >
                <div className="grid gap-4">
                  <AuthField
                    placeholder="Nome"
                    icon={<PersonIcon className="h-7 w-7" />}
                  />
                  <AuthField
                    placeholder="E-mail"
                    icon={<MailIcon className="h-7 w-7" />}
                  />
                  <AuthField
                    placeholder="Telefone / WhatsApp"
                    icon={<PhoneIcon className="h-7 w-7" />}
                  />
                </div>

                <AuthButton className="mt-5 px-8 sm:px-10">
                  Quero agendar uma demonstração
                </AuthButton>

                <p className="mt-4 text-center text-[0.92rem] leading-[1.6] text-[#6c7280]">
                  Demonstração exclusiva para gestores de varejo.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <motion.div
                aria-hidden="true"
                className="absolute right-[-6rem] top-[12%] hidden h-[28rem] w-[28rem] rounded-full bg-[#DD0205] opacity-95 blur-[2px] lg:block"
                style={!reduceMotion ? { x: blobShift } : undefined}
              />

              <div className="relative z-10 w-full max-w-[520px] lg:pr-2">
                <motion.div
                  style={!reduceMotion ? { y: phoneLift } : undefined}
                  className="relative ml-auto w-[88%] sm:w-[92%] lg:w-[72%]"
                >
                  <div className="absolute -inset-4 rounded-[2.8rem] bg-black/5 blur-2xl" />
                  <img
                    src={homeReceitas}
                    alt="Tela de receitas do aplicativo"
                    className="relative w-full rotate-[5deg] rounded-[2.3rem] object-cover shadow-[0_28px_70px_rgba(15,23,42,0.22)] ring-1 ring-black/10"
                  />
                </motion.div>

                <motion.div
                  className="absolute left-0 top-[48%] hidden -translate-y-1/2 flex-col gap-3 lg:flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  {landingCards.map((card) => (
                    <div
                      key={card.alt}
                      className="w-[10.75rem] overflow-hidden rounded-[1.45rem] bg-white shadow-[0_18px_35px_rgba(15,23,42,0.08)] ring-1 ring-black/5"
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-6 grid gap-4 rounded-[2rem] border border-black/5 bg-white px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:grid-cols-3 sm:px-6 sm:py-6"
        >
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              variants={itemReveal}
              className="flex items-center gap-4 rounded-[1.4rem] p-2"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.4rem] bg-[#fff4f2] text-[#DD0205]">
                {item.icon}
              </div>
              <div>
                <p className="text-[1.02rem] font-semibold text-[#121212]">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.95rem] leading-[1.5] text-[#6a7180]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="py-16 sm:py-20"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-[#feecea] px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#DD0205]">
              Como funciona
            </div>
            <h2 className="text-[2rem] font-black tracking-[-0.05em] text-[#111111] sm:text-[2.5rem]">
              Simples para você. Inesquecível para o cliente.
            </h2>
          </div>

          <motion.div
            className="grid gap-4 lg:grid-cols-4"
            variants={containerReveal}
          >
            {steps.map((item) => (
              <motion.div
                key={item.title}
                variants={itemReveal}
                className="relative rounded-[2rem] border border-black/5 bg-white p-6 text-center shadow-[0_16px_42px_rgba(15,23,42,0.05)]"
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#DD0205] text-white">
                  {item.number}
                </div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#fff4f2] text-[#DD0205]">
                  {item.icon}
                </div>
                <h3 className="text-[1.02rem] font-semibold text-[#111111]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-[1.65] text-[#6c7280]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="pb-16 sm:pb-20"
        >
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-[#feecea] px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#DD0205]">
              Prova de produto
            </div>
            <h2 className="text-[2rem] font-black tracking-[-0.05em] text-[#111111] sm:text-[2.5rem]">
              Receitas, pontos e recompensas em um só lugar.
            </h2>
          </div>

          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={containerReveal}
          >
            {productShowcase.map((item) => (
              <motion.article
                key={item.title}
                variants={itemReveal}
                className="group rounded-[2.2rem] border border-black/5 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
              >
                <div
                  className={`rounded-[1.8rem] bg-gradient-to-br ${item.accent} p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]`}
                >
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full rounded-[1.25rem] object-cover shadow-[0_16px_34px_rgba(15,23,42,0.12)]"
                  />
                </div>
                <div className="px-2 pb-2 pt-5 text-center">
                  <h3 className="text-[1.08rem] font-semibold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-[1.6] text-[#6c7280]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="pb-12 sm:pb-16"
        >
          <div className="rounded-[2.3rem] border border-black/5 bg-white px-5 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-[#feecea] px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-[#DD0205]">
                Agende uma demonstração
              </div>
              <h2 className="text-[2rem] font-black tracking-[-0.05em] text-[#111111] sm:text-[2.5rem]">
                Leve fidelização inteligente para a sua rede
              </h2>
              <p className="mx-auto mt-3 max-w-[46rem] text-[1rem] leading-[1.7] text-[#646b79]">
                Preencha os dados abaixo e comece a desenhar uma experiência
                mais relevante para o seu cliente.
              </p>
            </div>

            <motion.div
              className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]"
              variants={containerReveal}
            >
              <motion.div variants={itemReveal}>
                <AuthField
                  placeholder="Nome"
                  icon={<PersonIcon className="h-7 w-7" />}
                />
              </motion.div>
              <motion.div variants={itemReveal}>
                <AuthField
                  placeholder="E-mail"
                  icon={<MailIcon className="h-7 w-7" />}
                />
              </motion.div>
              <motion.div variants={itemReveal}>
                <AuthField
                  placeholder="Telefone / WhatsApp"
                  icon={<PhoneIcon className="h-7 w-7" />}
                />
              </motion.div>
              <motion.div variants={itemReveal} className="lg:self-stretch">
                <AuthButton className="lg:self-stretch px-8 sm:px-10">
                  Quero agendar uma demonstração
                </AuthButton>
              </motion.div>
            </motion.div>

            <p className="mt-5 text-center text-[0.94rem] text-[#6c7280]">
              Pensado para redes, mercados independentes e atacarejos.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

function ChartIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15v-4" />
      <path d="M12 15V9" />
      <path d="M16 15V7" />
    </svg>
  );
}

function StarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="m12 2 2.9 6.1 6.6.9-4.7 4.5 1.1 6.5L12 16.9 6.1 20l1.1-6.5-4.7-4.5 6.6-.9L12 2z" />
    </svg>
  );
}

function TagIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M3 12.5V6.2A2.2 2.2 0 0 1 5.2 4H11l8.8 8.8a2 2 0 0 1 0 2.8l-5.2 5.2a2 2 0 0 1-2.8 0L3 12.5Z" />
      <path d="M8 8h.01" />
    </svg>
  );
}

function RecipeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M7 3v7" />
      <path d="M5 5h4" />
      <path d="M14 3h5l-1 4 1 4h-5v10h-2V3z" />
    </svg>
  );
}

function PeopleIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M16 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <path d="M3.5 20c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5" />
      <path d="M13.5 20c.4-2.1 1.7-3.6 4.2-4.2 2.2-.5 3.8.4 4.8 2.2" />
    </svg>
  );
}

function BadgeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.1L12 17.9l-5.5 2.9 1-6.1-4.5-4.4 6.2-.9L12 3z" />
    </svg>
  );
}

function GiftIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M3 10h18v4H3z" />
      <path d="M12 10v11" />
      <path d="M12 10c-1.7 0-3-1.3-3-3s3-2 3 1c0-3 3-4 3-1s-1.3 3-3 3Z" />
      <path d="M6 14v7h12v-7" />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M10 18h4" />
    </svg>
  );
}

const productShowcase = [
  {
    title: "Explore receitas",
    description: "Inspiração diária e filtros inteligentes.",
    accent: "from-[#ffecd8] via-[#fff4ea] to-[#ffd6c2]",
    image: homeReceitas,
  },
  {
    title: "Detalhe completo",
    description: "Ingredientes sugeridos, modo de preparo e pontos.",
    accent: "from-[#f3ece8] via-[#fffaf7] to-[#e9d9cf]",
    image: desafioCliente,
  },
  {
    title: "Resgate de recompensas",
    description: "QR Code único para trocar por benefícios.",
    accent: "from-[#f4ddd9] via-[#fff1ef] to-[#ffd0c7]",
    image: recompensaResgatada,
  },
];
