import { motion } from "framer-motion";

const results = [
  {
    title: "Mais confiança",
    description: "Para falar, ouvir e se posicionar melhor.",
  },
  {
    title: "Evolução prática",
    description: "Inglês aplicado a contextos reais e objetivos concretos.",
  },
  {
    title: "Mais autonomia",
    description: "Desenvolvimento de segurança no uso do idioma.",
  },
  {
    title: "Caminho personalizado",
    description: "Processo alinhado ao ritmo e à meta do aluno.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ResultadosMetodologia = () => {
  return (
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
            O objetivo é que o aluno avance com mais segurança, clareza e autonomia.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Mais do que acumular conteúdo, a proposta é construir confiança para usar o inglês de forma prática, sustentável e alinhada aos objetivos reais de cada pessoa.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {results.map((result) => (
            <div
              key={result.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm font-medium text-slate-900">
                {result.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResultadosMetodologia;
