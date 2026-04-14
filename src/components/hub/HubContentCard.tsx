import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, FileText, PlayCircle, BookOpen, ArrowRight } from "lucide-react";
import { HubContent } from "@/data/hub-content";

interface HubContentCardProps {
  content: HubContent;
  index: number;
}

const HubContentCard = ({ content, index }: HubContentCardProps) => {
  const isVideo = content.type === "video";
  const isMaterial = content.type === "material";
  
  const TypeIcon = isVideo ? PlayCircle : isMaterial ? FileText : BookOpen;
  const typeLabel = isVideo ? "Vídeo" : isMaterial ? "Material" : "Artigo";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/hub/${content.slug}`} className="block h-full">
        <div className="h-full flex flex-col bg-background border border-border/50 rounded-2xl overflow-hidden hover:shadow-premium hover:border-accent/30 transition-all duration-300">
          
          {/* Image Thumbnail */}
          <div className="relative aspect-[16/9] bg-secondary/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-80" />
            
            {content.imageUrl ? (
              <img 
                src={content.imageUrl} 
                alt={content.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                <TypeIcon className="w-16 h-16" />
              </div>
            )}

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-semibold rounded bg-white/20 text-white backdrop-blur-md uppercase tracking-wider">
                {content.category}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 text-white/90 text-sm">
              <div className="flex items-center gap-1.5 font-medium">
                <TypeIcon className="w-4 h-4" />
                {typeLabel}
              </div>
              {content.readingTime && (
                <div className="flex items-center gap-1.5 font-medium border-l border-white/30 pl-3">
                  <Clock className="w-4 h-4" />
                  {content.readingTime}
                </div>
              )}
            </div>
            
            {/* Play Button Overlay for Videos */}
            {isVideo && (
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/90 shadow-lg flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <PlayCircle className="w-7 h-7 text-foreground ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
              {content.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
              {content.description}
            </p>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {content.author || 'Equipe Fluent'}
              </span>
              
              <span className="flex items-center gap-1 text-accent text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Acessar <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export default HubContentCard;
