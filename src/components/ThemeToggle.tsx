import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full w-9 h-9 text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
    >
      {theme === "dark" ? (
         <Sun className="w-4 h-4 text-gold-light" />
      ) : (
         <Moon className="w-4 h-4" />
      )}
    </Button>
  );
}
