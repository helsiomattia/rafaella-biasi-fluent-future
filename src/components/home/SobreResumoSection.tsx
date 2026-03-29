import { motion } from "framer-motion";
import { GraduationCap, Globe, Heart } from "lucide-react";

const SobreResumoSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">Quem sou</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Prazer, sou a Rafaella
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            Formada em Letras e pós-graduada em Teaching English as a Second Language, 
            trago experiência internacional — incluindo vivência no Egito — para aulas que 
            vão muito além da gramática. Meu foco é fazer você se comunicar com confiança 
            e naturalidade, no seu ritmo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-8"
        >
          {[
            { icon: GraduationCap, label: "Formação em Letras", sub: "Pós em TESOL" },
            { icon: Globe, label: "Vivência no Egito", sub: "Experiência internacional" },
            { icon: Heart, label: "Ensino com propósito", sub: "Foco no aluno" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold-dark" />
              </div>
              <h4 className="font-display font-semibold text-foreground">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreResumoSection;
