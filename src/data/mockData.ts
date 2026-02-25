import type {
    Book,
    Release,
    Category,
    AgeRange,
    WhyAxionFeature,
    ContactInfo,
    AboutValue,
} from "@/types";

// ─────────────────────────────────────────────
// Categories & Age Ranges (for Catalog filters)
// ─────────────────────────────────────────────

export const categories: Category[] = [
    { id: "c1", name: "Fantasia", slug: "fantasia" },
    { id: "c2", name: "Aventura", slug: "aventura" },
    { id: "c3", name: "Contos", slug: "contos" },
    { id: "c4", name: "Educativo", slug: "educativo" },
    { id: "c5", name: "Ficção Científica", slug: "ficcao-cientifica" },
];

export const ageRanges: AgeRange[] = [
    { id: "a1", label: "0–3 anos", slug: "0-3" },
    { id: "a2", label: "4–6 anos", slug: "4-6" },
    { id: "a3", label: "7–10 anos", slug: "7-10" },
    { id: "a4", label: "11–14 anos", slug: "11-14" },
];

// ─────────────────────────────────────────────
// Book Catalog (9 titles from prototype)
// ─────────────────────────────────────────────

export const books: Book[] = [
    {
        id: "1",
        title: "Dino & Diene em Busca do Tesouro Dourado",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "Dino e Diene são dois dinossauros muito curiosos que adoram explorar. Durante uma tarde de descobertas na própria sala de aula, eles encontram um misterioso baú cheio de moedas douradas! Mas logo percebem que o maior tesouro não é apenas o que brilha, mas sim aprender o que fazer com ele. Embarque com essa duplinha em uma divertida aventura escolar e descubra as primeiras e mais importantes lições sobre como cuidar, poupar e valorizar o seu próprio tesouro!",
        coverImage: "/capas/livro1-Dino&Diene.png",
        genre: "Ficção Científica",
        ageRange: "4–6 anos",
        rating: 4.9,
        isHighlight: true,
        isNew: false,
        tags: ["educativo", "dinossauros", "tesouro"],
        pages: 55,
        publicationYear: "2020",
        isbn: "978-65-89999-01-2",
        authorBio: "Arthur Henrique e Sullivan Soares são escritores e educadores com experiência em literatura infantojuvenil. Apaixonados pelo poder transformador da leitura, dedicam sua carreira a criar histórias que inspiram crianças e jovens a descobrir novos mundos através das páginas de um livro. Seus títulos já conquistaram leitores em todo o Brasil e receberam reconhecimentos em importantes festivais literários nacionais.",
    },
    {
        id: "2",
        title: "O Valor das Coisas: Aventuras da Turma de 4 Patas",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "A Turma de 4 Patas adora passear pelas ruas do bairro, mas hoje o passeio trouxe uma surpresa! Ao encontrarem uma moeda brilhante caída no chão da vila, esses três cãezinhos curiosos começam a se perguntar: de quem é essa moeda? O que podemos fazer com ela? Com a ajuda dos comerciantes locais e de seus donos, eles vão embarcar em uma jornada para entender que tudo ao nosso redor tem um valor, e que o dinheiro serve para muitas coisas legais, mas exige responsabilidade. Uma história divertida sobre amizade, honestidade e as primeiras noções de economia!",
        coverImage: "/capas/livro2-OValorDasCoisas.png",
        genre: "Educativo",
        ageRange: "0–3 anos",
        rating: 4.8,
        isHighlight: true,
        isNew: false,
        tags: ["valores", "cães", "aventura"],
        pages: 36,
        publicationYear: "2022",
        isbn: "978-65-89999-02-9",
        authorBio: "Arthur Henrique e Sullivan Soares formam a dupla ideal por trás da Coleção Educação Financeira. Arthur traz sua bagagem de mais de uma década como pedagogo para garantir que a linguagem seja perfeita para cada ano escolar. Sullivan, consultor financeiro, traduz os fundamentos da economia para o universo infantil. Juntos, eles acreditam que falar sobre o valor das coisas desde cedo é o melhor investimento para o futuro das crianças.",
    },
    {
        id: "3",
        title: "Moedinha Mora e os Pequenos Aventureiros",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "Na pacata vila colorida, a raposinha, a coelhinha e a tartaruga exploradora formam o destemido trio dos Pequenos Aventureiros! Em uma de suas andanças, eles encontram alguém muito especial: a Moedinha Mora, uma moeda mágica e sorridente que tem asinhas e adora viajar por aí. Com a ajuda da Mora, o trio aprenderá de forma lúdica como o dinheiro circula pelo mundo, a importância de poupar para alcançar grandes sonhos e como planejar o futuro. Prepare-se para voar alto nessa aventura econômica!",
        coverImage: "/capas/livro3-MoedinhaMora.png",
        genre: "Educativo",
        ageRange: "4–6 anos",
        rating: 4.7,
        isHighlight: true,
        isNew: false,
        tags: ["educação financeira", "poupança", "aventura mágica"],
        pages: 40,
        publicationYear: "2021",
        isbn: "978-65-89999-03-6",
        authorBio: "Arthur Henrique e Sullivan Soares continuam sua jornada para transformar o Brasil através da educação financeira. Enquanto Arthur, o pedagogo, estrutura a linguagem para o ganho de maturidade dos alunos do 3º ano, Sullivan, o especialista em finanças, introduz conceitos como circulação de moeda e poupança a longo prazo através de metáforas brilhantes.",
    },
    {
        id: "4",
        title: "Os Guerreiros do Valor: A Jornada do Cofre Dourado",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "Três jovens aprendizes são convocados por um sábio mago para a missão mais importante de suas vidas: proteger o lendário Cofre Dourado do Reino de Axion. Para isso, eles precisarão enfrentar as armadilhas de um vilão sombrio que deseja espalhar o desperdício e a impulsividade por todas as vilas. Munidos de coragem, escudos e muita sabedoria matemática, esses novos heróis descobrirão que o verdadeiro poder não está apenas em ganhar riquezas, mas em saber administrá-las e protegê-las. Uma jornada épica onde o planejamento é a melhor magia!",
        coverImage: "/capas/livro4-OsGuerreirosDoValor.png",
        genre: "Aventura",
        ageRange: "7–10 anos",
        rating: 4.9,
        isHighlight: true,
        isNew: false,
        tags: ["fantasia épica", "planejamento financeiro", "rpg educativo"],
        pages: 48,
        publicationYear: "2023",
        isbn: "978-65-89999-04-3",
        authorBio: "Arthur Henrique e Sullivan Soares elevam o nível da Coleção Educação Financeira neste volume. Arthur aplica sua experiência pedagógica para estruturar uma narrativa de transição (capítulos curtos), enquanto Sullivan traduz forças econômicas complexas — como inflação, gastos impulsivos e rendimentos — em aliados e antagonistas de um universo de fantasia, provando sua genialidade em simplificar as finanças.",
    },
    {
        id: "5",
        title: "Finanças em Jogo",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "O mundo dos esportes eletrônicos não perdoa erros, e o jovem protagonista de nossa história sabe bem disso. Focado em levar sua equipe de avatares cibernéticos ao topo do maior campeonato da cidade, ele logo descobre que não basta ter reflexos rápidos no controle: é preciso inteligência tática fora das telas. Para equipar seus personagens e gerenciar sua equipe sob os holofotes e o clamor da torcida, ele aprenderá sobre investimentos, gestão de recursos, patrocínios e os perigos do consumismo digital (como as famosas microtransações). Em 'Finanças em Jogo', dominar a economia é o melhor power-up para garantir a vitória na vida real!",
        coverImage: "/capas/livro8-FinancasEmJogo.jpeg",
        genre: "Educativo",
        ageRange: "11–14 anos",
        rating: 5.0,
        isHighlight: true,
        isNew: false,
        tags: ["e-sports", "gestão de recursos", "games e economia"],
        pages: 80,
        publicationYear: "2025",
        isbn: "978-65-89999-08-1",
        authorBio: "Arthur Henrique e Sullivan Soares provam mais uma vez que entendem a mente dos jovens. Arthur utiliza sua vasta experiência para traduzir o ritmo frenético e a linguagem dos games para as páginas do livro, enquanto Sullivan mergulha na 'economia dos jogos', ensinando aos adolescentes como aplicar conceitos reais de planejamento e gestão de capital dentro e fora do ambiente virtual.",
    },
];

/** Subset of books flagged as highlights for the Home page */
export const highlightedBooks: Book[] = books.filter((b) => b.isHighlight);

/** Subset of books flagged as new for the Home page Novidades section */
export const newBooks: Book[] = books.filter((b) => b.isNew);

// ─────────────────────────────────────────────
// New Releases (6 titles from /lancamentos)
// ─────────────────────────────────────────────

export const releases: Release[] = [
    {
        id: "6",
        title: "O Grande Projeto do 5º Ano",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "A turma chegou ao seu último ano no Ensino Fundamental 1, e a professora lançou o maior desafio de todos! Três grandes amigos decidem unir forças para criar um projeto inovador para a escola. Com a ajuda de um tablet, muita pesquisa e gráficos de crescimento, eles vão aprender na prática como criar um orçamento, estabelecer metas, dividir tarefas e fazer uma grande ideia decolar como um verdadeiro foguete! Uma história inspiradora sobre empreendedorismo, trabalho em equipe e como planejar o sucesso.",
        coverImage: "/capas/livro5-OGrandeProjeto.png",
        genre: "Contos",
        ageRange: "11–14 anos",
        rating: 4.4,
        isNew: true,
        tags: ["empreendedorismo", "trabalho em equipe", "planejamento e metas"],
        pages: 75,
        publishedAt: "2026-10-10",
        isbn: "978-65-89999-05-0",
        authorBio: "Arthur Henrique e Sullivan Soares concluem a primeira fase da Coleção Educação Financeira com maestria. Nesta obra, a sensibilidade pedagógica de Arthur se une aos conhecimentos práticos de mercado de Sullivan para introduzir conceitos reais de planejamento de projetos e leitura de dados financeiros, capacitando as crianças a se tornarem os verdadeiros protagonistas de seus futuros.",
    },
    {
        id: "7",
        title: "Os Heróis da Economia",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "A grande metrópole está sob a ameaça do nefasto vilão Descontrole, uma figura sombria que espalha a armadilha do endividamento e suga a estabilidade da cidade! Para detê-lo, surge uma nova aliança de defensores: Os Heróis da Economia. Manipulando moedas digitais, criando campos de força contra gastos impulsivos e lendo dados de mercado na velocidade da luz, essa equipe extraordinária ensinará aos jovens como combater os vilões do dia a dia, como a inflação e os juros abusivos. Uma aventura eletrizante onde a inteligência financeira é o seu maior superpoder!",
        coverImage: "/capas/livro6-OsHeroisDaEconomia.png",
        genre: "Fantasia",
        ageRange: "11–14 anos",
        rating: 5.0,
        isNew: true,
        tags: ["super-heróis", "educação financeira", "ação e estratégia"],
        pages: 64,
        publishedAt: "2026-11-15",
        isbn: "978-65-89999-06-7",
        authorBio: "Arthur Henrique e Sullivan Soares iniciam a segunda etapa da sua aclamada coleção mergulhando no universo pré-adolescente. Arthur adapta sua metodologia pedagógica para a linguagem ágil e visual dos quadrinhos, enquanto Sullivan eleva o nível dos conceitos financeiros, introduzindo noções de macroeconomia, moedas digitais e proteção de patrimônio de uma forma que os jovens leitores jamais esquecerão.",
    },
    {
        id: "8",
        title: "Operação Futuro",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "Em uma megacidade do futuro, onde a tecnologia domina todas as transações, três cadetes curiosos encontram um artefato raro esquecido nas antigas ruínas da metrópole: um livro de papel que projeta uma inteligência artificial guardiã de segredos antigos! Através desse holograma, eles descobrem que a verdadeira economia não é feita apenas de algoritmos e créditos virtuais, mas de planejamento, sustentabilidade e escolhas inteligentes para preservar os recursos do planeta. Eles terão que decifrar esses enigmas financeiros para evitar um colapso no sistema. A 'Operação Futuro' já começou, e entender o passado é a única forma de salvar o amanhã!",
        coverImage: "/capas/livro7-OperacaoFuturo.png",
        genre: "Ficção Científica",
        ageRange: "11–14 anos",
        rating: 4.9,
        isNew: true,
        tags: ["ficção científica", "sustentabilidade financeira", "tecnologia e inovação"],
        pages: 80,
        publishedAt: "2026-12-20",
        isbn: "978-65-89999-07-4",
        authorBio: "Arthur Henrique e Sullivan Soares se consagram como mestres em dialogar com as diferentes fases da juventude. Nesta obra, a sensibilidade pedagógica de Arthur guia uma narrativa densa e questionadora, enquanto Sullivan transporta a economia para o futuro, discutindo tendências tecnológicas, sustentabilidade financeira e o impacto de nossas escolhas a longo prazo no mundo ao nosso redor.",
    },
    {
        id: "9",
        title: "Jornada 9.0: O Aplicativo de Gastos",
        author: "Arthur Henrique e Sullivan Soares",
        description:
            "O último ano do Ensino Fundamental 2 chegou, e com ele, a necessidade de planejar a tão sonhada formatura! Percebendo que a turma está com dificuldades para juntar dinheiro, três alunos brilhantes decidem programar a 'Jornada 9.0', um aplicativo de gastos feito sob medida para estudantes. Mas quando o app viraliza nos corredores da escola e até na cidade, eles descobrem que lidar com o dinheiro real exige muito mais do que apenas escrever linhas de código. Eles precisarão de disciplina, segurança digital e inteligência financeira para transformar o mundo virtual em conquistas no mundo real.",
        coverImage: "/capas/livro9-Jornada.jpeg",
        genre: "Educativo",
        ageRange: "11–14 anos",
        rating: 5.0,
        isNew: true,
        tags: ["tecnologia", "gestão financeira", "aplicativo"],
        pages: 88,
        publishedAt: "2027-01-05",
        isbn: "978-65-89999-09-8",
        authorBio: "Arthur Henrique e Sullivan Soares encerram a Coleção Educação Financeira mostrando que estão perfeitamente sintonizados com o século XXI. Arthur constrói uma narrativa envolvente sobre os dilemas do fim do ensino fundamental, enquanto Sullivan desmistifica ferramentas financeiras modernas, ensinando aos jovens como a tecnologia pode ser a maior aliada na hora de construir um futuro próspero.",
    },
];

// ─────────────────────────────────────────────
// Home — "Por que escolher a Axion?" section
// ─────────────────────────────────────────────

export const whyAxionFeatures: WhyAxionFeature[] = [
    {
        iconKey: "sparkles",
        title: "Histórias Originais",
        description:
            "Narrativas criativas e envolventes criadas por autores brasileiros talentosos.",
    },
    {
        iconKey: "star",
        title: "Qualidade Garantida",
        description:
            "Ilustrações incríveis e edições cuidadosamente produzidas para encantar.",
    },
    {
        iconKey: "heart",
        title: "Feito com Amor",
        description:
            "Cada livro é pensado para criar momentos especiais entre pais e filhos.",
    },
];

// ─────────────────────────────────────────────
// About page — Values section
// ─────────────────────────────────────────────

export const aboutValues: AboutValue[] = [
    {
        iconKey: "lightbulb",
        title: "Criatividade",
        description:
            "Acreditamos que cada história é uma porta para um novo universo de possibilidades.",
    },
    {
        iconKey: "award",
        title: "Qualidade",
        description:
            "Cada detalhe importa: do texto à ilustração, da capa ao papel escolhido.",
    },
    {
        iconKey: "users",
        title: "Inclusão",
        description:
            "Histórias que representam a diversidade brasileira e criam empatia.",
    },
];

// ─────────────────────────────────────────────
// Contact page
// ─────────────────────────────────────────────

export const contactInfo: ContactInfo = {
    email: "contato@axioneditora.com.br",
    phone: "(11) 97491-1974",
    address: "Avenida São Camilo, n° 1814, Sala 13 Conjunto 02 - Vilarejo, Carapicuíba - SP",
};
