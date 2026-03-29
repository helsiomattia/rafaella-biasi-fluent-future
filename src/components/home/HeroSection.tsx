import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium text-accent tracking-widest uppercase mb-4">
            Aulas de Inglês Personalizadas
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Fale inglês com{" "}
            <span className="text-gradient-gold">confiança</span> e naturalidade
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Ensino personalizado que respeita seu ritmo, seus objetivos e sua rotina. 
            Desenvolvido para adultos que querem resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contato">Agendar conversa gratuita</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/metodologia">Conheça o método</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Rafaella Biasi - Professora de Inglês"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gold-light/40 blur-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
