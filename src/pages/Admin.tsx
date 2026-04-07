import { Users, DollarSign, TrendingUp, PlusCircle, LayoutDashboard, Video, FileText } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import type { KPIData } from "@/types";


const KPI = ({ title, value, sub, icon: Icon, trend }: KPIData) => (
  <div className="bg-card rounded-3xl p-6 border border-border shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">{title}</p>
      <h3 className="font-display text-4xl font-bold text-foreground mb-1">{value}</h3>
      <p className={`text-sm font-semibold flex items-center gap-1 ${trend === "up" ? "text-sage" : "text-gold-dark"}`}>
         <TrendingUp className="w-4 h-4" /> {sub}
      </p>
    </div>
    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground">
      <Icon className="w-6 h-6" />
    </div>
  </div>
);

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-12 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
           <div>
             <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
               Visão do <span className="text-gradient-gold">Professor</span>
             </h1>
             <p className="text-muted-foreground text-lg">Gerencie seus alunos matriculados e a saúde do seu negócio.</p>
           </div>
           
           <Button variant="hero" className="rounded-xl px-6 h-12 shadow-premium">
             <PlusCircle className="mr-2 w-5 h-5" /> Nova Aula Gravada
           </Button>
        </div>

        {/* KPIs */}
        <div className="grid md:grid-cols-3 gap-6">
           <KPI title="Receita Mensal" value="R$ 14.500" sub="+12% que mês passado" icon={DollarSign} trend="up" />
           <KPI title="Alunos Ativos" value="128" sub="+5 novos essa semana" icon={Users} trend="up" />
           <KPI title="Engajamento" value="76%" sub="Taxa média conclusão" icon={LayoutDashboard} trend="neutral" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           
           {/* Tabela de Alunos Recentes */}
           <div className="lg:col-span-2 bg-white rounded-3xl border border-border shadow-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl font-bold">Últimas Matrículas</h3>
                <Button variant="outline" size="sm" className="rounded-lg">Ver Todos</Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-secondary">
                      <th className="pb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Aluno</th>
                      <th className="pb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Plano</th>
                      <th className="pb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Ingresso</th>
                      <th className="pb-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    <tr className="border-b border-border/40 hover:bg-secondary/30 transition-colors">
                       <td className="py-4 flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center font-bold text-xs">M</div>
                          Matheus Silva
                       </td>
                       <td className="py-4">Mentoria Elite</td>
                       <td className="py-4 text-muted-foreground">Hoje</td>
                       <td className="py-4"><span className="bg-sage/10 text-sage px-2 py-1 rounded-md text-xs font-bold">Ativo</span></td>
                    </tr>
                    <tr className="border-b border-border/40 hover:bg-secondary/30 transition-colors">
                       <td className="py-4 flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-xs">C</div>
                          Carla Fernandes
                       </td>
                       <td className="py-4">Fluency Starter</td>
                       <td className="py-4 text-muted-foreground">Ontem</td>
                       <td className="py-4"><span className="bg-sage/10 text-sage px-2 py-1 rounded-md text-xs font-bold">Ativo</span></td>
                    </tr>
                    <tr className="hover:bg-secondary/30 transition-colors">
                       <td className="py-4 flex gap-3 items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">J</div>
                          João Paulo
                       </td>
                       <td className="py-4">Mensal</td>
                       <td className="py-4 text-muted-foreground">Há 3 dias</td>
                       <td className="py-4"><span className="bg-red-500/10 text-red-500 px-2 py-1 rounded-md text-xs font-bold">Atrasado</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>

           {/* Acesso Rapido Guias */}
           <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1A1A24] to-[#252535] p-8 rounded-3xl shadow-xl text-white">
                 <h3 className="font-display text-xl font-bold mb-4">Avisos do Sistema</h3>
                 <p className="text-white/70 text-sm mb-6 pb-6 border-b border-white/10">3 novos alunos solicitaram correção do material de pronúncia (Módulo 2).</p>
                 <Button variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white hover:text-charcoal rounded-xl">Revisar Agora</Button>
              </div>

              <div className="bg-white rounded-3xl border border-border p-6 shadow-sm">
                 <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-widest mb-4">Ações Estratégicas</h4>
                 <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-secondary transition-colors text-left border border-transparent hover:border-border">
                       <div className="p-2 bg-gold/10 text-gold-dark rounded-xl"><Video className="w-5 h-5"/></div>
                       <span className="font-semibold text-foreground">Abrir Aula Ao Vivo no Zoom</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 rounded-2xl hover:bg-secondary transition-colors text-left border border-transparent hover:border-border">
                       <div className="p-2 bg-charcoal/5 text-charcoal rounded-xl"><FileText className="w-5 h-5"/></div>
                       <span className="font-semibold text-foreground">Publicar Material em PDF</span>
                    </button>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
