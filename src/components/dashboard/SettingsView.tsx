import { motion } from "framer-motion";
import { User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsView = () => (
  <div className="p-6 lg:p-12 max-w-4xl mx-auto space-y-12 mb-12">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
        Configurações do <span className="text-gradient-gold">Perfil</span>
      </h1>
      <p className="text-muted-foreground text-lg font-light">
        Gerencie suas informações pessoais e notificações.
      </p>
    </motion.div>

    <div className="bg-card rounded-3xl border border-border shadow-premium overflow-hidden">
      <div className="p-8 border-b border-secondary flex flex-col sm:flex-row items-start sm:items-center gap-6">
         <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center shrink-0">
            <span className="font-display text-3xl font-bold text-gold-dark">AF</span>
         </div>
         <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-1">Aluno Fluente</h3>
            <p className="text-muted-foreground mb-4">aluno@fluency.com</p>
            <Button variant="outline" size="sm" className="rounded-xl">Alterar foto do perfil</Button>
         </div>
      </div>

      <div className="p-8 space-y-10">
         <div className="space-y-6">
            <h4 className="font-bold text-foreground inline-flex items-center gap-2"><User className="w-5 h-5 text-gold"/> Dados Pessoais</h4>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Nome Completo</label>
                 <input type="text" defaultValue="Aluno Fluente" className="w-full h-14 rounded-2xl border border-input bg-transparent px-4 text-base focus-visible:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Whatsapp</label>
                 <input type="text" defaultValue="(11) 99999-9999" className="w-full h-14 rounded-2xl border border-input bg-transparent px-4 text-base focus-visible:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all" />
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <h4 className="font-bold text-foreground inline-flex items-center gap-2"><Bell className="w-5 h-5 text-gold"/> Notificações</h4>
            <div className="flex items-center justify-between p-6 bg-secondary/30 rounded-2xl border border-secondary shadow-sm">
               <div>
                 <p className="font-semibold text-foreground mb-1">Avisos de Novas Aulas</p>
                 <p className="text-sm text-muted-foreground">Receba um email imediatamente quando a Rafaella postar material novo.</p>
               </div>
               <div className="w-12 h-6 bg-gold rounded-full relative cursor-pointer shadow-inner shrink-0">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white dark:bg-slate-100 rounded-full shadow-sm" />
               </div>
            </div>
         </div>

         <div className="pt-6 border-t border-border flex justify-end">
            <Button variant="hero" className="rounded-2xl px-8 h-12">Salvar Alterações</Button>
         </div>
      </div>
    </div>
  </div>
);

export default SettingsView;
