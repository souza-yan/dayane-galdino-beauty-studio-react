import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Check,
  ChevronRight,
} from "lucide-react";

import Header from '../components/Header';
import { courses } from "../data/courses";

function Curso() {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLDivElement>('.revealItem'));
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  if (!course) {
    return (
      <div className="courseNotFound">

        <h1>Curso não encontrado.</h1>

        <Link to="/cursos">
          Voltar para os cursos
        </Link>

      </div>
    );
  }

  return (
    <div className="coursePage">

      <Header backTo="/cursos" backLabel="Cursos" backAriaLabel="Voltar para a página de cursos" />

      {/* HERO */}
      <section className="courseHero">
        <div
          className="courseHeroImage"
          style={{ backgroundImage: `url(${course.image})` }}
        />

        <div className="courseHeroOverlay" />

        <div className="courseHeroText">
          <span className="eyebrow dark">{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.heroDescription}</p>
          <div className="courseHeroActions">
            <a href="#offer" className="button primary">
              Obter acesso
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="courseSection">
        <div className="sectionTitle">
          <span className="eyebrow dark">PARA QUEM É ESTE CURSO</span>
          <h2>{course.audienceTitle}</h2>
        </div>

        <div className="courseAudienceText">
          {course.audienceDescription.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="courseSection gallerySection">
        <div className="sectionTitle">
        </div>

        <div className="galleryList">
          {course.galleryImages.map((src, index) => (
            <div key={index} className="galleryItem revealItem">
              <img src={src} alt={`${course.title} ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="courseSection alt materialsSection">
        <div className="sectionTitle">
          <span className="eyebrow dark">MATERIAIS EXCLUSIVOS</span>
          <h2>Recursos preparados para apoiar sua prática.</h2>
        </div>

        <div className="materialsGrid">
          <article className="materialCard revealItem">
            <div className="materialIcon">
              <Check size={20} />
            </div>
            <h3>Guia rápido</h3>
            <p>Resumo prático com as principais técnicas para revisar sempre.</p>
          </article>

          <article className="materialCard revealItem">
            <div className="materialIcon">
              <Check size={20} />
            </div>
            <h3>Acesso direto</h3>
            <p>Conteúdo organizado para você estudar no seu ritmo e sem enrolação.</p>
          </article>

          <article className="materialCard revealItem">
            <div className="materialIcon">
              <Check size={20} />
            </div>
            <h3>Suporte incluso</h3>
            <p>Orientação e apoio para transformar o aprendizado em prática real.</p>
          </article>
        </div>
      </section>

      <section className="courseSection courseDifference">
        <div className="sectionTitle">
          <span className="eyebrow dark">POR QUE ESTE CURSO É DIFERENTE?</span>
          <h2>Diferenciais pensados para quem busca resultados reais.</h2>
        </div>

        <ul className="differenceList revealItem">
          {course.why.slice(0, 3).map((item) => (
            <li key={item} className="differenceItem">
              <Check size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="offer" className="offerSection">
        <div className="offerContent finalOfferContent">
          <div className="finalOfferImage revealItem">
            <img src={course.finalImage} alt="Imagem final do curso" />
          </div>

          <div className="offerCard finalOfferCard revealItem">
            <span className="offerBadge">MELHOR OFERTA</span>
            <span className="eyebrow dark">OFERTA PREMIUM</span>
            <h3>{course.title}</h3>
            <p>{course.shortDescription}</p>

            <div className="offerPrice">
              <span className="offerOldPrice">De: R$ 297,00</span>
              <strong>Por apenas</strong>
              <span className="offerNewPrice">R$ 147,00</span>
            </div>
            <p className="offerInstallments">ou em até 12x sem juros</p>

            <ul className="purchaseList">
              {[
                'Acesso imediato pelo Hotmart',
                'Pagamento seguro e protegido',
                'Material atualizado e suporte',
              ].map((benefit) => (
                <li key={benefit}>
                  <Check size={18} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href={course.hotmart}
              target="_blank"
              rel="noopener noreferrer"
              className="offerButton"
            >
              Acessar Hotmart
              <ChevronRight size={18} />
            </a>

            <div className="offerFeatures">
              <span>🔒 Pagamento seguro</span>
              <span>⚡ Acesso imediato</span>
              <span>💳 Ambiente protegido</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Curso;