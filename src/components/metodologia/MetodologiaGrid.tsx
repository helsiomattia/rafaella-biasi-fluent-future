import { motion } from "framer-motion";
import { Target, BookOpen, MessageCircle, LineChart } from "lucide-react";

const methodologyCards = [
  {
    icon: Target,
    title: "Diagnóstico inicial",
    description:
      "Tudo começa com a compreensão do seu nível atual, das suas dificuldades e do que você quer alcançar com o inglês.",
    audience: "Para quem quer começar com mais clareza",
    benefit: "Direção mais estratégica desde o início",
  },
  {
    icon: BookOpen,
    title: "Plano personalizado",
    description:
      "As aulas são organizadas de acordo com seu perfil, seu ritmo de aprendizagem e o contexto em que você deseja usar o idioma.",
    audience: "Para quem busca um processo mais personalizado",
    benefit: "Aulas mais relevantes e eficientes",
  },
  {
    icon: MessageCircle,
    title: "Prática com propósito",
    description:
      "A proposta vai além da teoria: o foco é aplicar o inglês em situações reais, com mais segurança e naturalidade.",
    audience: "Para quem quer destravar a comunicação",
    benefit: "Mais confiança para usar o idioma",
  },
  {
    icon: LineChart,
    title: "Acompanhamento contínuo",
    description:
      "Conforme você evolui, o processo também evolui. As aulas são ajustadas para manter consistência, leveza e progresso.",
    audience: "Para quem quer crescer com acompanhamento real",
    benefit: "Evolução contínua e mais sustentável",
  },
];

const MetodologiaGrid = () => {
  return (
    <section className="pb-20">
      <div className="grid gap-6 md:grid-cols-2">
        {methodologyCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-5 space-y-2 rounded-2xl bg-muted/40 p-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Para quem é
                  </p>
                  <p className="mt-1 text-sm text-foreground/90">{item.audience}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Benefício principal
                  </p>
                  <p className="mt-1 text-sm text-foreground/90">{item.benefit}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MetodologiaGrid;
