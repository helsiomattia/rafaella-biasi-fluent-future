import {
  BookOpen, PlayCircle, FolderOpen, Settings,
  Target, Zap, Star,
  MessageCircle, Shield, Briefcase, Clock, Users, User,
} from "lucide-react";
import type {
  NavItem, DashboardLink, CourseModule, Plan,
  QuizQuestion, LevelResult, VideoItem, MaterialFile,
} from "@/types";

// ── Site Navigation ─────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Serviços", path: "/servicos" },
  { label: "Metodologia", path: "/metodologia" },
  { label: "Fluent Hub", path: "/hub" },
  { label: "Contato", path: "/contato" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Serviços", path: "/servicos" },
  { label: "Metodologia", path: "/metodologia" },
  { label: "Contato", path: "/contato" },
];

// ── Dashboard Sidebar ───────────────────────────────────────
export const DASHBOARD_LINKS: DashboardLink[] = [
  { icon: BookOpen, label: "Visão Geral", path: "/dashboard" },
  { icon: PlayCircle, label: "Meus Módulos", path: "#modulos" },
  { icon: FolderOpen, label: "Materiais Extras", path: "#materiais" },
  { icon: Settings, label: "Configurações", path: "#settings" },
];

// ── Course Modules ──────────────────────────────────────────
export const MODULES: CourseModule[] = [
  { id: 1, title: "Módulo 1: Foundations", classes: 5, completed: 5, status: "completed", desc: "Bases sólidas para destravar o inglês desde o primeiro dia." },
  { id: 2, title: "Módulo 2: Business Talk", classes: 8, completed: 3, status: "in-progress", desc: "Vocabulário corporativo, reuniões e emails formais." },
  { id: 3, title: "Módulo 3: Fluency Master", classes: 10, completed: 0, status: "locked", desc: "Estruturas avançadas e idioms nativos." },
];

// ── Pricing Plans (canonical – 3 plans) ─────────────────────
export const PLANS: Plan[] = [
  {
    name: "Fluency Start",
    desc: "Acesso à plataforma gravada para você estudar no seu ritmo, com materiais organizados e suporte.",
    price: "97",
    period: "/mês",
    features: [
      "Acesso completo ao Fluent Hub",
      "Material em PDF estruturado",
      "Suporte por Email",
      "Acesso por 12 meses",
    ],
    buttonLabel: "Começar Agora",
    accent: false,
  },
  {
    name: "Fluency Plus",
    desc: "Aulas ao vivo em grupo + acesso à plataforma. O equilíbrio entre custo e acompanhamento.",
    price: "197",
    period: "/mês",
    features: [
      "Tudo do Fluency Start",
      "2 Aulas em Grupo ao Vivo / mês",
      "Grupo VIP no WhatsApp",
      "Correção de atividades",
      "Certificado de Conclusão",
    ],
    buttonLabel: "Quero o Plus",
    accent: false,
  },
  {
    name: "Mentoria Premium",
    desc: "Acompanhamento individual e personalizado com a Rafaella Biasi. Sua jornada, seu ritmo.",
    price: "397",
    period: "/mês",
    features: [
      "Tudo do Fluency Plus",
      "4 Aulas Individuais ao Vivo / mês",
      "Plano 100% personalizado",
      "Correção de Pronúncia em vídeo",
      "Acesso direto à Rafa por WhatsApp",
      "Relatório mensal de progresso",
    ],
    buttonLabel: "Garantir Mentoria",
    accent: false,
  },
];

// ── Quiz Questions (gamified – 5 questions) ─────────────────
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Como você pediria um café educadamente em inglês?",
    options: ["I want a coffee.", "Give me a coffee.", "Can I have a coffee, please?", "Coffee for me."],
    correct: 2,
  },
  {
    question: "Qual a melhor resposta para 'How have you been?'",
    options: ["I are fine.", "I have been good, thanks!", "I was good.", "Yes, I have."],
    correct: 1,
  },
  {
    question: "Seu chefe gringo diz: 'We need to touch base tomorrow.' O que ele quer?",
    options: ["Jogar beisebol.", "Conversar para alinhar as coisas.", "Tocar a base do escritório.", "Cancelar a reunião."],
    correct: 1,
  },
  {
    question: "Qual frase usa o Present Perfect corretamente?",
    options: ["I have went to London.", "I has been to London.", "I have been to London.", "I been to London."],
    correct: 2,
  },
  {
    question: "Em uma reunião, como dizer 'Vou te colocar a par da situação'?",
    options: ["I'll put you on par.", "I'll bring you up to speed.", "I'll make you go fast.", "I'll speed you up."],
    correct: 1,
  },
];

// ── Level Results ───────────────────────────────────────────
export const LEVEL_RESULTS: LevelResult[] = [
  { min: 0, max: 1, level: "Iniciante (A1/A2)", icon: Target, color: "text-orange-500", desc: "Você está no começo da jornada — e tudo bem! O Fluent Future foi desenhado exatamente para construir uma base sólida, com confiança e clareza." },
  { min: 2, max: 3, level: "Intermediário (B1/B2)", icon: Zap, color: "text-gold", desc: "Você já se comunica, mas falta fluidez e confiança. O próximo passo é destravar as travas e ganhar vocabulário estratégico para brilhar." },
  { min: 4, max: 5, level: "Avançado (C1)", icon: Star, color: "text-emerald-500", desc: "Seu inglês já é muito bom! A mentoria vai focar em lapidar nuances, expressões naturais e Business English de alto nível." },
];

// ── Hub Videos ──────────────────────────────────────────────
export const MOCK_VIDEOS: VideoItem[] = [
  { id: 1, title: "Como pensar em inglês", platform: "youtube", duration: "12:40", category: "Mindset" },
  { id: 2, title: "Erros comuns no Business English", platform: "youtube", duration: "08:15", category: "Business" },
  { id: 3, title: "Phrasal verbs do dia a dia", platform: "instagram", duration: "01:00", category: "Vocabulário" },
  { id: 4, title: "Qual a diferença entre To e For?", platform: "instagram", duration: "01:30", category: "Gramática" },
  { id: 5, title: "Entrevista de emprego em inglês", platform: "youtube", duration: "15:20", category: "Carreira" },
  { id: 6, title: "Pronúncia: Th vs F", platform: "instagram", duration: "00:45", category: "Pronúncia" },
];

// ── Dashboard Materials ─────────────────────────────────────
export const MATERIAL_FILES: MaterialFile[] = [
  { title: "Resumo: Tempos Verbais", type: "PDF", size: "2.4 MB" },
  { title: "Business English Vocab List", type: "PDF", size: "1.1 MB" },
  { title: "Exercícios Módulo 1", type: "PDF", size: "3.2 MB" },
  { title: "Cronograma de Estudos Diário", type: "Planilha", size: "0.5 MB" },
];

// ── Wizard Options ──────────────────────────────────────────
export const CHALLENGE_OPTIONS = [
  { value: "vocab", label: "Falta de vocabulário", icon: BookOpen },
  { value: "pronuncia", label: "Trava na hora de falar", icon: MessageCircle },
  { value: "confianca", label: "Falta de confiança", icon: Shield },
  { value: "business", label: "Inglês profissional", icon: Briefcase },
] as const;

export const TIME_OPTIONS = [
  { value: "pouco", label: "Até 2h", sub: "Ritmo leve" },
  { value: "medio", label: "2h – 5h", sub: "Ritmo moderado" },
  { value: "muito", label: "Mais de 5h", sub: "Ritmo intenso" },
] as const;

export const STYLE_OPTIONS = [
  { value: "sozinho", label: "No meu ritmo", icon: User, sub: "Autoestudo" },
  { value: "grupo", label: "Com turma", icon: Users, sub: "Aulas em grupo" },
  { value: "individual", label: "1 a 1 com prof", icon: Star, sub: "Mentoria individual" },
] as const;
