import { motion } from "framer-motion";

const ContatoHero = () => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#d08a21]"
      >
        Contato
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mt-5 text-4xl font-bold leading-tight text-[#15233b] sm:text-5xl md:text-6xl"
      >
        Vamos conversar sobre o seu{" "}
        <span className="text-[#d08a21]">inglês</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mt-6 text-lg text-slate-500 leading-8"
      >
        Me conta seu objetivo, seu momento atual e o que você quer alcançar com o inglês.
        A partir disso, podemos pensar juntos no melhor caminho para você.
      </motion.p>
    </div>
  </section>
);

export default ContatoHero;
