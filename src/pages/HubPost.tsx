import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, Clock, Calendar, Download, PlayCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import CtaFinalSection from "@/components/home/CtaFinalSection";
import HubContentCard from "@/components/hub/HubContentCard";
import { MOCK_HUB_CONTENT } from "@/data/hub-content";

const HubPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = MOCK_HUB_CONTENT.find(p => p.slug === slug);
  const relatedPosts = MOCK_HUB_CONTENT.filter(p => p.id !== post?.id).slice(0, 3);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-display font-bold mb-4">Conteúdo não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo ou material que você procura não existe ou foi removido.</p>
          <button 
            onClick={() => navigate('/hub')}
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
          >
            Voltar para o Hub
          </button>
        </div>
      </Layout>
    );
  }

  const isMaterial = post.type === "material";
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Layout>
      <article className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Breadcrumbs / Back button */}
          <Link 
            to="/hub" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar para todos os conteúdos
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              {post.readingTime && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                  <Clock className="w-4 h-4" />
                  {post.readingTime}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex items-center gap-4 py-6 border-y border-border">
              <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                {/* Fallback avatar */}
                <div className="w-full h-full flex items-center justify-center bg-accent/20 text-accent font-bold text-lg">
                  {post.author ? post.author.charAt(0) : 'R'}
                </div>
              </div>
              <div>
                <div className="font-semibold text-foreground">{post.author || 'Equipe Fluent'}</div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {formattedDate}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-premium border border-border/50">
               <img 
                 src={post.imageUrl} 
                 alt={post.title} 
                 className="w-full h-full object-cover"
               />
               {post.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                       <PlayCircle className="w-10 h-10 text-accent ml-1" />
                    </button>
                  </div>
               )}
            </div>
          )}

          {/* Content Body */}
          {post.content && (
            <div 
              className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-accent prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* Material Download Callout */}
          {isMaterial && post.fileUrl && (
            <div className="mt-8 p-8 rounded-3xl bg-secondary/50 border border-primary/10 text-center">
               <h3 className="text-2xl font-display font-bold mb-4">Pronto para aprofundar?</h3>
               <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                 Faça o download do material completo em PDF e tenha acesso a exercícios e resoluções para estudar quando quiser.
               </p>
               <a 
                 href={post.fileUrl} 
                 onClick={(e) => { e.preventDefault(); alert("Mock: Arquivo baixado com sucesso!"); }}
                 className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
               >
                 <Download className="w-5 h-5" />
                 Baixar Material Gratuito
               </a>
            </div>
          )}

        </div>
      </article>

      {/* Related Content */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">Continue Aprendendo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <HubContentCard 
                key={relatedPost.id} 
                content={relatedPost} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      <CtaFinalSection />
    </Layout>
  );
};

export default HubPost;
