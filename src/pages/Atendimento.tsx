import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Crown,
  HeartHandshake,
  Sparkles,
  Star,
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

const steps = [
  { number: '01', title: 'Contato', text: 'Entre em contato e compartilhe sua ideia.' },
  { number: '02', title: 'Alinhamento', text: 'Conversamos sobre estilo, referências e desejo.' },
  { number: '03', title: 'Agendamento', text: 'Definimos a data e todos os detalhes do atendimento.' },
  { number: '04', title: 'Grande dia', text: 'Seu look fica pronto para você brilhar com confiança.' },
];

const specialties = [
  'Maquiagem para Noivas',
  'Maquiagem para Madrinhas',
  'Maquiagem para Formandas',
  'Produções para Eventos',
];

const testimonials = [
  {
    quote: 'O atendimento foi impecável, acolhedor e transformador. Senti uma verdadeira experiência premium.',
    name: 'Marina A.',
  },
  {
    quote: 'A maquiagem ficou linda, elegante e impecável para o meu grande dia. Super recomendo.',
    name: 'Carolina S.',
  },
  {
    quote: 'Cada detalhe foi pensado com excelência. A confiança que senti foi única.',
    name: 'Beatriz M.',
  },
];

const casamentosUrl = 'https://m.casamentos.com.br/beleza-noivas/dayane-galdino-beauty--e224406';

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

            <div className="heroActions">
              <a className="button primary" href={casamentosUrl} target="_blank" rel="noopener noreferrer">
                Agendar atendimento
                <ArrowRight size={18} />
              </a>

              <a className="button ghost darkGhost" href="#sobre-dayane">
                Conhecer mais
              </a>
            </div>
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

        <section className="atendimentoSection timelineSection">
          <div className="sectionHeading">
            <span className="eyebrow dark">COMO FUNCIONA</span>
            <h2>
              Uma experiência guiada,
              <br />
              <em>do primeiro contato ao grande dia.</em>
            </h2>
          </div>

          <div className="timeline">
            {steps.map((step, index) => (
              <div className="timelineWrap" key={step.title}>
                <article className="timelineItem">
                  <span className="timelineNumber">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
                {index < steps.length - 1 && <div className="timelineArrow">↓</div>}
              </div>
            ))}
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
              A profissional foi reconhecida com o prêmio Wedding Awards 2026 do Casamentos.com,
              reforçando sua presença e excelência no universo de beleza para noivas.
            </p>
          </div>

          <div className="awardBadge">
            <a href={casamentosUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn1.casamentos.com.br/img/badges/2026/badge-weddingawards_pt_BR.jpg"
                alt="Wedding Awards 2026"
              />
            </a>
          </div>
        </section>

        <section className="atendimentoSection testimonialsSection">
          <div className="sectionHeading">
            <span className="eyebrow dark">AVALIAÇÕES</span>
            <h2>
              Depoimentos que revelam
              <br />
              <em>o impacto do atendimento.</em>
            </h2>
          </div>

          <div className="testimonialsGrid">
            {testimonials.map((testimonial) => (
              <article className="testimonialCard" key={testimonial.name}>
                <div className="testimonialStars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="atendimentoSection finalCtaSection">
          <img src={ctaImage} alt="Dayane Galdino Beauty Studio" />
          <div className="finalCtaOverlay" />

          <div className="finalCtaContent">
            <span className="eyebrow">PRONTA PARA O SEU DIA?</span>
            <h2>
              Vamos conversar sobre o seu
              <br />
              <em>grande dia?</em>
            </h2>
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
