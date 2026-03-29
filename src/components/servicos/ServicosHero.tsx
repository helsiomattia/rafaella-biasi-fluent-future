import { motion } from "framer-motion";

const ServicosHero = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4">
          Serviços
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          O inglês certo para o{" "}
          <span className="text-gradient-gold">seu momento</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Cada aluno tem uma história, um objetivo e um ritmo. Por isso, ofereço modalidades 
          de ensino pensadas para diferentes necessidades — todas com a mesma base: 
          personalização, prática real e acompanhamento próximo.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ServicosHero;
