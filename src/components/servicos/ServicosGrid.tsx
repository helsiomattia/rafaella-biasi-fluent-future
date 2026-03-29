import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Users, MessageCircle, Plane, Briefcase } from "lucide-react";

const servicos = [
  {
    icon: User,
    nome: "Aulas Particulares",
    descricao:
      "Aulas individuais 100% online, desenhadas exclusivamente para você. Cada encontro é planejado com base nos seus objetivos, dificuldades e interesses — sem fórmulas genéricas.",
    paraQuem: "Para quem quer atenção total e um plano feito sob medida.",
    beneficio: "Evolução mais rápida com foco total nas suas necessidades.",
  },
  {
    icon: Users,
    nome: "Inglês para Adultos",
    descricao:
      "Um programa pensado para adultos que estão começando ou retomando o inglês. Sem pressão, sem vergonha — apenas um ambiente seguro para aprender no seu ritmo.",
    paraQuem: "Para adultos iniciantes ou que querem recomeçar com confiança.",
    beneficio: "Aprender sem julgamento, com materiais relevantes para sua vida.",
  },
  {
    icon: MessageCircle,
    nome: "Conversação",
    descricao:
      "Aulas focadas em prática oral com temas reais. Trabalho pronúncia, vocabulário contextualizado e a confiança para se expressar com naturalidade em qualquer situação.",
    paraQuem: "Para quem já tem base mas trava na hora de falar.",
    beneficio: "Destravar a fala e ganhar fluência real em conversas do dia a dia.",
  },
  {
    icon: Plane,
    nome: "Inglês para Viagem",
    descricao:
      "Módulo intensivo e prático com foco nas situações reais de viagem: aeroporto, hotel, restaurante, passeios, emergências. Você viaja com segurança e autonomia.",
    paraQuem: "Para quem vai viajar e quer se comunicar sem depender de ninguém.",
    beneficio: "Chegar preparado e aproveitar cada momento da viagem.",
  },
  {
    icon: Briefcase,
    nome: "Inglês Profissional",
    descricao:
      "Aulas direcionadas para o contexto corporativo: reuniões, apresentações, e-mails, entrevistas e negociações. Conteúdo prático e aplicável desde a primeira aula.",
    paraQuem: "Para profissionais que precisam do inglês para crescer na carreira.",
    beneficio: "Comunicar-se com clareza e profissionalismo no ambiente de trabalho.",
  },
];

const ServicosGrid = () => (
  <section className="py-10 md:py-16 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((s, i) => (
          <motion.div
            key={s.nome}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="w-14 h-14 rounded-full bg-gold-light flex items-center justify-center mb-6">
              <s.icon className="w-6 h-6 text-gold-dark" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.nome}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.descricao}</p>

            <div className="bg-secondary rounded-lg p-4 mb-4">
              <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">Para quem é</p>
              <p className="text-sm text-foreground">{s.paraQuem}</p>
            </div>

            <div className="bg-gold-light/40 rounded-lg p-4 mb-6">
              <p className="text-xs font-medium text-gold-dark uppercase tracking-wide mb-1">Benefício principal</p>
              <p className="text-sm text-foreground">{s.beneficio}</p>
            </div>

            <div className="mt-auto">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/contato">Quero saber mais</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosGrid;
