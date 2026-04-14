import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PlayCircle, FileText, Download, Clock, Youtube, Instagram } from "lucide-react";
import { HubContent } from "@/types";

interface HubCardProps {
  item: HubContent;
  index: number;
}

const HubCard = ({ item, index }: HubCardProps) => {
  const isVideo = item.type === "video";
  const isMaterial = item.type === "material";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col h-full bg-card rounded-2xl border border-primary/5 hover:border-gold/30 hover:shadow-premium transition-all overflow-hidden"
    >
      <Link to={`/hub/${item.slug}`} className="flex-1 flex flex-col">
        {/* Thumbnail Area */}
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Overlay Icon for Video */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <PlayCircle className="w-6 h-6 text-foreground ml-1" />
              </div>
            </div>
          )}
          
          {/* Top Left Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isVideo && item.platform === "youtube" && (
              <div className="p-1.5 rounded-md bg-black/50 backdrop-blur-sm">
                <Youtube className="w-4 h-4 text-white drop-shadow-md" />
              </div>
            )}
            {isVideo && item.platform === "instagram" && (
              <div className="p-1.5 rounded-md bg-black/50 backdrop-blur-sm">
                <Instagram className="w-4 h-4 text-white drop-shadow-md" />
              </div>
            )}
            <span className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
              {item.category}
            </span>
          </div>

          {/* Bottom Right Info */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded bg-black/70 backdrop-blur-md text-white text-xs font-medium">
            {isVideo ? (
              <>
                <PlayCircle className="w-3.5 h-3.5" />
                {item.duration}
              </>
            ) : isMaterial ? (
              <>
                <Download className="w-3.5 h-3.5" />
                {item.fileSize}
              </>
            ) : (
              <>
                <Clock className="w-3.5 h-3.5" />
                {item.readingTime}
              </>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2 md:leading-snug mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
            <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {item.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-gold transition-colors">
              {isMaterial ? "Baixar" : isVideo ? "Assistir" : "Ler artigo"}
              {isMaterial ? <Download className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default HubCard;
