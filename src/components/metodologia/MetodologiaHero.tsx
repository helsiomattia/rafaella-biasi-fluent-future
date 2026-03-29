import { motion } from "framer-motion";

const MetodologiaHero = () => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-4xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#d08a21]"
      >
        Metodologia
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#15233b] sm:text-5xl md:text-6xl"
      >
        Um método pensado para desenvolver inglês com mais{" "}
        <span className="text-[#d08a21]">clareza, confiança e aplicação real</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500"
      >
        A proposta é criar uma experiência de aprendizagem personalizada, prática
        e alinhada aos objetivos reais de cada aluno, respeitando seu ritmo e
        favorecendo evolução consistente.
      </motion.p>
    </div>
  </section>
);

export default MetodologiaHero;
