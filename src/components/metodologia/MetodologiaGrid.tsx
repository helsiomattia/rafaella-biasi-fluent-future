import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, BookOpen, MessageCircle, LineChart } from "lucide-react";

const methodologyCards = [
  {
    icon: Target,
    nome: "Diagnóstico inicial",
    descricao:
      "Tudo começa com a compreensão do seu nível atual, das suas dificuldades e do que você quer alcançar com o inglês.",
    paraQuem: "Para quem quer começar com mais clareza.",
    beneficio: "Direção mais estratégica desde o início.",
  },
  {
    icon: BookOpen,
    nome: "Plano personalizado",
    descricao:
      "As aulas são organizadas de acordo com seu perfil, seu ritmo de aprendizagem e o contexto em que você deseja usar o idioma.",
    paraQuem: "Para quem busca um processo mais personalizado.",
    beneficio: "Aulas mais relevantes e eficientes.",
  },
  {
    icon: MessageCircle,
    nome: "Prática com propósito",
    descricao:
      "A proposta vai além da teoria: o foco é aplicar o inglês em situações reais, com mais segurança e naturalidade.",
    paraQuem: "Para quem quer destravar a comunicação.",
    beneficio: "Mais confiança para usar o idioma.",
  },
  {
    icon: LineChart,
    nome: "Acompanhamento contínuo",
    descricao:
      "Conforme você evolui, o processo também evolui. As aulas são ajustadas para manter consistência, leveza e progresso.",
    paraQuem: "Para quem quer crescer com acompanhamento real.",
    beneficio: "Evolução contínua e mais sustentável.",
  },
];

const MetodologiaGrid = () => (
  <section>
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-8 md:grid-cols-2">
        {methodologyCards.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.nome}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-[28px] border border-[#e8e0d4] bg-white p-7 shadow-[0_4px_18px_rgba(21,35,59,0.04)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#efe1c6] text-[#c9851f]">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-[22px] font-semibold leading-tight text-[#15233b] md:text-[24px]">
                {item.nome}
              </h3>

              <p className="mt-4 text-base leading-8 text-slate-500">
                {item.descricao}
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-[#f6f1e8] px-4 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#d08a21]">
                    Para quem é
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#15233b]">
                    {item.paraQuem}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f6f1e8] px-4 py-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#d08a21]">
                    Benefício principal
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#15233b]">
                    {item.beneficio}
                  </p>
                </div>
              </div>

              <Button
                asChild
                className="mt-6 h-12 w-full rounded-2xl border-0 bg-[#e59a24] text-[#15233b] hover:bg-[#d98d1c]"
              >
                <Link to="/contato">Quero saber mais</Link>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default MetodologiaGrid;
