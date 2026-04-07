import { motion } from "framer-motion";
import { User, Globe, MessageCircle, Settings } from "lucide-react";

const items = [
  {
    icon: User,
    title: "Ensino Personalizado",
    description: "Cada aula é desenhada para você. Seu nível, seus objetivos, seu ritmo.",
  },
  {
    icon: Globe,
    title: "Experiência Internacional",
    description: "Vivência no exterior que traz autenticidade e profundidade ao ensino.",
  },
  {
    icon: MessageCircle,
    title: "Foco em Fluência",
    description: "Prática real de conversação desde a primeira aula. Menos gramática decorada, mais comunicação.",
  },
  {
    icon: Settings,
    title: "Adaptação ao Aluno",
    description: "Materiais, temas e abordagens que fazem sentido para a sua vida e carreira.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const DiferenciaisSection = () => (
  <section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
    {/* Abstract background blobs */}
    <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/40 blur-[100px] rounded-full pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-6 bg-gold" />
          <span className="text-xs font-bold text-gold tracking-widest uppercase">Diferenciais</span>
          <span className="h-px w-6 bg-gold" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 tracking-tight">
          Por que aprender comigo?
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group glass-panel rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-premium hover:border-gold/30 bg-white/60"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold-light/30 flex items-center justify-center mx-auto mb-6 transform group-hover:-translate-y-2 group-hover:bg-gold/20 transition-all duration-500 shadow-sm border border-gold/10">
              <item.icon className="w-8 h-8 text-gold-dark group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default DiferenciaisSection;
