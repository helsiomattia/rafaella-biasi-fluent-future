import { Loader2 } from "lucide-react";

export const LoadingFallback = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-16 w-16 rounded-full border-t-2 border-r-2 border-gold/30 animate-[spin_3s_linear_infinite]" />
          <div className="absolute h-12 w-12 rounded-full border-b-2 border-l-2 border-gold/60 animate-[spin_2s_linear_infinite_reverse]" />
          <Loader2 className="h-6 w-6 animate-spin text-gold" />
        </div>
        <p className="text-sm font-medium text-muted-foreground animate-pulse tracking-widest uppercase">
          Carregando...
        </p>
      </div>
    </div>
  );
};

export default LoadingFallback;
