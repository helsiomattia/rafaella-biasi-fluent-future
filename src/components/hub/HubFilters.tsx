import { motion } from "framer-motion";
import { HubCategory } from "@/types";
import { HUB_CATEGORIES } from "@/data/hub-content";

interface HubFiltersProps {
  activeCategory: HubCategory;
  onSelectCategory: (category: HubCategory) => void;
}

const HubFilters = ({ activeCategory, onSelectCategory }: HubFiltersProps) => {
  return (
    <div className="w-full relative pb-4 mb-8 overflow-x-auto hide-scrollbar">
      <div className="flex items-center gap-3 min-w-max px-2">
        {HUB_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "text-gold-dark"
                : "text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gold/10 border border-gold/30 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HubFilters;
