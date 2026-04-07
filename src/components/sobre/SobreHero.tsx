import { motion } from "framer-motion";
import sobreHero from "@/assets/sobre-hero.jpg";

const SobreHero = () => (
  <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-background">
    {/* Abstract Ambient Background */}
    <div className="absolute top-[10%] right-[-5%] w-[30%] h-[40%] rounded-full bg-gold-light/20 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-dark" />
            <span className="inline-block text-xs md:text-sm font-semibold text-gold-dark tracking-[0.2em] uppercase">
              Sobre mim
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
            Ensinar inglês é transformar <br className="hidden lg:block" />
            <span className="text-gradient-gold inline-block pb-2">possibilidades</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
            Sou Rafaella Biasi — professora de inglês, especialista em ensino personalizado 
            para adultos e apaixonada por ajudar pessoas a se comunicarem com confiança no mundo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative lg:pl-10"
        >
          {/* Decorative frames behind image */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-gold/20 bg-transparent lg:translate-x-8 lg:translate-y-8" />
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-secondary/60 lg:translate-x-4 lg:translate-y-4" />

          <div className="relative rounded-3xl overflow-hidden shadow-premium bg-white p-2">
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src={sobreHero}
                alt="Rafaella Biasi"
                width={1280}
                height={720}
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-[3/4] hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreHero;
