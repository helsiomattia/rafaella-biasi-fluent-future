import { motion } from "framer-motion";

const steps = [
  {
    title: "Entender seu momento atual",
    description:
      "Identificar nível, dificuldades, necessidades e metas para que o processo comece com mais clareza.",
  },
  {
    title: "Estruturar um caminho possível",
    description:
      "Organizar aulas e estratégias de forma alinhada à sua rotina, ao seu ritmo e ao seu objetivo com o inglês.",
  },
  {
    title: "Praticar com intencionalidade",
    description:
      "Trabalhar escuta, vocabulário, compreensão e comunicação com foco em uso real do idioma.",
  },
  {
    title: "Ajustar e evoluir continuamente",
    description:
      "Acompanhar seu progresso e adaptar o processo conforme a evolução, para manter consistência e resultado.",
  },
];

const ComoFuncionaMetodologia = () => {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Como funciona
        </span>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Uma jornada estruturada para transformar estudo em evolução real.
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          O método foi pensado para tornar o aprendizado mais claro, funcional e conectado ao que o aluno realmente precisa viver com o inglês.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-semibold">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComoFuncionaMetodologia;
