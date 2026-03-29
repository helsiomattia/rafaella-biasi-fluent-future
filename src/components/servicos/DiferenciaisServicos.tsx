import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const diferenciais = [
  "Aulas 100% personalizadas — nada de material genérico",
  "Horários flexíveis que se encaixam na sua rotina",
  "Professora com certificação C2 e pós em ESL",
  "Experiência internacional real",
  "Foco em prática e comunicação desde a primeira aula",
  "Acompanhamento próximo e feedback constante",
];

const DiferenciaisServicos = () => (
  <section className="py-20 md:py-28 bg-secondary">
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
            Por que escolher minhas aulas?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-background"
            >
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DiferenciaisServicos;
