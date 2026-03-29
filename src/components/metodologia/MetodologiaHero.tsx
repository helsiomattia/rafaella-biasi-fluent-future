import { motion } from "framer-motion";

const MetodologiaHero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
        >
          Metodologia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Um método pensado para desenvolver inglês com mais clareza, confiança e aplicação real.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          A proposta é criar uma experiência de aprendizagem personalizada, prática e alinhada aos objetivos reais de cada aluno, respeitando seu ritmo e favorecendo evolução consistente.
        </motion.p>
      </div>
    </section>
  );
};

export default MetodologiaHero;
