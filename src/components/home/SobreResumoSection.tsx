import { motion } from "framer-motion";
import { GraduationCap, Globe, Heart } from "lucide-react";

const SobreResumoSection = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    {/* Decorative background circle */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary rounded-full -z-10 blur-3xl opacity-50" />

    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold text-gold tracking-widest uppercase">Quem sou</span>
            <span className="h-px w-6 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-8 tracking-tight">
            Prazer, sou a Rafaella
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed text-lg md:text-xl mb-12 max-w-3xl mx-auto">
            Formada em Letras e pós-graduada em <span className="text-foreground font-medium">Teaching English as a Second Language</span>, 
            trago experiência internacional — incluindo vivência direta no Egito — para criar aulas que 
            vão <span className="italic">muito além da gramática</span>. Meu foco absoluto é fazer você se comunicar com 
            confiança, clareza e naturalidade, respeitando o seu ritmo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid sm:grid-cols-3 gap-6 lg:gap-10"
        >
          {[
            { icon: GraduationCap, label: "Formação em Letras", sub: "Pós em TESOL" },
            { icon: Globe, label: "Vivência no Egito", sub: "Experiência internacional" },
            { icon: Heart, label: "Ensino com propósito", sub: "Foco 100% no aluno" },
          ].map((item) => (
            <motion.div 
              key={item.label} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
              }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold-light/20 flex items-center justify-center shadow-inner">
                <item.icon className="w-8 h-8 text-gold-dark" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">{item.label}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreResumoSection;
