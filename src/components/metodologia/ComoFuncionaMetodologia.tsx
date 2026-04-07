import { motion } from "framer-motion";
import { ClipboardList, CalendarCheck, MessageSquare, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Entender seu momento atual",
    description:
      "Identificar nível, dificuldades, necessidades e metas para que o processo comece com mais clareza.",
  },
  {
    icon: ClipboardList,
    title: "Estruturar um caminho possível",
    description:
      "Organizar aulas e estratégias de forma alinhada à sua rotina, ao seu ritmo e ao seu objetivo com o inglês.",
  },
  {
    icon: CalendarCheck,
    title: "Praticar com intencionalidade",
    description:
      "Trabalhar escuta, vocabulário, compreensão e comunicação com foco em uso real do idioma.",
  },
  {
    icon: TrendingUp,
    title: "Ajustar e evoluir continuamente",
    description:
      "Acompanhar seu progresso e adaptar o processo conforme a evolução, para manter consistência e resultado.",
  },
];

const ComoFuncionaMetodologia = () => (
  <section>
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-gold">
          Como funciona
        </span>

        <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground">
          Da clareza inicial à evolução contínua
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
          O método foi pensado para tornar o aprendizado mais claro, funcional e conectado ao que o aluno realmente precisa viver com o inglês.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-[28px] border border-border bg-card p-7 shadow-[0_4px_18px_rgba(21,35,59,0.04)]"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-6 text-[22px] font-semibold leading-tight text-foreground md:text-[24px]">
                {step.title}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-500">
                {step.description}
              </p>

              <div className="mt-6 rounded-2xl bg-secondary px-4 py-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  Etapa {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-foreground">
                  Parte essencial de uma jornada mais leve, estratégica e personalizada.
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ComoFuncionaMetodologia;
