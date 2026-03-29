import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Aulas adaptadas ao ritmo, perfil e objetivo do aluno",
  "Foco em comunicação, fluência e confiança no uso do inglês",
  "Experiência com diferentes idades, níveis e contextos de aprendizagem",
  "Abordagem prática, clara e orientada a situações reais",
  "Processo mais humano, acolhedor e estratégico",
  "Visão intercultural fortalecida pela experiência internacional",
];

const DiferenciaisMetodologia = () => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Diferenciais
        </span>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          O que torna essa metodologia mais humana, personalizada e eficaz.
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          A proposta não é seguir um modelo rígido, mas construir uma experiência de aprendizagem que faça sentido para quem aprende.
        </p>
      </div>

      <div className="mt-12 grid gap-4">
        {differentials.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-7 text-card-foreground">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiferenciaisMetodologia;
