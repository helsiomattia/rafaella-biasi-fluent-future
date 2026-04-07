import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaFinalSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {/* Deep rich background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-primary to-[#0f172a] -z-20" />
        
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/20 blur-[120px] rounded-full -z-10 opacity-70" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -z-10 opacity-70" />
        
        {/* Inner glass border */}
        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none" />

        <div className="px-6 py-20 md:py-24 text-center relative z-10 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold-light text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-md border border-white/10">
            Dê o primeiro passo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Pronta para dominar <br className="hidden md:block" />
            <span className="text-gradient-gold">seu futuro?</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl px-4">
            Agende uma conversa gratuita. Quero entender seu momento, seus desafios com o inglês e mostrar exatamente como posso te ajudar a superá-los.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="group rounded-full text-base px-10 py-7 shadow-xl hover:shadow-2xl hover:shadow-gold/20"
            asChild
          >
            <Link to="/contato">
              Agendar minha conversa
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaFinalSection;
