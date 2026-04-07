import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import loginHero from "@/assets/login-hero.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulando autenticação e redirecionamento
    localStorage.setItem("fluent-future-auth", "true");
    setTimeout(() => {
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background flex flex-col justify-center">
      
      {/* Left Column (Form) */}
      <div className="flex flex-col justify-center px-8 py-16 sm:px-24 xl:px-32 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="w-full max-w-[420px] mx-auto z-10">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-gold-dark mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao site
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
              Área do Aluno <span className="text-gradient-gold">.</span>
            </h1>
            <p className="text-muted-foreground font-light mb-10 text-lg md:text-xl">
              Bem-vindo de volta! Insira suas credenciais para acessar os seus materiais e aulas ao vivo.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-foreground" htmlFor="email">Email de Acesso</label>
                <div className="relative flex items-center group">
                  <Mail className="absolute left-4 w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors" />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="aluno@email.com"
                    className="flex h-14 w-full rounded-2xl border border-input bg-white/50 backdrop-blur-sm px-12 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm focus:shadow-md hover:border-gold/30"
                  />
                </div>
              </div>

              <div className="space-y-2 relative">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground" htmlFor="password">Senha</label>
                  <a href="#" className="text-xs font-semibold text-gold-dark hover:text-gold hover:underline transition-colors">Esqueceu a senha?</a>
                </div>
                <div className="relative flex items-center group">
                  <Lock className="absolute left-4 w-5 h-5 text-muted-foreground group-focus-within:text-gold transition-colors" />
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••••"
                    className="flex h-14 w-full rounded-2xl border border-input bg-white/50 backdrop-blur-sm px-12 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:border-gold disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm focus:shadow-md hover:border-gold/30"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full rounded-2xl h-14 text-base font-semibold shadow-premium"
              >
                Acessar Plataforma
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Ainda não é aluno? <Link to="/contato" className="font-semibold text-foreground hover:text-gold-dark underline underline-offset-4 transition-colors">Agende uma conversa</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Column (Image/Quote) */}
      <div className="hidden lg:block relative bg-[#EFE8DE] overflow-hidden p-6 shadow-[-20px_0_40px_rgb(0,0,0,0.03)]">
        <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] z-10 opacity-60" />

        <div className="h-full w-full rounded-3xl overflow-hidden relative shadow-inner">
          <img
            src={loginHero}
            alt="Study space"
            className="w-full h-full object-cover"
          />
          
          {/* Subtle gradient overlay to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

          <div className="absolute bottom-12 left-12 right-12 z-20 text-white leading-relaxed max-w-xl">
            <svg className="w-10 h-10 text-gold-light opacity-80 mb-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-4 tracking-tight leading-[1.3] text-white drop-shadow-lg">
              A maestria no idioma vem da repetição consistente aliada a um propósito claro.
            </h3>
            <p className="font-light text-white/90 drop-shadow-md">
              — Rafaella Biasi
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
