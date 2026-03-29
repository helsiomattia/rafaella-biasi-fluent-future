import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const FormacaoSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-widest uppercase">Formação & Certificações</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Base sólida, prática refinada
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formação Acadêmica */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Formação Acadêmica</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-display font-semibold text-foreground text-lg mb-1">
                  Graduação em Letras
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Formação completa em Língua Inglesa e Literaturas, com foco em 
                  linguística aplicada ao ensino e desenvolvimento de competências comunicativas.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h4 className="font-display font-semibold text-foreground text-lg mb-1">
                  Pós-Graduação em ESL
                </h4>
                <p className="text-sm text-muted-foreground italic mb-2">Teaching English as a Second Language</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Especialização em metodologias de ensino de inglês como segunda língua, 
                  com aprofundamento em abordagens comunicativas e ensino centrado no aluno.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certificações */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center">
                <Award className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Certificações</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    C2
                  </span>
                  <h4 className="font-display font-semibold text-foreground text-lg">
                    Proficiência C2
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nível máximo de proficiência no Quadro Europeu Comum de Referência — 
                  domínio completo do idioma em todos os contextos de comunicação.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    GT
                  </span>
                  <h4 className="font-display font-semibold text-foreground text-lg">
                    Global Teacher
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Certificação internacional que atesta competência para ensinar inglês 
                  com padrões globais de qualidade e metodologia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default FormacaoSection;
