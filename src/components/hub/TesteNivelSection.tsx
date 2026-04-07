import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QUIZ_QUESTIONS, LEVEL_RESULTS } from "@/data/constants";


const TesteNivelSection = () => {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = intro
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const handleStart = () => setCurrentStep(0);

  const handleAnswer = useCallback((index: number) => {
    if (showFeedback) return; // prevent double click

    setSelectedOption(index);
    setShowFeedback(true);

    const isCorrect = index === QUIZ_QUESTIONS[currentStep].correct;
    if (isCorrect) setScore(prev => prev + 1);

    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    setTimeout(() => {
      setSelectedOption(null);
      setShowFeedback(false);
      setCurrentStep(prev => prev + 1);
    }, 1200);
  }, [currentStep, answers, showFeedback]);

  const handleRestart = () => {
    setCurrentStep(-1);
    setAnswers([]);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
  };

  const getResult = () => {
    return LEVEL_RESULTS.find(l => score >= l.min && score <= l.max) || LEVEL_RESULTS[0];
  };

  const xpPercentage = (score / QUIZ_QUESTIONS.length) * 100;

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-gold-dark" />
            <span className="text-xs font-bold text-gold-dark tracking-[0.2em] uppercase">Teste Gratuito</span>
            <span className="h-px w-6 bg-gold-dark" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Descubra o seu <span className="text-gradient-gold">Nível Real</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-light text-lg">
            Responda 5 perguntas rápidas do mundo real e veja exatamente onde você está na jornada da fluência.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-3xl shadow-premium p-8 md:p-10 relative overflow-hidden">

            {/* XP Progress — visible during quiz */}
            {currentStep >= 0 && currentStep < QUIZ_QUESTIONS.length && (
              <div className="mb-8">
                <div className="flex justify-between items-center text-sm font-semibold mb-3">
                  <span className="text-muted-foreground">Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                  <span className="flex items-center gap-1.5 text-gold-dark">
                    <Trophy className="w-4 h-4" />
                    {score} acertos
                  </span>
                </div>
                <div className="h-2.5 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* Intro Screen */}
              {currentStep === -1 && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center text-center space-y-6 py-8"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center text-gold-dark shadow-glass border border-gold/20">
                    <Trophy className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Teste de Nível Rápido
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      São 5 situações reais do dia a dia. Ao final, descubra seu perfil e receba uma recomendação personalizada.
                    </p>
                  </div>
                  <Button onClick={handleStart} variant="hero" size="lg" className="rounded-full px-12 py-7 text-lg group">
                    Começar o Teste
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}

              {/* Question Screen */}
              {currentStep >= 0 && currentStep < QUIZ_QUESTIONS.length && (
                <motion.div
                  key={`q-${currentStep}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-8 leading-tight text-foreground">
                    {QUIZ_QUESTIONS[currentStep].question}
                  </h3>
                  <div className="space-y-3">
                    {QUIZ_QUESTIONS[currentStep].options.map((opt, i) => {
                      const isCorrect = i === QUIZ_QUESTIONS[currentStep].correct;
                      const isSelected = selectedOption === i;

                      let optionStyle = "border-border hover:border-gold hover:bg-gold/5";
                      if (showFeedback && isSelected && isCorrect) {
                        optionStyle = "border-emerald-500 bg-emerald-500/10";
                      } else if (showFeedback && isSelected && !isCorrect) {
                        optionStyle = "border-red-400 bg-red-400/10";
                      } else if (showFeedback && isCorrect) {
                        optionStyle = "border-emerald-500/50 bg-emerald-500/5";
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswer(i)}
                          disabled={showFeedback}
                          className={`w-full text-left p-5 rounded-2xl border-2 transition-all text-base font-medium group flex justify-between items-center ${optionStyle} disabled:cursor-default`}
                        >
                          <span className="text-foreground">{opt}</span>
                          {showFeedback && isSelected && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          )}
                          {showFeedback && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                          )}
                          {showFeedback && !isSelected && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500/50 shrink-0" />
                          )}
                          {!showFeedback && (
                            <div className="w-5 h-5 rounded-full border-2 border-border group-hover:border-gold group-hover:bg-gold/20 transition-colors shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Result Screen */}
              {currentStep === QUIZ_QUESTIONS.length && (() => {
                const result = getResult();
                const ResultIcon = result.icon;

                return (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center space-y-6 py-4"
                  >
                    {/* XP Final Bar */}
                    <div className="w-full max-w-sm">
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-muted-foreground">Pontuação</span>
                        <span className="text-gold-dark">{score}/{QUIZ_QUESTIONS.length} acertos</span>
                      </div>
                      <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${xpPercentage}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
                        />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className={`w-20 h-20 rounded-full bg-secondary flex items-center justify-center border border-border ${result.color}`}>
                      <ResultIcon className="w-10 h-10" />
                    </div>

                    <div>
                      <p className="text-xs font-bold tracking-widest text-gold-dark uppercase mb-2">Seu perfil linguístico</p>
                      <h3 className="font-display text-3xl font-bold text-foreground">
                        {result.level}
                      </h3>
                    </div>

                    <div className="bg-secondary/50 p-6 rounded-2xl border border-border max-w-lg">
                      <p className="text-foreground font-medium leading-relaxed">
                        {result.desc}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full justify-center">
                      <Button asChild variant="hero" size="lg" className="rounded-full px-8 py-6">
                        <Link to="/contato">Conhecer os Planos</Link>
                      </Button>
                      <Button onClick={handleRestart} variant="outline" size="lg" className="rounded-full px-8 py-6 bg-background">
                        Refazer Teste
                      </Button>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TesteNivelSection;
