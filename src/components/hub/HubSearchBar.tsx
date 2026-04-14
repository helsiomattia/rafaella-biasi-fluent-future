import { Search } from "lucide-react";

interface HubSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const HubSearchBar = ({ value, onChange }: HubSearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="O que você quer aprender hoje?"
        className="w-full pl-12 pr-4 py-4 rounded-full bg-secondary/30 border border-primary/10 focus:border-gold/50 focus:bg-secondary/50 focus:ring-1 focus:ring-gold/50 transition-all outline-none text-foreground placeholder:text-muted-foreground shadow-sm hover:shadow-md"
      />
    </div>
  );
};

export default HubSearchBar;
