import { motion } from "framer-motion";
import sobreHero from "@/assets/sobre-hero.jpg";

const SobreHero = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4">
            Sobre mim
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Ensinar inglês é transformar{" "}
            <span className="text-gradient-gold">possibilidades</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Sou Rafaella Biasi — professora de inglês, especialista em ensino personalizado 
            para adultos e apaixonada por ajudar pessoas a se comunicarem com confiança no mundo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={sobreHero}
              alt="Rafaella Biasi"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-gold-light/40 blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreHero;
