import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import { courses } from '../data/courses';

function Cursos() {
  const course = courses[0];

  if (!course) {
    return null;
  }

  return (
    <div className="coursesPage">

      <Header backTo="/" backLabel="Home" backAriaLabel="Voltar para a página inicial" />


      <main>

      {/* LISTA DE CURSOS */}

      <section className="coursesList">

        <div className="coursesSectionHeading">

          <span className="eyebrow dark">
            MEUS CURSOS
          </span>

          <h2>
            Escolha o curso ideal
            <br />
            <em>para você.</em>
          </h2>

          <p>
            Conheça as opções disponíveis e encontre o conteúdo
            que mais combina com seus objetivos.
          </p>

        </div>


        <div className="courseGrid">

          {courses.map((course) => (

            <article
              className="courseCard"
              key={course.id}
            >

              <div className="courseCardImage">

                <img
                  src={course.image}
                  alt={course.title}
                />

                <span className="courseCategory">
                  {course.category}
                </span>

              </div>


              <div className="courseCardContent">

                <div className="courseIcon">
                  <Sparkles size={19} />
                </div>

                <h3>
                  {course.title}
                </h3>

                <p>
                  {course.shortDescription}
                </p>

                <Link
                  to={`/cursos/${course.slug}`}
                  className="courseButton"
                >
                  Ver se é ideal para mim
                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>


      {/* FOOTER */ }

  <footer className="coursesFooter">

    <div className="coursesFooterBrand">

      <span>
        DAYANE GALDINO
      </span>

      <small>
        BEAUTY STUDIO
      </small>

    </div>

    <p>
      © {new Date().getFullYear()} Dayane Galdino Beauty Studio.
      Todos os direitos reservados.
    </p>

  </footer>

    </div >
  );
}

export default Cursos;