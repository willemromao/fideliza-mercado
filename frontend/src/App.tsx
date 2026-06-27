function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.18),_transparent_40%),linear-gradient(180deg,_#fff7ed_0%,_#ffffff_42%,_#fff7ed_100%)] text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-4 py-1 text-sm font-medium text-orange-700 shadow-sm backdrop-blur">
              Clube Sabor
            </span>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Começando a interface do projeto com Tailwind CSS
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Este é um ponto de partida limpo para montar telas do Clube
                Sabor usando classes utilitárias, sem depender do template
                padrão do Vite.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#resumo"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Ver resumo
              </a>
              <a
                href="#proximos-passos"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                Próximos passos
              </a>
            </div>

            <div id="resumo" className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-sm text-slate-500">Stack</p>
                <p className="mt-1 text-lg font-semibold">React + Vite</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-sm text-slate-500">Estilo</p>
                <p className="mt-1 text-lg font-semibold">Tailwind v4</p>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur">
                <p className="text-sm text-slate-500">Base</p>
                <p className="mt-1 text-lg font-semibold">Layout responsivo</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-orange-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Painel</p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                    Preparado para avançar
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Online
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-sm text-slate-300">Próxima etapa</p>
                  <p className="mt-2 text-lg font-medium">
                    Trocar o conteúdo desta tela pelo fluxo real do sistema.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Arquivo principal</p>
                    <p className="mt-1 font-medium text-slate-900">
                      <code className="rounded bg-white px-2 py-1 text-sm">
                        src/App.tsx
                      </code>
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">CSS global</p>
                    <p className="mt-1 font-medium text-slate-900">
                      <code className="rounded bg-white px-2 py-1 text-sm">
                        src/index.css
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="proximos-passos"
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-orange-100 pt-6 text-sm text-slate-500"
        >
          <span>Tailwind já está importado e pronto para uso.</span>
          <span>Agora é só trocar este conteúdo pelas telas do projeto.</span>
        </div>
      </section>
    </main>
  )
}

export default App
