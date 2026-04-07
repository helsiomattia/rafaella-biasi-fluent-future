import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_ITEMS } from "@/data/constants";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          Rafaella <span className="text-gradient-gold">Biasi</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-3 ml-4 border-l border-border/50 pl-6">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild className="hidden lg:flex text-muted-foreground hover:text-foreground">
              <Link to="/login">
                <UserCircle className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contato">Agendar conversa</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild className="h-9 w-9 text-muted-foreground">
            <Link to="/login">
              <UserCircle className="w-5 h-5" />
            </Link>
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/50">
                <Button variant="outline" asChild className="justify-start">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <UserCircle className="w-4 h-4 mr-2" />
                    Acessar Área do Aluno
                  </Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/contato" onClick={() => setIsOpen(false)}>Agendar conversa</Link>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
