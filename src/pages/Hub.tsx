import { motion } from "framer-motion";
import { PlayCircle, Youtube, Instagram } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CtaFinalSection from "@/components/home/CtaFinalSection";
import TesteNivelSection from "@/components/hub/TesteNivelSection";
import { MOCK_VIDEOS } from "@/data/constants";


const Hub = () => {
  return (
    <Layout>
      {/* Hero Interativo */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-6 bg-gold-dark" />
            <span className="text-xs font-bold text-gold-dark tracking-[0.2em] uppercase">Material Gratuito</span>
            <span className="h-px w-6 bg-gold-dark" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Fluent <span className="text-gradient-gold">Hub</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl font-light text-muted-foreground leading-relaxed mb-12"
          >
            Sua biblioteca central de aprendizado. Consuma dicas rápidas, cortes de explicações fundamentais e aulas gratuitas antes de entrar na mentoria.
          </motion.p>
        </div>
      </section>

      {/* Teste de Nível Gamificado */}
      <TesteNivelSection />

      {/* Grade de Vídeos (Estilo Vault / Netflix) */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">Aulas e Cortes Recentes</h2>
            <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Youtube className="w-4 h-4 text-red-500" /> YouTube</span>
              <span className="flex items-center gap-2"><Instagram className="w-4 h-4 text-pink-500" /> Instagram</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_VIDEOS.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video rounded-2xl bg-charcoal/5 border border-primary/5 overflow-hidden mb-4 hover:shadow-premium transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur-md text-white text-xs font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute top-3 left-3">
                    {video.platform === "youtube" ? (
                       <Youtube className="w-5 h-5 text-white drop-shadow-md" />
                    ) : (
                       <Instagram className="w-5 h-5 text-white drop-shadow-md" />
                    )}
                  </div>
                </div>

                {/* Video Info */}
                <div>
                  <span className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2 block">
                    {video.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaFinalSection />
    </Layout>
  );
};

export default Hub;
