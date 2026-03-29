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

const DiferenciaisSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-accent tracking-widest uppercase">Diferenciais</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Por que aprender comigo?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-6 h-6 text-gold-dark" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSection;
