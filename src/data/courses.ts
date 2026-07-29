export interface Course {
  id: number;
  slug: string;

  category: string;

  title: string;

  image: string;

  shortDescription: string;

  heroTitle: string;

  heroDescription: string;

  why: string[];

  learn: string[];

  audience: string[];

  modules: string[];

  hotmart: string;
}

export const courses: Course[] = [
  {
    id: 1,

    slug: "automaquiagem",

    category: "CURSO ONLINE",

    title: "Automaquiagem",

    image: "/src/assets/images/dayanemake.jpeg",

    shortDescription:
      "Aprenda técnicas práticas para valorizar sua beleza em qualquer ocasião.",

    heroTitle:
      "Aprenda a se maquiar com segurança e conquistar resultados incríveis.",

    heroDescription:
      "Descubra um método simples para criar maquiagens elegantes sem depender de tutoriais aleatórios na internet.",

    why: [
      "Você nunca sabe quais produtos usar.",
      "Sua maquiagem dura pouco tempo.",
      "Você sente dificuldade para esfumar.",
      "Quer economizar aprendendo a fazer sua própria maquiagem."
    ],

    learn: [
      "Preparação correta da pele",
      "Como escolher os produtos ideais",
      "Esfumado profissional",
      "Contorno e iluminação",
      "Maquiagem para eventos",
      "Finalização perfeita"
    ],

    audience: [
      "Iniciantes",
      "Quem deseja aprender do zero",
      "Quem ama maquiagem",
      "Quem quer economizar com maquiagem profissional"
    ],

    modules: [
      "Boas-vindas",
      "Preparação da pele",
      "Correções",
      "Olhos",
      "Lábios",
      "Maquiagem completa"
    ],

    hotmart: "https://hotmart.com/"
  },

  {
    id: 2,

    slug: "maquiagem-profissional",

    category: "CURSO ONLINE",

    title: "Maquiagem Profissional",

    image: "/src/assets/images/dayanecomputador.jpeg",

    shortDescription:
      "Aprenda técnicas utilizadas por profissionais e eleve seu nível.",

    heroTitle:
      "Transforme sua paixão por maquiagem em uma habilidade profissional.",

    heroDescription:
      "Aprenda técnicas utilizadas em atendimentos reais e desenvolva segurança para maquiar qualquer cliente.",

    why: [
      "Você quer trabalhar com maquiagem.",
      "Tem dificuldade em atender clientes.",
      "Deseja elevar a qualidade dos seus atendimentos.",
      "Quer aumentar sua renda."
    ],

    learn: [
      "Colorimetria",
      "Peles maduras",
      "Noivas",
      "Fotografia",
      "Produtos profissionais",
      "Atendimento ao cliente"
    ],

    audience: [
      "Maquiadores iniciantes",
      "Profissionais",
      "Quem deseja empreender"
    ],

    modules: [
      "Fundamentos",
      "Colorimetria",
      "Noivas",
      "Peles negras",
      "Peles maduras",
      "Marketing"
    ],

    hotmart: "https://hotmart.com/"
  },

  {
    id: 3,

    slug: "beleza-imagem",

    category: "CURSO ONLINE",

    title: "Beleza e Imagem",

    image: "/src/assets/images/dayanepose.PNG",

    shortDescription:
      "Desenvolva sua autoestima e descubra sua melhor versão.",

    heroTitle:
      "Sua imagem comunica muito antes das palavras.",

    heroDescription:
      "Aprenda como destacar sua beleza natural, fortalecer sua autoestima e transmitir mais confiança.",

    why: [
      "Você sente insegurança com sua aparência.",
      "Não sabe valorizar seus pontos fortes.",
      "Quer melhorar sua imagem pessoal."
    ],

    learn: [
      "Autoconhecimento",
      "Imagem pessoal",
      "Cores",
      "Estilo",
      "Confiança",
      "Posicionamento"
    ],

    audience: [
      "Mulheres de todas as idades",
      "Empreendedoras",
      "Quem busca autoestima"
    ],

    modules: [
      "Imagem",
      "Estilo",
      "Cores",
      "Beleza",
      "Autoestima",
      "Plano de evolução"
    ],

    hotmart: "https://hotmart.com/"
  }
];