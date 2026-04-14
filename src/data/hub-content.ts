export type HubContentType = "blog" | "material" | "video";

export type HubCategory = 
  | "Gramática"
  | "Conversação"
  | "Pronúncia"
  | "Inglês para Negócios"
  | "Dicas de Estudo"
  | "Vocabulário"
  | "Materiais Gratuitos";

export interface HubContent {
  id: string;
  slug: string;
  title: string;
  description: string;
  content?: string; // Markdown or HTML representation mock (for posts)
  fileUrl?: string; // For materials (PDFs)
  videoPlatform?: "youtube" | "instagram"; // For videos
  videoUrl?: string; // For videos
  category: HubCategory;
  readingTime?: string;
  type: HubContentType;
  featured: boolean;
  imageUrl?: string;
  author?: string;
  date: string;
}

export const MOCK_HUB_CONTENT: HubContent[] = [
  {
    id: "h1",
    slug: "5-erros-comuns-brasileiros-cometem-falando-ingles",
    title: "Os 5 erros mais comuns que brasileiros cometem ao falar inglês",
    description: "Descubra como evitar os vícios de linguagem que entregam que o português é sua língua nativa e soe muito mais natural.",
    content: `
      <h2>1. Usar o verbo "have" para expressar idade ou existência</h2>
      <p>É muito comum brasileiros dizerem "I have 25 years" em vez de "I am 25 years old", ou "Have a car outside" em vez de "There is a car outside". Lembre-se: em inglês não "temos" uma idade, nós "somos" essa idade. Da mesma forma, algo não "tem" lá fora, a coisa "existe" lá fora.</p>
      
      <h2>2. Omitir o sujeito nas frases</h2>
      <p>Em português, um sujeito oculto é perfeito (ex: "Está chovendo"). Mas em inglês, verbos não existem no vazio. Você <b>precisa</b> do sujeito: "It is raining".</p>
      
      <h2>3. Confusão entre "Make" e "Do"</h2>
      <p>Uma eterna dúvida! "Make" geralmente está ligado à criação ou fabricação (ex: "Make a cake", "Make a decision"). Já o "Do" remete a atividades ou tarefas ("Do homework", "Do your best").</p>
      
      <h2>4. Pronúncia do sufixo -ED no passado</h2>
      <p>Muitos brasileiros tentam pronunciar todas as letras, dizendo "work-ed" em vez de "workt", ou "call-ed" em vez de "calld".</p>

      <h2>5. Falsos Cognatos</h2>
      <p>Usar "Pretend" achando que é "Pretender" (quando na verdade significa "fingir"), ou "Intend" quando a tradução correta para "Intender" seria apenas "understand".</p>

      <p>Ajuste esses pontos e você vai perceber um salto imediato na confiança que os falantes nativos terão ao depositar a atenção em você.</p>
    `,
    category: "Gramática",
    readingTime: "5 min",
    type: "blog",
    featured: true,
    author: "Rafaella Biasi",
    date: "2026-04-05",
    imageUrl: "https://images.unsplash.com/photo-1546410531-dd4cb32b70b7?q=80&w=2671&auto=format&fit=crop",
  },
  {
    id: "h2",
    slug: "o-guia-definitivo-do-present-perfect-pdf",
    title: "O Guia Definitivo do Present Perfect (PDF + Exercícios)",
    description: "Aprenda de uma vez por todas o tempo verbal que mais confunde os alunos do nível intermediário e avançado. Inclui lista de exercícios com gabarito.",
    fileUrl: "#baixar-pdf",
    category: "Materiais Gratuitos",
    type: "material",
    featured: true,
    author: "Rafaella Biasi",
    date: "2026-04-02",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "h3",
    slug: "inglês-para-entrevistas-de-emprego-guia",
    title: "Inglês para Entrevistas de Emprego",
    description: "Um material completo em texto e áudio para você se preparar de cabeça erguida e garantir sua vaga de trabalho fora do Brasil.",
    category: "Inglês para Negócios",
    type: "blog",
    readingTime: "8 min",
    featured: false,
    author: "Rafaella Biasi",
    date: "2026-03-28",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop",
    content: `
      <h2>A importância de se preparar para entrevistas em inglês</h2>
      <p>Entrevistas já geram ansiedade em português. Na língua inglesa, o peso parece triplicar. Porém, as perguntas feitas tendem a seguir padrões.</p>

      <h2>O famoso "Tell me about yourself"</h2>
      <p>Evite entrar em detalhes da sua família. Eles querem ouvir sobre a sua trajetória <b>profissional</b>. Use a técnica Present-Past-Future:</p>
      <ul>
        <li><b>Present:</b> Onde você está agora trabalhando e qual sua atividade atual.</li>
        <li><b>Past:</b> Qual experiência agregou mais nas suas habilidades ("I worked as a...").</li>
        <li><b>Future:</b> Onde quer chegar ou porque você se alinha com a cultura ("I'm looking for an opportunity to...").</li>
      </ul>

      <h2>Respondendo sobre fraquezas ("What is your biggest weakness?")</h2>
      <p>Não use clichês como "Sou muito perfeccionista". Apresente uma falha real (que não afeta a principal habilidade da vaga) e explique o que você ativamente faz para mitigá-la hoje.</p>
    `,
  },
  {
    id: "h4",
    slug: "diferenca-entre-in-on-at",
    title: "A principal diferença entre In, On e At",
    description: "Preposições não precisam ser um bicho de sete cabeças. Um pequeno resumo conceitual que mudará sua forma de pensar.",
    category: "Gramática",
    type: "blog",
    readingTime: "4 min",
    featured: false,
    author: "Equipe Fluent",
    date: "2026-03-15",
    imageUrl: "https://images.unsplash.com/photo-1456953180671-730de08edaa7?q=80&w=2671&auto=format&fit=crop",
    content: `
      <p>Preposições são difíceis porque raramente batem 1 para 1 com o nosso idioma materno. Pense neles como o zoom de uma câmera fotográfica!</p>
      
      <h3>1. IN (Maior / Geral)</h3>
      <p>Usado para coisas onde o espaço físico é bem amplo, ou para tempo bem longo. "In space", "In Brazil", "In the 90s". (A câmera está longe)</p>
      
      <h3>2. ON (Médio / Superfície)</h3>
      <p>Usado para focar em ruas, dias e meios de transporte maiores onde podemos 'ficar de pé'. "On the table", "On Sunday", "On the bus".</p>
      
      <h3>3. AT (Específico / Micro)</h3>
      <p>Usado para pontos precisos de tempo, ou locais muito diretos e definidos. "At 7 PM", "At the corner of the street". (O zoom no máximo)</p>
    `
  },
  {
    id: "h5",
    slug: "shadowing-tecnica-para-falar-como-nativo",
    title: "Shadowing: A técnica para falar como nativo",
    description: "Saiba o que é 'Shadowing' e veja como aplicar pequenos trechos de repetição diária para ganhar controle do ritmo e entonação da sua fala.",
    category: "Pronúncia",
    type: "blog",
    readingTime: "6 min",
    featured: true,
    author: "Rafaella Biasi",
    date: "2026-04-10",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2670&auto=format&fit=crop",
    content: `
      <h2>O que é Shadowing?</h2>
      <p>Shadowing é uma técnica de aprendizado de idiomas hiper-focada na produção vocal. Literalmente o termo vem de 'fazer sombra' à fala de um emissor.</p>
      
      <h2>Como aplicar o Shadowing?</h2>
      <p>Encontre um áudio curto (máximo 1 minuto, como um TED Talk ou podcast narrativo).</p>
      <ol>
        <li>Ouça pela primeira vez com foco na tradução.</li>
        <li>Ouça pela segunda vez acompanhando a transcrição ou legenda.</li>
        <li>Ouça junto do locutor repetindo EXATAMENTE no mesmo tom e ritmo que ele faz, como se fosse um cantor no Karaokê cantando simultaneamente com o artista original.</li>
      </ol>
      <p>Repita isso diariamente e em um mês, os músculos faciais e do aparelho fonador vão ter criado memória de como fluir entre as conexões nervosas ("connected speech") do idioma Inglês.</p>
    `
  },
  {
    id: "h6",
    slug: "ingles-para-viagens-frases-aeroporto",
    title: "Inglês para Viagens: Dezenas de Frases pro Aeroporto",
    description: "E-book completo contendo todas as perguntas e respostas mais comuns que os agentes da alfândega e das companhias aéreas usarão.",
    category: "Materiais Gratuitos",
    type: "material",
    featured: false,
    author: "Rafaella Biasi",
    date: "2026-01-20",
    fileUrl: "#baixar-pdf-aeroporto",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop"
  }
];
