import { motion } from "framer-motion";
import { MapPin, Globe, Monitor } from "lucide-react";

const experiences = [
  {
    icon: MapPin,
    title: "Atuação no Brasil",
    description:
      "Anos de experiência com alunos brasileiros de diferentes perfis — desde iniciantes até profissionais que precisam do inglês no dia a dia corporativo.",
  },
  {
    icon: Globe,
    title: "Experiência Internacional",
    description:
      "Vivência no Egito ampliou minha visão sobre comunicação intercultural e trouxe uma perspectiva única sobre como o inglês conecta pessoas de diferentes origens.",
  },
  {
    icon: Monitor,
    title: "Ensino Online",
    description:
      "Atuo 100% online, o que me permite atender alunos de qualquer lugar do Brasil e do mundo, com flexibilidade e a mesma qualidade de uma aula presencial.",
  },
];

const ExperienciaSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-accent tracking-widest uppercase">Experiência</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Uma trajetória que enriquece cada aula
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-secondary rounded-xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-6">
              <exp.icon className="w-6 h-6 text-gold-dark" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">{exp.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienciaSection;
