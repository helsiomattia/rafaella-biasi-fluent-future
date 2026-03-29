import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const FilosofiaMetodologia = () => {
  return (
    <motion.section
      {...fadeUp}
      className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_16px_50px_rgba(15,23,42,0.05)] md:p-10"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
          Filosofia de ensino
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Cada aluno aprende de um jeito — por isso o processo precisa fazer sentido para a pessoa, não apenas para o conteúdo.
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          O aprendizado acontece melhor quando existe clareza, segurança e conexão com objetivos reais. Em vez de seguir uma abordagem rígida e padronizada, a proposta é construir uma experiência mais estratégica, humana e funcional.
        </p>

        <p className="mt-4 text-base leading-8 text-slate-600">
          O inglês deixa de ser apenas matéria e passa a ser ferramenta para viagens, trabalho, crescimento pessoal e confiança na comunicação.
        </p>
      </div>
    </motion.section>
  );
};

export default FilosofiaMetodologia;
