import { ArrowRight, Check, ChevronRight, Crown, Sparkles } from 'lucide-react';

import Header from '../components/Header';

const WHATSAPP_NUMBER = 'SEU_NUMERO_AQUI';

const courseBlocks = [
  {
    id: 'maquiagem',
    title: 'CURSO DE MAQUIAGEM PROFISSIONAL',
    subtitle:
      'Aprenda a criar maquiagens que impressionam pela beleza, acabamento e durabilidade.',
    paragraph:
      'Um curso completo para quem está começando ou para profissionais que desejam aperfeiçoar suas técnicas e entregar resultados cada vez mais sofisticados.',
    bullets: [
      'Pele impecável e de alta durabilidade',
      'Técnicas modernas de olhos e acabamento profissional',
      'Correções e valorização dos traços da cliente',
      'Atendimento com mais segurança e confiança',
      'Métodos para gerar mais valor ao seu trabalho',
    ],
    finalParagraphs: [
      'Porque uma maquiagem bonita chama atenção. Uma maquiagem bem executada gera indicações e fideliza clientes.',
    ],
    buttonLabel: 'Quero o Curso de Maquiagem',
    buttonMessage:
      'Vim pelo site Dayane Galdino Beauty e quero informações sobre o Curso de Maquiagem Profissional',
    icon: Sparkles,
  },
  {
    id: 'penteado',
    title: 'CURSO DE PENTEADO PROFISSIONAL',
    subtitle: 'Transforme penteados em verdadeiras obras de arte.',
    paragraph:
      'Aprenda técnicas que unem estrutura, leveza, durabilidade e elegância para atender desde eventos sociais até noivas.',
    bullets: [
      'Estruturas e preparação dos fios',
      'Penteados modernos e atemporais',
      'Técnicas para maior fixação e resistência',
      'Acabamentos refinados e valorizados pelo mercado',
      'Adaptação do penteado ao estilo de cada cliente',
    ],
    finalParagraphs: [
      'Para profissionais que desejam entregar resultados memoráveis e aumentar o valor percebido dos seus atendimentos.',
    ],
    buttonLabel: 'Quero o Curso de Penteado',
    buttonMessage:
      'Vim pelo site Dayane Galdino Beauty e quero informações sobre o Curso de Penteado Profissional',
    icon: Crown,
  },
  {
    id: 'noivas',
    title: 'FORMAÇÃO ESPECIALISTA EM NOIVAS',
    subtitle:
      'A formação que ensina o que realmente faz uma profissional ser escolhida pelas noivas.',
    paragraph:
      'Você aprenderá muito além da maquiagem e do penteado. Entenderá como criar uma experiência completa, gerar confiança e se tornar referência no mercado de casamentos.',
    bullets: [
      'Como conduzir a jornada da noiva do primeiro contato ao grande dia',
      'Planejamento estratégico e cronograma do Dia da Noiva',
      'Consultoria de imagem e direção de beleza',
      'Organização e gestão dos atendimentos',
      'Posicionamento e autoridade para atrair noivas ideais',
      'Como cobrar mais através da experiência e não apenas da técnica',
      'Relacionamento com assessoras, fotógrafos e fornecedores',
      'Estratégias para encantar, fidelizar e receber indicações constantes',
    ],
    finalParagraphs: [
      'Não se trata apenas de aprender uma profissão. Trata-se de construir uma carreira sólida, valorizada e reconhecida em um dos mercados mais apaixonantes da beleza.',
      'A profissional que você sonha se tornar começa com a decisão que você toma hoje.',
      'Descubra qual formação faz sentido para o seu momento e dê o próximo passo na sua evolução profissional. Conheça os cursos disponíveis e transforme seu talento em autoridade.',
    ],
    buttonLabel: 'Quero a Formação Especialista em Noivas',
    buttonMessage:
      'Vim pelo site Dayane Galdino Beauty e quero informações sobre a Formação Especialista em Noivas',
    icon: Check,
  },
];

const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function CursosPresenciais() {
  return (
    <div className="coursePage">
      <Header backTo="/" backLabel="Home" backAriaLabel="Voltar para a página inicial" />

      <section className="courseHero">
        <div
          className="courseHeroImage"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80')" }}
        />

        <div className="courseHeroOverlay" />

        <div className="courseHeroText">
          <h1>Formações que elevam a sua técnica e o seu valor profissional.</h1>
          <p>
            Descubra os cursos pensados para quem quer crescer na beleza, aprimorar a execução e
            se destacar em um mercado cada vez mais exigente.
          </p>
          <div className="courseHeroActions">
            <a href="#maquiagem" className="button primary">
              Ver cursos
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <main>
        {courseBlocks.map((block) => {
          const Icon = block.icon;

          return (
            <section key={block.id} id={block.id} className="coursePresencialSection">
              <div className="coursePresencialInner">
                <div className="coursePresencialHeader">
                  <span className="eyebrow dark">FORMAÇÃO</span>
                  <h2>{block.title}</h2>
                </div>

                <div className="coursePresencialLead">
                  <p className="coursePresencialSubtitle">{block.subtitle}</p>
                  <p>{block.paragraph}</p>
                </div>

                <ul className="coursePresencialList">
                  {block.bullets.map((item) => (
                    <li key={item} className="coursePresencialItem">
                      <span className="coursePresencialIcon">
                        <Icon size={18} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="coursePresencialFooter">
                  {block.finalParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="coursePresencialAction">
                  <a
                    className="button primary"
                    href={buildWhatsAppLink(block.buttonMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {block.buttonLabel}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default CursosPresenciais;
