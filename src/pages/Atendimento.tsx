import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Crown,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import heroImage from '../assets/images/dayanepose.PNG';
import aboutImage from '../assets/images/dayane.jpeg';
import ctaImage from '../assets/images/dayanemake.jpeg';
import Header from '../components/Header';

const features = [
  {
    icon: Sparkles,
    title: 'Atendimento personalizado',
    text: 'Cada detalhe é pensado para valorizar sua beleza e refletir sua personalidade.',
  },
  {
    icon: BadgeCheck,
    title: 'Produtos profissionais',
    text: 'Utilizo produtos de alto padrão para um resultado sofisticado e duradouro.',
  },
  {
    icon: Clock3,
    title: 'Pontualidade',
    text: 'Organização e atenção aos detalhes para que seu dia aconteça com tranquilidade.',
  },
  {
    icon: HeartHandshake,
    title: 'Experiência com noivas',
    text: 'Um acolhimento especial para que você se sinta segura e encantada.',
  },
];

const specialties = [
  'Maquiagem para Noivas',
  'Maquiagem para Madrinhas',
  'Maquiagem para Formandas',
  'Produções para Eventos',
];

const casamentosUrl = 'https://wa.me/';

function Atendimento() {
  return (
    <div className="atendimentoPage">
      <Header backTo="/" backLabel="Home" backAriaLabel="Voltar para a página inicial" ctaLabel="Agendar" ctaHref={casamentosUrl} showCta />

      <main>
        <section className="atendimentoHero atendimentoSection">
          <div className="atendimentoHeroContent">
            <span className="eyebrow dark">ATENDIMENTO PREMIUM</span>

            <h1>
              Seu grande dia merece uma
              <br />
              <em>maquiagem inesquecível.</em>
            </h1>

            <p>
              Um atendimento sofisticado, acolhedor e cuidadosamente pensado para destacar sua beleza,
              valorizar seus traços e deixar sua presença ainda mais memorável.
            </p>

          </div>

          <div className="atendimentoHeroVisual">
            <img src={heroImage} alt="Dayane Galdino em atendimento" />
          </div>
        </section>

        <section className="atendimentoSection">
          <div className="sectionHeading">
            <span className="eyebrow dark">POR QUE ESCOLHER</span>
            <h2>
              Um atendimento feito para
              <br />
              <em>exaltar sua essência.</em>
            </h2>
          </div>

          <div className="featuresGrid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="featureCard" key={feature.title}>
                  <div className="featureIcon">
                    <Icon size={18} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>


        <section className="atendimentoSection">
          <div className="sectionHeading">
            <span className="eyebrow dark">ESPECIALIDADES</span>
            <h2>
              Soluções pensadas para cada
              <br />
              <em>momento especial.</em>
            </h2>
          </div>

          <div className="specialtiesGrid">
            {specialties.map((specialty) => (
              <article className="specialtyCard" key={specialty}>
                <div className="specialtyIcon">
                  <Crown size={18} />
                </div>
                <h3>{specialty}</h3>
                <p>Um resultado elegante, sofisticado e alinhado com sua personalidade.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="atendimentoSection aboutDayaneSection" id="sobre-dayane">
          <div className="aboutDayaneImage">
            <img src={aboutImage} alt="Dayane Galdino" />
          </div>

          <div className="aboutDayaneContent">
            <span className="eyebrow dark">SOBRE A DAYANE</span>
            <h2>
              Mais que beleza,
              <br />
              <em>uma presença marcada.</em>
            </h2>
            <p>
              Com sensibilidade, técnica e olhar artístico, Dayane transforma momentos especiais em
              experiências memoráveis, sempre com elegância e personalidade.
            </p>
            <p>
              Em breve, aqui você poderá encontrar mais detalhes sobre formação, trajetória e experiências
              que reforçam a excelência do atendimento.
            </p>
          </div>
        </section>

        <section className="atendimentoSection awardSection">
          <div className="awardContent">
            <span className="eyebrow dark">WEDDING AWARDS</span>
            <h2>
              Reconhecimento de destaque para
              <br />
              <em>uma experiência de alto padrão.</em>
            </h2>
            <p>
              A profissional foi reconhecida com os prêmios Wedding Awards 2024, 2025 e 2026 do
              Casamentos.com, reforçando sua presença e excelência no universo de beleza para noivas.
            </p>
          </div>

          <div className="awardBadge">
            <a
              href={casamentosUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Dayane Galdino Beauty, ganhador Casamentos Awards 2024 de Casamentos.com.br"
            >
              <img
                src="https://cdn1.casamentos.com.br/img/badges/2024/badge-weddingawards_pt_BR.jpg"
                alt="Dayane Galdino Beauty, ganhador Casamentos Awards 2024 de Casamentos.com.br"
                loading="lazy"
              />
            </a>
            <a
              href={casamentosUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Dayane Galdino Beauty, ganhador Casamentos Awards 2025 de Casamentos.com.br"
            >
              <img
                src="https://cdn1.casamentos.com.br/img/badges/2025/badge-weddingawards_pt_BR.jpg"
                alt="Dayane Galdino Beauty, ganhador Casamentos Awards 2025 de Casamentos.com.br"
                loading="lazy"
              />
            </a>
            <a
              href={casamentosUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Dayane Galdino Beauty, ganhador Casamentos Awards 2026 de Casamentos.com.br"
            >
              <img
                src="https://cdn1.casamentos.com.br/img/badges/2026/badge-weddingawards_pt_BR.jpg"
                alt="Dayane Galdino Beauty, ganhador Casamentos Awards 2026 de Casamentos.com.br"
                loading="lazy"
              />
            </a>
          </div>
        </section>

        <section className="atendimentoSection finalCtaSection">
          <img src={ctaImage} alt="Dayane Galdino Beauty Studio" />
          <div className="finalCtaOverlay" />

          <div className="finalCtaContent">
            <span className="eyebrow">PRONTA PARA O SEU DIA?</span>
            <div className="finalCtaConcerto">
              <h2>
                Vamos conversar sobre o seu
                <br />
                <em>grande dia?</em>
              </h2>
            </div>
            <a className="button light" href={casamentosUrl} target="_blank" rel="noopener noreferrer">
              Agendar atendimento
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Atendimento;
