import { Link, useParams } from "react-router-dom";
import {
  Check,
  ChevronRight,
  MessageCircle,
  Sparkles
} from "lucide-react";

import Header from '../components/Header';
import teacherImage from '../assets/images/dayanepose.PNG';
import { courses } from "../data/courses";

function Curso() {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug);

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

        <div className="courseHeroText">

          <span className="eyebrow dark">
            {course.category}
          </span>

          <h1>
            {course.heroTitle}
          </h1>

          <p>
            {course.heroDescription}
          </p>

          <div className="courseHeroActions">
            <a
              href="#beneficios"
              className="button"
            >
              Descobrir se é ideal para mim

              <ChevronRight size={18} />
            </a>
          </div>

        </div>

        <div className="courseHeroImage">

          <img
            src={course.image}
            alt={course.title}
          />

        </div>

      </section>

      <section className="offerSection">
        <div className="offerContent">
          <div className="offerInfo">
            <span className="eyebrow dark">OFERTA PREMIUM</span>
            <h2>{course.title}</h2>
            <p>{course.shortDescription}</p>

            <ul className="offerList">
              <li><Check size={18} /> Acesso imediato</li>
              <li><Check size={18} /> Curso 100% online</li>
              <li><Check size={18} /> Assista pelo celular ou computador</li>
              <li><Check size={18} /> Atualizações futuras</li>
              <li><Check size={18} /> Certificado disponível</li>
            </ul>
          </div>

          <div className="offerCard">
            <span className="offerBadge">OFERTA</span>
            <h3>Comece hoje</h3>
            <div className="offerPrice">
              <span className="offerOldPrice">De: R$ 297,00</span>
              <strong>Por apenas</strong>
              <span className="offerNewPrice">R$ 147,00</span>
            </div>
            <p className="offerInstallments">ou em até 12x sem juros</p>

            <a
              href={course.hotmart}
              target="_blank"
              rel="noopener noreferrer"
              className="offerButton"
            >
              Quero garantir meu acesso
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

      {/* MOTIVOS */}

      <section
        id="beneficios"
        className="courseSection"
      >

        <div className="sectionTitle">

          <span className="eyebrow dark">

            POR QUE ESTE CURSO?

          </span>

          <h2>

            Você se identifica com alguma destas situações?

          </h2>

        </div>

        <div className="benefitsGrid">

          {course.why.map((item) => (

            <div
              key={item}
              className="benefitCard"
            >

              <Sparkles size={22} />

              <p>

                {item}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* O QUE VAI APRENDER */}

      <section className="courseSection alt">

        <div className="sectionTitle">

          <span className="eyebrow dark">

            O QUE VOCÊ VAI APRENDER

          </span>

          <h2>

            Conteúdo pensado para gerar resultados reais.

          </h2>

        </div>

        <div className="learnGrid">

          {course.learn.map((item) => (

            <div
              key={item}
              className="learnCard"
            >

              <Check size={18} />

              <span>

                {item}

              </span>

            </div>

          ))}

        </div>

      </section>    

        {/* MÓDULOS */}

      <section className="courseSection">

        <div className="sectionTitle">

          <span className="eyebrow dark">
            CONTEÚDO DO CURSO
          </span>

          <h2>
            Tudo o que você terá acesso.
          </h2>

        </div>

        <div className="modulesGrid">

          {course.modules.map((module, index) => (

            <div
              key={module}
              className="moduleCard"
            >

              <span className="moduleNumber">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <h3>{module}</h3>

            </div>

          ))}

        </div>

      </section>



      {/* PARA QUEM É */}

      <section className="courseSection alt">

        <div className="sectionTitle">

          <span className="eyebrow dark">

            ESTE CURSO É PARA VOCÊ

          </span>

          <h2>

            Se você deseja evoluir na maquiagem.

          </h2>

        </div>

        <div className="audienceGrid">

          {course.audience.map((item) => (

            <div
              key={item}
              className="audienceCard"
            >

              <Check size={18} />

              <span>{item}</span>

            </div>

          ))}

        </div>

      </section>



      {/* SOBRE A DAYANE */}

      <section className="aboutTeacher">

        <div className="teacherImage">

          <img
            src={teacherImage}
            alt="Dayane Galdino"
          />

        </div>

        <div className="teacherContent">

          <span className="eyebrow dark">

            SUA PROFESSORA

          </span>

          <h2>

            Aprenda com quem vive a maquiagem diariamente.

          </h2>

          <p>

            Meu objetivo é mostrar que qualquer mulher pode
            aprender maquiagem de forma simples, elegante e
            prática.

          </p>

          <p>

            Desenvolvi este método para ensinar exatamente aquilo
            que aplico no meu dia a dia com clientes reais.

          </p>

        </div>

      </section>



      {/* DEPOIMENTOS */}

      <section className="courseSection">

        <div className="sectionTitle">

          <span className="eyebrow dark">

            RESULTADOS

          </span>

          <h2>

            O que nossas alunas dizem.

          </h2>

        </div>

        <div className="testimonialGrid">

          <article className="testimonialCard">

            ⭐⭐⭐⭐⭐

            <p>

              "Foi muito além do que eu esperava.
              Finalmente consegui fazer minha maquiagem sozinha."

            </p>

            <strong>Ana Paula</strong>

          </article>



          <article className="testimonialCard">

            ⭐⭐⭐⭐⭐

            <p>

              "A explicação é simples e muito fácil de acompanhar."

            </p>

            <strong>Camila</strong>

          </article>



          <article className="testimonialCard">

            ⭐⭐⭐⭐⭐

            <p>

              "Hoje consigo atender clientes com muito mais segurança."

            </p>

            <strong>Juliana</strong>

          </article>

        </div>

      </section>



      {/* CTA FINAL */}

      <section className="courseCTA">

        <span className="eyebrow">

          SUA TRANSFORMAÇÃO COMEÇA AGORA

        </span>

        <h2>

          Está pronta para dar o próximo passo?

        </h2>

        <p>

          Se este curso fizer sentido para você, clique abaixo para acessar o conteúdo completo e começar sua transformação.

        </p>

        <a

          href={course.hotmart}

          target="_blank"

          rel="noopener noreferrer"

          className="button"

        >

          Quero comprar este curso

          <ChevronRight size={18} />

        </a>

      </section>



      {/* WHATSAPP */}

      <a

        href="https://wa.me/"

        target="_blank"

        rel="noopener noreferrer"

        className="floatingWhatsapp"

      >

        <MessageCircle size={28} />

      </a>



    </div>

  );

}

export default Curso;