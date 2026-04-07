import { motion } from "framer-motion";
import { CheckCircle2, Play, Circle, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MODULES } from "@/data/constants";

const OverviewView = () => (
  <div className="p-6 lg:p-12 max-w-6xl mx-auto space-y-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
        Welcome back, <span className="text-gold-dark">Aluno</span>! 👋
      </h1>
      <p className="text-muted-foreground text-lg font-light">
          Continue aprendendo de onde parou. O sucesso vem da constância.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6">
      <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card p-6 rounded-3xl shadow-premium border border-primary/5 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-sage-light/20 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-sage" />
          </div>
          <span className="text-xs font-bold text-sage bg-sage-light/20 px-3 py-1 rounded-full">Bom ritmo</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Status da Mentoria</p>
          <h3 className="text-3xl font-display font-bold text-foreground">35%</h3>
          <div className="w-full h-2 bg-secondary rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-sage w-[35%] rounded-full" />
          </div>
        </div>
      </motion.div>

      <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 md:col-span-2 bg-gradient-to-br from-charcoal to-[#1a2235] p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden text-white"
      >
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-gold-light text-sm font-semibold mb-2">
              <Clock className="w-4 h-4" /> Próxima Aula ao Vivo
            </div>
            <h3 className="font-display text-2xl font-bold">Pronúncia Avançada e Entonação</h3>
            <p className="text-white/70 font-light">Quinta-feira, 19:30 (Horário de Brasília)</p>
          </div>
          <Button variant="hero" className="relative z-10 whitespace-nowrap px-8 py-6 rounded-full">
            Acessar Sala (Zoom)
          </Button>
      </motion.div>
    </div>

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl font-bold text-foreground">Trilha de Aprendizado</h2>
        <Link to="#modulos">
           <Button variant="ghost" className="text-gold-dark hover:text-gold-dark hover:bg-gold-light/10">Ver todos</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {MODULES.map((mod) => (
          <div 
            key={mod.id} 
            className={`bg-card rounded-2xl p-6 border transition-all duration-300 ${
              mod.status === "in-progress" ? "border-gold shadow-premium" : 
              mod.status === "completed" ? "border-sage/20 opacity-90" : 
              "border-border opacity-60 grayscale-[50%]"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-4 sm:gap-6 items-start flex-1 min-w-0">
                <div className="mt-1 shrink-0">
                  {mod.status === "completed" ? <CheckCircle2 className="w-6 h-6 text-sage" /> : 
                    mod.status === "in-progress" ? <Play className="w-6 h-6 text-gold fill-gold" /> : 
                    <Circle className="w-6 h-6 text-muted-foreground" />}
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-1 leading-tight">{mod.title}</h4>
                  <p className="text-sm text-muted-foreground font-light max-w-xl">{mod.desc}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="text-xs font-semibold px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                        {mod.completed}/{mod.classes} Aulas
                      </span>
                      {mod.status === "in-progress" && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-md bg-gold-light/20 text-gold-dark">
                          Módulo Atual
                        </span>
                      )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-border/50">
                {mod.status !== "locked" && (
                  <Button variant="outline" size="sm" className="w-full sm:w-32 rounded-xl py-5 sm:py-0">
                      <Download className="w-4 h-4 mr-2" /> Material
                  </Button>
                )}
                <Button 
                  variant={mod.status === "in-progress" ? "hero" : "secondary"} 
                  className={`w-full sm:w-32 rounded-xl py-5 sm:py-0 ${mod.status === "locked" ? "opacity-50" : ""}`}
                  disabled={mod.status === "locked"}
                >
                  {mod.status === "completed" ? "Revisar" : mod.status === "locked" ? "Bloqueado" : "Continuar"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default OverviewView;
