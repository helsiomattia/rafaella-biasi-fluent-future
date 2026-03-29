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
  <section className="pb-20">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#d08a21]">
        Como funciona
      </span>

      <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#15233b]">
        Da clareza inicial à evolução contínua
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
        O método foi pensado para tornar o aprendizado mais claro, funcional e
        conectado ao que o aluno realmente precisa viver com o inglês.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-[28px] border border-[#e6dfd6] bg-white p-7 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#efe1c6] text-[#c37a17]">
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#15233b] text-sm font-semibold text-white">
                {index + 1}
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-semibold leading-tight text-[#15233b]">
              {step.title}
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-500">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default ComoFuncionaMetodologia;
