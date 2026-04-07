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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const ComoFuncionaSection = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-6 bg-gold" />
          <span className="text-xs font-bold text-gold tracking-widest uppercase">Como funciona</span>
          <span className="h-px w-6 bg-gold" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 tracking-tight">
          Sua jornada rumo à fluência
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
      >
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
            }}
            whileHover={{ y: -5 }}
            className="relative group transition-transform duration-500"
          >
            <div className="mb-4 relative inline-block">
              <span className="font-display text-7xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-500">{step.number}</span>
              <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
            
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{step.description}</p>
            
            {/* Conection line - only visible on desktop */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 right-0 translate-x-1/2 w-[calc(100%-4rem)] h-[1px] bg-gradient-to-r from-gold/30 to-border border-dashed border-t-[1px] !bg-none" style={{ background: 'none' }} />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ComoFuncionaSection;
