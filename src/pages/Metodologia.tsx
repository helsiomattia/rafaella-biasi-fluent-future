import { motion } from "framer-motion";

const Metodologia = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-12 max-w-5xl mx-auto">

      {/* HERO */}
      <section className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Metodologia de Ensino
        </motion.h1>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Uma abordagem personalizada, prática e focada em desenvolver sua confiança
          no uso do inglês no dia a dia.
        </p>
      </section>

      {/* FILOSOFIA */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Como eu ensino</h2>
        <p className="text-muted-foreground leading-relaxed">
          Acredito que cada aluno aprende de forma única. Por isso, minhas aulas são
          adaptadas ao seu ritmo, seus objetivos e sua realidade. O foco não é apenas
          entender o inglês, mas conseguir usá-lo com segurança e naturalidade.
        </p>
      </section>

      {/* PASSO A PASSO */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Como funciona na prática</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">1. Diagnóstico inicial</h3>
            <p className="text-sm text-muted-foreground">
              Entendo seu nível atual, dificuldades e objetivos para montar um plano personalizado.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">2. Plano personalizado</h3>
            <p className="text-sm text-muted-foreground">
              Estruturo aulas focadas no que você realmente precisa evoluir.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">3. Prática guiada</h3>
            <p className="text-sm text-muted-foreground">
              Trabalhamos conversação, escuta e construção de frases reais.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">4. Acompanhamento contínuo</h3>
            <p className="text-sm text-muted-foreground">
              Ajusto as aulas conforme sua evolução e dificuldades.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Diferenciais do método</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Personalização real</h3>
            <p className="text-sm text-muted-foreground">
              Cada aluno tem um plano único.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Foco em comunicação</h3>
            <p className="text-sm text-muted-foreground">
              Você aprende a falar e entender, não só estudar regras.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">Experiência internacional</h3>
            <p className="text-sm text-muted-foreground">
              Visão prática e cultural do uso do inglês.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">O que você pode esperar</h2>

        <ul className="space-y-2 text-muted-foreground">
          <li>✔ Mais confiança ao falar inglês</li>
          <li>✔ Melhor compreensão em situações reais</li>
          <li>✔ Evolução consistente</li>
          <li>✔ Inglês aplicado no seu dia a dia</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-muted-foreground mb-6">
          Vamos construir juntos seu caminho no inglês.
        </p>

        <a
          href="#/contato"
          className="inline-block px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition"
        >
          Agendar conversa
        </a>
      </section>
    </div>
  );
};

export default Metodologia;
