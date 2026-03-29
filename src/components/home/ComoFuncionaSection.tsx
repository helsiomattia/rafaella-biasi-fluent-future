import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendo seu nível, seus objetivos e sua rotina numa conversa inicial gratuita.",
  },
  {
    number: "02",
    title: "Plano Personalizado",
    description: "Crio um plano sob medida com materiais e abordagem pensados para você.",
  },
  {
    number: "03",
    title: "Acompanhamento",
    description: "Aulas regulares com feedback constante e ajustes conforme sua evolução.",
  },
  {
    number: "04",
    title: "Evolução Real",
    description: "Você percebe a diferença na confiança, na pronúncia e na comunicação.",
  },
];

const ComoFuncionaSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-accent tracking-widest uppercase">Como funciona</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Sua jornada rumo à fluência
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            <span className="font-display text-6xl font-bold text-accent/15">{step.number}</span>
            <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoFuncionaSection;
