import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { MATERIAL_FILES } from "@/data/constants";

const MateriaisView = () => (
  <div className="p-6 lg:p-12 max-w-6xl mx-auto space-y-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
        Biblioteca de <span className="text-gradient-gold">Materiais</span>
      </h1>
      <p className="text-muted-foreground text-lg font-light">
        Apostilas, resumos e exercícios em PDF selecionados pela Rafaella.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-6">
      {MATERIAL_FILES.map((file, i) => (
         <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}
           className="bg-card p-5 rounded-2xl border border-secondary flex items-center justify-between hover:border-gold/30 hover:shadow-premium transition-all group"
         >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold-dark shrink-0 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">{file.title}</h4>
                <p className="text-xs font-semibold text-muted-foreground mt-1">{file.type} • {file.size}</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold-dark transition-colors shrink-0">
              <Download className="w-5 h-5" />
            </button>
         </motion.div>
      ))}
    </div>
  </div>
);

export default MateriaisView;
