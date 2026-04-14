import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Youtube, Instagram, PlayCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CtaFinalSection from "@/components/home/CtaFinalSection";
import TesteNivelSection from "@/components/hub/TesteNivelSection";
import HubSearchFilters from "@/components/hub/HubSearchFilters";
import HubContentCard from "@/components/hub/HubContentCard";
import { MOCK_HUB_CONTENT, HubCategory } from "@/data/hub-content";
import { MOCK_VIDEOS } from "@/data/constants";

const Hub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<HubCategory | "All">("All");


  // Filter regular items based on search and selected category
  const filteredContent = useMemo(() => {
    return MOCK_HUB_CONTENT.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeFilter === "All" || item.category === activeFilter;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeFilter]);

  return (
    <Layout>
      {/* Hero Interativo */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-secondary/50 border border-primary/10"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-foreground tracking-wide">
              Aprenda, Pratique, Evolua
            </span>
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
            Sua biblioteca central de conhecimento. Artigos, materiais em PDF, dicas de pronúncia e exercícios práticos em um só lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <HubSearchFilters 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </motion.div>
        </div>
      </section>


      {/* Main Content Grid */}
      <section className="py-20 bg-background min-h-[500px]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">
              {searchTerm ? "Resultados da Busca" : "Explore o Conteúdo"}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredContent.length} {filteredContent.length === 1 ? "resultado" : "resultados"}
            </span>
          </div>

          {filteredContent.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((content, index) => (
                <HubContentCard key={content.id} content={content} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">Nenhum conteúdo encontrado</h3>
              <p className="text-muted-foreground max-w-md">
                Não conseguimos encontrar nada para "{searchTerm}" em {activeFilter}. 
                Tente usar palavras-chave diferentes ou limpar os filtros.
              </p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveFilter("All"); }}
                className="mt-6 px-6 py-2 rounded-full border border-border text-foreground hover:bg-secondary transition-colors font-medium"
              >
                Limpar Busca
              </button>
            </div>
          )}
        </div>
      </section>

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
                <div className="relative aspect-video rounded-2xl bg-secondary border border-border/50 overflow-hidden mb-4 hover:shadow-premium transition-all">
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
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
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

      {/* Teste de Nível Integrado no Flow */}
      <div className="border-t border-border bg-secondary/10">
         <TesteNivelSection />
      </div>

      <CtaFinalSection />
    </Layout>
  );
};

export default Hub;
