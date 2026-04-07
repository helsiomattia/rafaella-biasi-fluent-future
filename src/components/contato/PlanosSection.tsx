import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight, Sparkles, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PLANS, CHALLENGE_OPTIONS, TIME_OPTIONS, STYLE_OPTIONS } from "@/data/constants";
import type { WizardAnswers } from "@/types";


const PlanosSection = () => {
  const [step, setStep] = useState(0); // 0: intro, 1: q1, 2: q2, 3: q3, 4: result
  const [answers, setAnswers] = useState<WizardAnswers>({ challenge: "", time: "", style: "" });
  const [recommended, setRecommended] = useState<string | null>(null);

  const handleAnswer = (question: keyof WizardAnswers, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);

    if (question === "challenge") setStep(2);
    if (question === "time") setStep(3);
    if (question === "style") {
      setStep(4);
      // Recommendation logic based on all 3 answers
      if (value === "individual") {
        setRecommended("Mentoria Premium");
      } else if (value === "grupo" || newAnswers.time === "medio") {
        setRecommended("Fluency Plus");
      } else if (value === "sozinho" && newAnswers.time === "pouco") {
        setRecommended("Fluency Start");
      } else if (newAnswers.challenge === "business" || newAnswers.challenge === "pronuncia") {
        setRecommended("Mentoria Premium");
      } else {
        setRecommended("Fluency Plus");
      }
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({ challenge: "", time: "", style: "" });
    setRecommended(null);
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-px w-6 bg-gold-dark" />
            <span className="text-xs font-bold text-gold-dark tracking-[0.2em] uppercase">Planos</span>
            <span className="h-px w-6 bg-gold-dark" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Escolha o plano perfeito para a sua <span className="text-gradient-gold">Fluência</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Não tem certeza de qual caminho seguir? Responda 3 perguntas rápidas e descubra qual plano combina com seu momento.
          </p>
        </div>

        {/* Wizard Calculator */}
        <div className="max-w-2xl mx-auto mb-20 bg-card border border-border shadow-sm rounded-3xl p-8 md:p-10 relative overflow-hidden">
          {/* Progress dots */}
          {step >= 1 && step <= 3 && (
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map(s => (
                <div key={s} className={`h-2 rounded-full transition-all duration-300 ${s <= step ? "w-10 bg-gold" : "w-2 bg-secondary"}`} />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mx-auto mb-5">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Descubra seu Plano Ideal</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">3 perguntas rápidas para encontrar a experiência certa para o seu momento.</p>
                <Button onClick={() => setStep(1)} variant="hero" className="rounded-full px-8 py-6">
                  Iniciar <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-5">
                <h3 className="font-display text-xl md:text-2xl font-bold text-center text-foreground">Qual o seu maior desafio com o inglês?</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {CHALLENGE_OPTIONS.map(opt => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer("challenge", opt.value)}
                        className="p-4 border-2 border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all font-medium flex items-center gap-3 text-foreground"
                      >
                        <Icon className="w-5 h-5 text-gold shrink-0" />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-5">
                <h3 className="font-display text-xl md:text-2xl font-bold text-center text-foreground">Quanto tempo por semana você pode dedicar?</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {TIME_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer("time", opt.value)}
                      className="p-4 border-2 border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all font-medium flex flex-col items-center gap-1 text-foreground"
                    >
                      <Clock className="w-5 h-5 text-gold mb-1" />
                      <span className="font-semibold">{opt.label}</span>
                      <span className="text-xs text-muted-foreground">{opt.sub}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-5">
                <h3 className="font-display text-xl md:text-2xl font-bold text-center text-foreground">Como você prefere aprender?</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {STYLE_OPTIONS.map(opt => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer("style", opt.value)}
                        className="p-4 border-2 border-border rounded-xl hover:border-gold hover:bg-gold/5 transition-all font-medium flex flex-col items-center gap-1 text-foreground"
                      >
                        <Icon className="w-5 h-5 text-gold mb-1" />
                        <span className="font-semibold">{opt.label}</span>
                        <span className="text-xs text-muted-foreground">{opt.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-2">
                <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full font-bold text-sm mb-4">
                  Análise Concluída ✓
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Encontramos o plano perfeito</h3>
                <p className="text-muted-foreground mb-4">Veja a recomendação destacada abaixo.</p>
                <button onClick={handleReset} className="text-sm text-gold-dark hover:underline font-medium">
                  Refazer simulação
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Grid — 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, i) => {
            const isRecommended = recommended === plan.name;
            const isDimmed = recommended && !isRecommended;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isDimmed ? 0.45 : 1,
                  y: 0,
                  scale: isRecommended ? 1.03 : 1,
                }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative p-7 md:p-8 rounded-3xl border transition-all duration-500 flex flex-col ${
                  isRecommended
                    ? "bg-charcoal border-gold/50 shadow-[0_0_60px_rgba(200,150,50,0.15)] text-white z-10"
                    : "bg-card border-border shadow-sm text-foreground"
                }`}
              >
                {/* Recommended Badge */}
                <AnimatePresence>
                  {isRecommended && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-dark to-gold text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center shadow-lg whitespace-nowrap"
                    >
                      <Star className="w-3 h-3 mr-1.5 fill-white" /> Ideal para Você
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mb-5">
                  <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 ${isRecommended ? "text-white" : ""}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isRecommended ? "text-white/70" : "text-muted-foreground"}`}>
                    {plan.desc}
                  </p>
                </div>

                <div className="mb-6 flex items-baseline">
                  <span className={`text-4xl md:text-5xl font-extrabold font-display ${isRecommended ? "text-gold-light" : "text-foreground"}`}>
                    R$ {plan.price}
                  </span>
                  <span className={`text-sm font-semibold ml-1 ${isRecommended ? "text-white/50" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 shrink-0 ${isRecommended ? "text-gold" : "text-sage"}`} />
                      <span className={`text-sm ${isRecommended ? "text-white/90" : "text-foreground/80 font-medium"}`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={isRecommended ? "hero" : "outline"}
                  className={`w-full rounded-2xl py-6 text-base transition-transform ${
                    isRecommended ? "shadow-inner border-0 hover:scale-105" : "border-2 hover:bg-secondary"
                  }`}
                >
                  <Link to="/login">{plan.buttonLabel}</Link>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanosSection;
