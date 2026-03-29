import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Conversa Inicial",
    description: "Agendamos uma conversa gratuita para eu entender seus objetivos, nível e rotina.",
  },
  {
    icon: ClipboardList,
    title: "Plano Sob Medida",
    description: "Crio um plano personalizado com materiais, temas e ritmo pensados para você.",
  },
  {
    icon: CalendarCheck,
    title: "Aulas Regulares",
    description: "Encontros online com horários flexíveis, feedback constante e ajustes contínuos.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Reais",
    description: "Acompanhamento da sua evolução com metas claras e progresso visível.",
  },
];

const ComoFuncionaServicos = () => (
  <section className="py-20 md:py-28">
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
          Do primeiro contato à fluência
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-5 relative">
              <step.icon className="w-7 h-7 text-gold-dark" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ComoFuncionaServicos;
