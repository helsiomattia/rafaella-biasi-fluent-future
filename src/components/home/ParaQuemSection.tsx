import { motion } from "framer-motion";
import { Briefcase, Plane, Users, BookOpen, TrendingUp, CheckCircle2 } from "lucide-react";

const audiences = [
  { icon: Users, label: "Adultos que querem começar do zero" },
  { icon: BookOpen, label: "Quem já estudou mas não consegue conversar" },
  { icon: Plane, label: "Quem quer viajar com segurança no idioma" },
  { icon: Briefcase, label: "Profissionais que precisam de inglês no trabalho" },
  { icon: TrendingUp, label: "Quem quer crescer na carreira com o idioma" },
];

const ParaQuemSection = () => (
  <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70 }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-6 bg-gold" />
            <span className="text-xs font-bold text-gold tracking-widest uppercase">Para quem é</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 tracking-tight leading-[1.1]">
            Minhas aulas <br className="hidden md:block" />são para <span className="text-gradient-gold">você que...</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-md">
            Não importa o seu nível atual. O que importa é a vontade de evoluir. 
            A metodologia se adapta perfeitamente ao seu momento e objetivo.
          </p>
          
          <div className="hidden md:block h-32 w-full border-l border-gold/20 ml-4 relative">
            <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-gold/50" />
            <div className="absolute bottom-0 -left-[5px] w-2 h-2 rounded-full bg-gold/50" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-4"
        >
          {audiences.map((item, i) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, x: 30 },
                show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80 } }
              }}
              whileHover={{ x: 8, scale: 1.01 }}
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white hover:border-gold/30 hover:shadow-premium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-light/20 flex items-center justify-center shrink-0 group-hover:bg-gold-light/40 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gold-dark group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-foreground font-medium text-lg leading-snug">{item.label}</span>
              <CheckCircle2 className="w-5 h-5 text-gold/30 ml-auto group-hover:text-gold transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ParaQuemSection;
