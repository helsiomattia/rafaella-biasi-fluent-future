import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const diferenciais = [
  "Aulas adaptadas ao ritmo, perfil e objetivo do aluno",
  "Foco em comunicação, fluência e confiança no uso do inglês",
  "Experiência com diferentes idades, níveis e contextos de aprendizagem",
  "Abordagem prática, clara e orientada a situações reais",
  "Processo mais humano, acolhedor e estratégico",
  "Visão intercultural fortalecida pela experiência internacional",
];

const DiferenciaisMetodologia = () => (
  <section>
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#d08a21]">
          Diferenciais
        </span>

        <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#15233b]">
          O que torna essa metodologia mais humana e eficaz
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          A proposta não é seguir um modelo rígido, mas construir uma experiência de aprendizagem que faça sentido para quem aprende.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {diferenciais.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="rounded-[24px] border border-[#e8e0d4] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(21,35,59,0.04)]"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#d08a21]" />
              <p className="text-base leading-8 text-[#15233b]">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisMetodologia;
