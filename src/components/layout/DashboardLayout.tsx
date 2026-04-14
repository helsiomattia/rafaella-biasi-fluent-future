import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FluentAIChat } from "@/components/dashboard/FluentAIChat";
import { DASHBOARD_LINKS } from "@/data/constants";



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="h-screen overflow-hidden bg-background flex font-body">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-card text-foreground border-r border-border shadow-sm z-20">
        <div className="p-8 border-b border-secondary">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight">
            Fluent <span className="text-gradient-gold">Future</span>
          </Link>
          <div className="mt-6 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark font-bold border border-gold/20">
               AF
             </div>
             <div>
               <p className="text-sm font-semibold text-foreground">Aluno Fluente</p>
               <p className="text-xs text-muted-foreground font-medium">Plano Premium</p>
             </div>
          </div>
        </div>
        
        <nav className="flex-1 p-6 space-y-2">
          {DASHBOARD_LINKS.map((link) => {
            const isActive = link.path.startsWith('#') 
              ? location.hash === link.path 
              : location.pathname === link.path && (!location.hash || location.hash === '');
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive 
                    ? "bg-gold/10 text-gold-dark border border-gold/20 shadow-sm" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-gold-dark" : "text-muted-foreground/70"}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-secondary flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </Link>
          <ThemeToggle />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden h-20 bg-background border-b border-border px-6 flex items-center justify-between shadow-sm z-20">
          <Link to="/" className="font-display text-xl font-bold text-foreground">
            Fluent <span className="text-gradient-gold">Future</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setSidebarOpen(true)} className="p-2 text-muted-foreground hover:bg-secondary rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
              />
              <motion.aside
                initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed inset-y-0 left-0 w-72 bg-card text-foreground z-50 flex flex-col shadow-2xl lg:hidden font-body"
              >
                <div className="p-6 border-b border-secondary flex items-center justify-between">
                  <Link to="/" className="font-display text-xl font-bold">
                    Fluent <span className="text-gradient-gold">Future</span>
                  </Link>
                  <button onClick={() => setSidebarOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex-1 p-6 space-y-2">
                  {DASHBOARD_LINKS.map((link) => {
                    const isActive = link.path.startsWith('#') 
                      ? location.hash === link.path 
                      : location.pathname === link.path && (!location.hash || location.hash === '');
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.label}
                        to={link.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
                          isActive ? "bg-gold/10 text-gold-dark border border-gold/20" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? "text-gold-dark" : "text-muted-foreground/70"}`} />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </nav>
                <div className="p-6 border-t border-secondary">
                  <Link to="/" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-red-500 font-medium">
                    <LogOut className="w-5 h-5" />
                    <span>Sair</span>
                  </Link>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Dashboard Pages Content via Children */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto relative">
          {children}
          <FluentAIChat />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
