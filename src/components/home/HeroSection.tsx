import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 } 
  }
};

const HeroSection = () => (
  <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 bg-background">
    {/* Abstract Ambient Background */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-light/20 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sage-light/40 blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-gold-dark" />
            <span className="inline-block text-xs md:text-sm font-semibold text-gold-dark tracking-[0.2em] uppercase">
              Aulas de Inglês Personalizadas
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Fale inglês com <br className="hidden lg:block" />
              <span className="text-gradient-gold inline-block pb-2">absoluta confiança</span>
            </h1>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg font-light">
            Ensino particular que respeita sua trajetória, seus objetivos e sua rotina. 
            Uma metodologia imersiva desenvolvida para adultos que buscam excelência.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Button variant="hero" size="lg" className="group rounded-full px-8 py-6 text-base" asChild>
              <Link to="/contato">
                Agendar conversa
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full px-8 hover:bg-gold/10 hover:text-gold-dark text-base" asChild>
              <Link to="/metodologia">Conheça o método</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="relative lg:pl-10"
        >
          {/* Decorative frames behind image */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-gold/20 bg-transparent lg:translate-x-8 lg:translate-y-8" />
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-secondary/60 lg:translate-x-4 lg:translate-y-4" />
          
          <div className="relative rounded-3xl overflow-hidden shadow-premium bg-white p-2">
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img
                src={heroImage}
                alt="Rafaella Biasi - Professora de Inglês"
                width={1024}
                height={1024}
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-square lg:aspect-[4/5] hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
          
          {/* Little floating element 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-6 -left-6 lg:left-0 bg-background/90 backdrop-blur-md p-4 rounded-2xl shadow-glass border border-border flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Aulas Online</p>
              <p className="text-xs text-muted-foreground">Para todo o mundo</p>
            </div>
          </motion.div>

          {/* Apple-style Floating Teaser Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { delay: 1.2, duration: 0.8 },
              scale: { delay: 1.2, duration: 0.8 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }
            }}
            className="absolute -right-4 top-1/4 lg:-right-12 z-30 w-48 md:w-56 lg:w-64 aspect-video bg-charcoal rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(200,150,50,0.5)] border border-gold/30 group cursor-pointer backdrop-blur-md"
          >
             <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
             <div className="w-full h-full bg-charcoal overflow-hidden opacity-60">
                <img src={heroImage} alt="Video Preview Thumbnail" className="w-full h-full object-cover scale-150 grayscale blur-[1px]" />
             </div>
             
             <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold transition-all duration-300">
                   <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,1)]" />
                   <span className="text-[10px] font-bold tracking-widest text-white uppercase drop-shadow-md">Preview Demo</span>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
