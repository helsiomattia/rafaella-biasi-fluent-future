import { motion } from "framer-motion";
import { Sparkles, Heart, Target, Zap, ShieldCheck } from "lucide-react";

const items = [
  { icon: Heart, label: "Acolhimento genuíno — sem julgamento, com paciência" },
  { icon: Target, label: "Foco em resultados reais e aplicáveis" },
  { icon: Sparkles, label: "Aulas que se adaptam à sua vida, não o contrário" },
  { icon: Zap, label: "Metodologia dinâmica e envolvente" },
  { icon: ShieldCheck, label: "Experiência comprovada com diferentes perfis de alunos" },
];

const DiferenciaisSobreSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">Diferenciais</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            O que me torna diferente
          </h2>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-secondary"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <span className="text-foreground font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DiferenciaisSobreSection;
