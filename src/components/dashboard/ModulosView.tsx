import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Lock, Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MODULES } from "@/data/constants";

const ModulosView = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    setTimeout(() => {
      setShowCertificate(true);
    }, 1000);
  };

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
          Catálogo de <span className="text-gradient-gold">Módulos</span>
        </h1>
        <p className="text-muted-foreground text-lg font-light">
          Acesse todas as aulas gravadas detalhadas da sua mentoria.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MODULES.map((mod, i) => (
          <motion.div 
            key={mod.id}
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col"
          >
             <div className={`aspect-video w-full flex items-center justify-center ${mod.status === 'locked' ? 'bg-secondary/50 grayscale' : 'bg-charcoal text-white'} relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gold/10 ${mod.status !== 'locked' ? 'group-hover:bg-gold/0' : ''} transition-colors`} />
                <Play className={`w-12 h-12 relative z-10 ${mod.status === 'locked' ? 'text-muted-foreground opacity-50' : 'text-gold-light fill-gold/20 opacity-80 group-hover:scale-110 transition-transform'}`} />
             </div>
             
             <div className="h-1 w-full bg-secondary">
                <div className={`h-full ${mod.status === 'completed'? 'bg-sage': 'bg-gold'}`} style={{ width: `${(mod.completed/mod.classes)*100}%` }} />
             </div>

             <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">Módulo {mod.id}</span>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 leading-tight">{mod.title.replace(`Módulo ${mod.id}: `, '')}</h3>
                <p className="text-sm text-muted-foreground font-light mb-6 flex-1">{mod.desc}</p>
                
                <Button 
                  variant={mod.status === "in-progress" ? "hero" : "outline"} 
                  className="w-full rounded-xl"
                  disabled={mod.status === "locked"}
                >
                  {mod.status === "locked" ? "Bloqueado" : "Assistir Aulas"}
                </Button>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Golden Certificate Locked Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="mt-12 bg-gradient-to-r from-charcoal to-[#1a2235] rounded-3xl p-8 border border-gold/20 shadow-xl text-center relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
          <motion.div 
            animate={unlocked ? { scale: [1, 1.2, 0], rotate: [0, 10, -10, 0] } : {}} 
            transition={{ duration: 0.8 }}
            className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_30px_rgba(200,150,50,0.3)]"
          >
            {unlocked ? <Award className="w-10 h-10" /> : <Lock className="w-8 h-8" />}
          </motion.div>
          
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Certificado de Conclusão</h3>
            <p className="text-white/70 max-w-md mx-auto">Complete 100% dos módulos para destravar a sua certificação oficial de fluência assinada por Rafaella Biasi.</p>
          </div>
          
          {!unlocked && (
            <Button onClick={handleUnlock} variant="hero" className="rounded-full px-8 py-6">
              Simular Conclusão (100%)
            </Button>
          )}
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 lg:p-12"
            onClick={() => setShowCertificate(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, rotateY: 90 }} animate={{ scale: 1, rotateY: 0 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="w-full max-w-4xl aspect-[1.414/1] bg-card rounded-xl shadow-[0_0_100px_rgba(200,150,50,0.3)] p-2 relative mx-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full h-full border-[8px] border-double border-gold/40 p-6 md:p-12 flex flex-col items-center justify-center text-center relative bg-cream dark:bg-card">
                 <button onClick={() => setShowCertificate(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-gold hover:text-white transition-colors">
                    <X className="w-4 h-4" />
                 </button>

                 <div className="absolute top-6 left-6 right-6 justify-between items-center opacity-30 pointer-events-none hidden md:flex">
                    <span className="text-4xl text-gold shrink-0">❖</span>
                    <span className="text-4xl text-gold shrink-0">❖</span>
                 </div>
                 
                 <h4 className="text-gold-dark font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">Certificate of Excellence</h4>
                 <h1 className="font-display text-4xl md:text-6xl text-foreground mb-8">Fluent Future</h1>
                 
                 <p className="text-muted-foreground italic mb-2 md:mb-4 text-sm md:text-base">This certifies that</p>
                 <h2 className="font-display text-3xl md:text-5xl text-charcoal border-b px-6 md:px-12 pb-2 mb-4 md:mb-8 inline-block font-bold">Aluno Fluente</h2>
                 <p className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto mb-8 md:mb-16 leading-relaxed">
                   has successfully completed the comprehensive Mentorship program, demonstrating outstanding proficiency and confidence in Business English.
                 </p>
                 
                 <div className="flex justify-between items-end w-full max-w-2xl mt-auto border-t border-border pt-6 md:pt-8">
                    <div className="text-center w-32">
                       <p className="font-display text-xl pb-1 font-bold text-charcoal border-b border-muted-foreground/30 mb-2">Rafaella Biasi</p>
                       <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Lead Mentor</p>
                    </div>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold border-dashed shadow-inner shrink-0 relative -bottom-4 md:-bottom-6 bg-card">
                       <Award className="w-8 h-8 md:w-10 md:h-10 text-gold-dark" />
                    </div>
                    <div className="text-center w-32">
                       <p className="font-display text-xl pb-1 font-bold text-charcoal border-b border-muted-foreground/30 mb-2">{new Date().getFullYear()}</p>
                       <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Date</p>
                    </div>
                 </div>

                 <div className="absolute bottom-6 left-6 right-6 justify-between items-center opacity-30 pointer-events-none hidden md:flex">
                    <span className="text-4xl text-gold shrink-0">❖</span>
                    <span className="text-4xl text-gold shrink-0">❖</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModulosView;
