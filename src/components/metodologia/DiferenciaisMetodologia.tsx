import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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

const DiferenciaisMetodologia = () => {
  return (
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
          A metodologia prioriza comunicação, confiança e consistência. Isso significa que a experiência de aprendizagem é adaptada ao aluno, mas sem perder direção, estratégia e qualidade.
        </p>

        <p className="mt-4 text-base leading-8 text-slate-600">
          O inglês deixa de ser apenas matéria e passa a ser ferramenta para viagens, trabalho, crescimento pessoal e segurança na comunicação.
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
  );
};

export default DiferenciaisMetodologia;
