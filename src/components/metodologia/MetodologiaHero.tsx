import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const MetodologiaHero = () => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-6 py-14 shadow-[0_20px_80px_rgba(15,23,42,0.06)] md:px-10 md:py-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl">
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
            Um processo de aprendizagem pensado para desenvolver inglês com mais clareza, confiança e aplicação real.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            A metodologia da Rafaella combina personalização, prática orientada e acompanhamento contínuo, respeitando o ritmo de cada aluno sem perder direção, estratégia e consistência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodologiaHero;
