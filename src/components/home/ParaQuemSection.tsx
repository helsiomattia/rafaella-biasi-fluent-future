import { motion } from "framer-motion";
import { Briefcase, Plane, Users, BookOpen, TrendingUp } from "lucide-react";

const audiences = [
  { icon: Users, label: "Adultos que querem começar do zero" },
  { icon: BookOpen, label: "Quem já estudou mas não consegue conversar" },
  { icon: Plane, label: "Quem quer viajar com segurança no idioma" },
  { icon: Briefcase, label: "Profissionais que precisam de inglês no trabalho" },
  { icon: TrendingUp, label: "Quem quer crescer na carreira com o idioma" },
];

const ParaQuemSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">Para quem é</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Minhas aulas são para você que...
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Não importa o seu nível atual. O que importa é a vontade de evoluir. 
            Eu adapto tudo ao seu momento e objetivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-gold-light/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ParaQuemSection;
