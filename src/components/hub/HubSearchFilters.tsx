import { Search, Filter, X } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { HubCategory } from "@/data/hub-content";

interface HubSearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: HubCategory | "All";
  setActiveFilter: (filter: HubCategory | "All") => void;
}

const CATEGORIES: (HubCategory | "All")[] = [
  "All",
  "Gramática",
  "Conversação",
  "Pronúncia",
  "Inglês para Negócios",
  "Dicas de Estudo",
  "Vocabulário",
  "Materiais Gratuitos",
];

const HubSearchFilters = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
}: HubSearchFiltersProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
        </div>
        <Input
          type="text"
          placeholder="Busque por artigos, regras gramaticais ou dicas de pronúncia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 py-6 text-base md:text-lg bg-background border-border rounded-2xl shadow-sm focus-visible:ring-accent/20 transition-all font-light"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        <div className="flex items-center gap-2 mr-2 text-sm text-muted-foreground font-medium hidden md:flex">
          <Filter className="w-4 h-4" />
          Filtrar por:
        </div>
        
        {CATEGORIES.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-background shadow-md transform scale-105" 
                  : "text-foreground bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-border"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {category === "All" ? "Todos os Trilhas" : category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HubSearchFilters;
