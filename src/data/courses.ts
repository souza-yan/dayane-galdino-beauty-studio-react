import automaquilhagemImage from '../assets/images/dayanemake.jpeg';
import maquiagemProfissionalImage from '../assets/images/dayanecomputador.jpeg';
import belezaImagemImage from '../assets/images/dayanepose.PNG';
import packnoiva1 from '../assets/images/packnoivas1.jpeg';
import packnoiva2 from '../assets/images/packnoivas2.jpeg';
import packnoiva3 from '../assets/images/packnoivas3.jpeg';

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

  audienceTitle: string;

  audienceDescription: string;

  galleryImages: string[];

  materials: {
    title: string;
    description: string;
    image: string;
  }[];

  finalImage: string;

  hotmart: string;
}

export const courses: Course[] = [
  {
    id: 1,

    slug: "automaquiagem",

    category: "CURSO ONLINE",

    title: "Automaquiagem",

    image: automaquilhagemImage,

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

    galleryImages: [automaquilhagemImage, maquiagemProfissionalImage, belezaImagemImage],

    materials: [
      {
        title: 'Guia exclusivo',
        description: 'Materiais práticos para revisar cada técnica sempre que precisar.',
        image: maquiagemProfissionalImage,
      },
      {
        title: 'Acesso VIP',
        description: 'Receba conteúdos complementares e atualizações direto na sua rotina.',
        image: automaquilhagemImage,
      },
      {
        title: 'Bônus especial',
        description: 'Ferramentas e dicas para deixar sua maquiagem ainda mais profissional.',
        image: belezaImagemImage,
      },
    ],

    finalImage: maquiagemProfissionalImage,

    audienceTitle: "Perfeito para quem quer aprender maquiagem prática e transformar sua rotina.",

    audienceDescription: "Este curso é ideal para quem deseja dominar a automaquiagem com técnicas claras e eficientes. Você aprenderá a escolher os produtos certos, aplicar cada etapa com confiança e criar looks que realcem sua beleza natural.\n\nSe você quer economizar tempo, reduzir erros e se sentir preparada para qualquer ocasião, este é o curso certo.",

    hotmart: "https://hotmart.com/"
  },

  {
    id: 2,

    slug: "maquiagem-profissional",

    category: "CURSO ONLINE",

    title: "Pack de Noivas",

    image: maquiagemProfissionalImage,

    shortDescription:
      " Aprenda técnicas utilizadas por profissionais e eleve seu nível.",

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

    galleryImages: [packnoiva1, packnoiva2, packnoiva3],

    materials: [
      {
        title: 'Guia exclusivo',
        description: 'Materiais práticos para revisar cada técnica sempre que precisar.',
        image: automaquilhagemImage,
      },
      {
        title: 'Acesso VIP',
        description: 'Receba conteúdos complementares e atualizações direto na sua rotina.',
        image: maquiagemProfissionalImage,
      },
      {
        title: 'Bônus especial',
        description: 'Ferramentas e dicas para deixar sua maquiagem ainda mais profissional.',
        image: belezaImagemImage,
      },
    ],

    finalImage: belezaImagemImage,

    audienceTitle: "Ideal para maquiadoras que querem elevar o atendimento de noivas.",

    audienceDescription: "Se você trabalha com maquiagem ou quer transformar sua paixão em profissão, este curso traz as bases para atender noivas com segurança e estilo. Aprenda a construir um processo organizado, entregar resultados consistentes e fidelizar clientes com looks sofisticados.",

    hotmart: "https://hotmart.com/"
  },

  {
    id: 3,

    slug: "beleza-imagem",

    category: "CURSO ONLINE",

    title: "Método DG Beauty",

    image: belezaImagemImage,

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

    galleryImages: [belezaImagemImage, automaquilhagemImage, maquiagemProfissionalImage],

    materials: [
      {
        title: 'Guia exclusivo',
        description: 'Materiais práticos para revisar cada técnica sempre que precisar.',
        image: automaquilhagemImage,
      },
      {
        title: 'Acesso VIP',
        description: 'Receba conteúdos complementares e atualizações direto na sua rotina.',
        image: maquiagemProfissionalImage,
      },
      {
        title: 'Bônus especial',
        description: 'Ferramentas e dicas para deixar sua maquiagem ainda mais profissional.',
        image: belezaImagemImage,
      },
    ],

    finalImage: automaquilhagemImage,

    audienceTitle: "Para quem quer usar a maquiagem como ferramenta de imagem pessoal.",

    audienceDescription: "Este curso foi desenhado para mulheres que desejam destacar sua beleza natural e transmitir mais confiança em todas as situações. Você vai descobrir como criar looks elegantes que reflitam sua identidade, sem complicação e com resultados duradouros.",

    hotmart: "https://hotmart.com/"
  }
];
