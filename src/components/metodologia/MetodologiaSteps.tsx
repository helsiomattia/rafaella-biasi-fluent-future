import { motion } from "framer-motion";
import { Target, BookOpen, MessageCircle, LineChart } from "lucide-react";

const steps = [
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

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const MetodologiaSteps = () => {
  return (
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
        {steps.map((step) => {
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
  );
};

export default MetodologiaSteps;
