import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  MessageCircle,
  BookOpen,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const methodologySteps = [
  {
    icon: Target,
    title: "Diagnóstico inicial",
    description:
      "Cada jornada começa com uma leitura clara do seu momento atual, das suas dificuldades e dos seus objetivos com o inglês.",
  },
  {
    icon: BookOpen,
    title: "Plano personalizado",
    description:
      "As aulas são estruturadas de forma estratégica, considerando seu nível, seu ritmo e o contexto em que você quer usar o idioma.",
  },
  {
    icon: MessageCircle,
    title: "Prática com propósito",
    description:
      "O foco não é apenas estudar inglês, mas aplicar o idioma com mais segurança em situações reais e relevantes para você.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento contínuo",
    description:
      "O processo é ajustado conforme sua evolução, para que o aprendizado continue leve, consistente e orientado a resultado.",
  },
];

const differentials = [
  "Aulas adaptadas ao perfil e objetivo do aluno",
  "Foco em comunicação, fluência e confiança",
  "Abordagem prática e aplicável ao dia a dia",
  "Experiência com diferentes idades, níveis e contextos",
  "Visão intercultural fortalecida pela experiência internacional",
  "Processo mais humano, claro e personalizado",
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Metodologia = () => {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-6 py-14 shadow-[0_20px_80px_rgba(15,23,42,0.06)] md:px-10 md:py-20">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-medium text-cyan-700">
                <Sparkles className="h-4 w-4" />
                Metodologia de ensino
              </div>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Um processo de aprendizado pensado para desenvolver inglês com
                clareza, confiança e aplicação real.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                A metodologia da Rafaella é baseada em personalização, prática
                orientada e acompanhamento contínuo. O objetivo não é apenas
                ensinar inglês, mas ajudar o aluno a usar o idioma com mais
                segurança, autonomia e propósito.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Agendar conversa
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Ver aulas e serviços
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="mb-5">
              <p className="text-sm text-slate-400">Approach overview</p>
              <h2 className="mt-1 text-xl font-semibold">Learning Experience</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Foco
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Construir fluência com método, acolhimento e prática alinhada
                  à realidade de cada aluno.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">1:1</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Ensino personalizado
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white">Real</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Aplicação prática do idioma
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-4">
                <p className="text-sm font-medium text-cyan-200">
                  Diferencial central
                </p>
                <p className="mt-2 text-sm leading-6 text-cyan-50/85">
                  A metodologia respeita o ritmo do aluno, mas mantém direção
                  clara para evolução consistente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        {...fadeUp}
        className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] md:p-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Filosofia de ensino
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Cada aluno aprende de um jeito — por isso o processo precisa fazer
            sentido para a pessoa, não apenas para o conteúdo.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            O aprendizado acontece melhor quando existe clareza, segurança e
            conexão com objetivos reais. Em vez de seguir uma abordagem rígida e
            padronizada, a proposta é construir uma experiência mais estratégica,
            humana e funcional, em que o inglês se torna uma ferramenta viva.
          </p>
        </div>
      </motion.section>

      <motion.section {...fadeUp}>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Um caminho estruturado para transformar estudo em evolução real.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {methodologySteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-700">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            O que guia o método
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Menos rigidez, mais intenção.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            A metodologia prioriza comunicação, confiança e consistência. Isso
            significa que a experiência de aprendizagem é adaptada ao aluno, mas
            sem perder direção, estratégia e qualidade.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            O inglês deixa de ser apenas matéria e passa a ser ferramenta para
            viagens, trabalho, crescimento pessoal e segurança na comunicação.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Diferenciais
          </p>

          <div className="mt-6 grid gap-3">
            {differentials.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Resultado esperado
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              O objetivo é que o aluno avance com mais segurança, clareza e
              autonomia.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Mais do que acumular conteúdo, a proposta é construir confiança
              para usar o inglês de forma prática, sustentável e alinhada aos
              objetivos reais de cada pessoa.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">
                Mais confiança
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Para falar, ouvir e se posicionar melhor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">
                Evolução prática
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Inglês aplicado a contextos reais e objetivos concretos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">
                Mais autonomia
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Desenvolvimento de segurança no uso do idioma.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-900">
                Caminho personalizado
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Processo alinhado ao ritmo e à meta do aluno.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="rounded-[32px] border border-slate-200 bg-slate-950 px-6 py-12 text-center text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] md:px-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Próximo passo
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Vamos construir um plano de inglês que faça sentido para você.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Se você busca uma experiência mais personalizada, prática e orientada
          à sua realidade, este pode ser o melhor momento para começar.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            Entrar em contato
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Ver serviços
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Metodologia;
