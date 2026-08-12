import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Crown,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import aboutImage from '../assets/images/dayane.jpeg';
import ctaImage from '../assets/images/dayanemake.jpeg';
import noiva2Image from '../assets/images/noiva2.jpeg';
import Header from '../components/Header';

const casamentosUrl = 'https://wa.me/';

function Atendimento() {
  return (
    <div className="atendimentoPage">
      <Header backTo="/" backLabel="Home" backAriaLabel="Voltar para a página inicial" ctaLabel="Agendar" ctaHref={casamentosUrl} showCta />

      <main>
        <section className="atendimentoHero atendimentoSection">
          <div className="atendimentoHeroContent">
            <span className="eyebrow dark">BELEZA DA NOIVA</span>

            <h1>
              Experiência Dayane Galdino Beauty
            </h1>

            <p>
              O Dia da Noiva Maison foi criado para noivas que desejam viver o seu grande dia com tranquilidade, segurança e a certeza de que cada detalhe da sua beleza está sendo cuidadosamente conduzido por uma especialista.
            </p>

            <p>
              Para mulheres que valorizam uma experiência exclusiva, organizada e sofisticada, onde beleza e acolhimento caminham juntos para tornar esse momento ainda mais especial.
            </p>

          </div>

          <div className="atendimentoHeroVisual">
            <img src={noiva2Image} alt="Dayane Galdino em atendimento" />
          </div>
        </section>

        <section className="atendimentoSection">
          <div className="sectionHeading">
            <span className="eyebrow dark">O QUE VOCÊ IRÁ VIVER</span>
            <h2>
              Mais do que maquiagem e penteado,
              <br />
              <em>uma experiência completa</em>
            </h2>
          </div>

          <div className="featuresGrid">
            {[
              {
                icon: Sparkles,
                title: 'Atendimento exclusivo e personalizado',
                text: 'Um cuidado pensado para valorizar sua beleza, seu estilo e a sua essência.',
              },
              {
                icon: BadgeCheck,
                title: 'Briefing De Beleza',
                text: 'Consultoria de imagem e direcionamento estético para um resultado alinhado ao seu momento.',
              },
              {
                icon: Crown,
                title: 'Teste de maquiagem e penteado',
                text: 'Definição do seu estilo com escolha certeira para a sua aparência no grande dia.',
              },
              {
                icon: Sparkles,
                title: 'Técnica de alta performance',
                text: 'Pele de alta resistência para manter sua beleza impecável por mais tempo.',
              },
              {
                icon: Clock3,
                title: 'Cronograma estratégico',
                text: 'Planejamento para um dia tranquilo, organizado e sem imprevistos.',
              },
              {
                icon: HeartHandshake,
                title: 'Organização dos atendimentos',
                text: 'Acompanhamento cuidadoso de mães, madrinhas e familiares para manter todo o processo harmonioso.',
              },
              {
                icon: Sparkles,
                title: 'Suporte para making of, fotos e filmagens',
                text: 'Assistência para que seus registros fiquem ainda mais especiais e naturais.',
              },
              {
                icon: BadgeCheck,
                title: 'Direção de beleza',
                text: 'Orientação para valorizar cada detalhe dos seus registros com elegância.',
              },
              {
                icon: Crown,
                title: 'Equipe preparada',
                text: 'Excelência em cada etapa para que você viva o seu dia com leveza e confiança.',
              },
              {
                icon: HeartHandshake,
                title: 'Acompanhamento profissional do início ao fim',
                text: 'Uma experiência cuidadosa e segura em cada momento da sua preparação.',
              },
              {
                icon: BadgeCheck,
                title: 'Contrato, planejamento e atendimento',
                text: 'Tudo conduzido com total profissionalismo e organização para sua tranquilidade.',
              },
            ].map((feature) => {
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

        <section className="atendimentoSection aboutDayaneSection" id="sobre-dayane">
          <div className="aboutDayaneImage">
            <img src={aboutImage} alt="Dayane Galdino" />
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
