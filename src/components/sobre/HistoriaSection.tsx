import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const HistoriaSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeIn}>
          <span className="text-sm font-medium text-accent tracking-widest uppercase">Minha história</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
            De aluna curiosa a professora apaixonada
          </h2>
        </motion.div>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }}>
            O inglês sempre foi mais do que uma matéria pra mim — foi a porta que abriu o mundo. 
            Desde cedo entendi que falar outro idioma não é só traduzir palavras, é se conectar com 
            pessoas, culturas e oportunidades que antes pareciam distantes.
          </motion.p>

          <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
            Essa paixão me levou à graduação em Letras e, depois, à pós-graduação em 
            <span className="text-foreground font-medium"> Teaching English as a Second Language</span>. 
            Mas foi na prática — ensinando alunos com histórias, medos e objetivos completamente 
            diferentes — que meu método realmente tomou forma.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background rounded-xl p-8 border border-border my-8"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Minha visão de ensino
            </h3>
            <p>
              Acredito que cada aluno é único — e merece um ensino que respeite isso. 
              Não trabalho com fórmulas prontas. Crio experiências de aprendizado que 
              fazem sentido para a vida real de cada pessoa: sua rotina, seus interesses, 
              seus desafios e seus sonhos.
            </p>
          </motion.div>

          <motion.p {...fadeIn} transition={{ duration: 0.6, delay: 0.4 }}>
            Minha abordagem é construída sobre três pilares: 
            <span className="text-foreground font-medium"> personalização real</span>, 
            <span className="text-foreground font-medium"> prática constante</span> e 
            <span className="text-foreground font-medium"> acolhimento genuíno</span>. 
            O resultado? Alunos que não apenas aprendem inglês, mas que ganham confiança 
            para usá-lo — no trabalho, em viagens, na vida.
          </motion.p>
        </div>
      </div>
    </div>
  </section>
);

export default HistoriaSection;
