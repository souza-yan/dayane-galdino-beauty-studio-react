import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Menu,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';

import { links, navItems } from './data/content';
import heroImage from './assets/images/dayanepose.PNG';
import notebookImage from './assets/images/dayanecomputador.jpeg';
import portraitImage from './assets/images/dayane.jpeg';
import ctaImage from './assets/images/dayanemake.jpeg';
import logoImage from './assets/images/logo.png';

const images = {
  hero: heroImage,
  notebook: notebookImage,
  portrait: portraitImage,
  cta: ctaImage,
  logo: logoImage,
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (menuOpen || currentScrollY <= 40) {
            setShowHeader(true);
          } else if (currentScrollY > lastScrollY.current + 10) {
            setShowHeader(false);
          } else if (currentScrollY < lastScrollY.current - 10) {
            setShowHeader(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* HEADER */}

      <header className={`header ${showHeader ? '' : 'hidden'}`}>

        <a
          href="#inicio"
          className="logoWrap"
          onClick={closeMenu}
        >
          <img
            src={images.logo}
            alt="Dayane Galdino Beauty Studio"
            className="logo"
          />

        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>

          {navItems.map((item) => {
            // internal route (starts with /) -> use Link to navigate in same tab (SPA)
            if (item.href && item.href.startsWith('/')) {
              return (
                <Link key={item.href} to={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              );
            }

            // hash or external links stay as anchors
            const isExternal = !!item.href && (item.href.startsWith('http') || item.href.startsWith('https'));
            const attrs: any = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

            return (
              <a key={item.href} href={item.href} onClick={closeMenu} {...attrs}>
                {item.label}
              </a>
            );
          })}

        </nav>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </header>


      <main>

        {/* HERO */}

        <section id="inicio" className="hero section">

          <div
            className="heroImage"
            style={{
              backgroundImage: `url(${images.hero})`,
            }}
          />

          <div className="heroOverlay" />

          <div className="heroContent">
            <div className="heroIntroSpacer" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <h1>
              Sua beleza merece ser inesquecível.
              <br />
              <em>Desperte sua melhor versão.</em>
            </h1>

            <p>
              Cada detalhe é pensado para que você viva seu grande dia com
              tranquilidade, segurança e a certeza de estar na sua melhor versão.
            </p>

          </div>

        </section>

        {/* SOBRE */}

        <section id="sobre" className="about section">

          <div className="portraitFrame">

            <img
              src={images.portrait}
              alt="Dayane Galdino"
            />

            <div className="frameBadge">
              <Sparkles size={18} />
              Beleza com propósito
            </div>

          </div>


          <div className="aboutText">

            <span className="eyebrow dark">
              SOBRE MIM
            </span>

            <h2>
              Mais do que maquiagem,
              <br />
              <em>uma experiência que transforma.</em>
            </h2>

            <p>
              Sou Dayane Galdino, especialista em noivas e fundadora da Dayane Galdino Beauty.
              Há mais de 8 anos acompanho mulheres em alguns dos momentos mais importantes de suas vidas,
              criando uma beleza elegante, atemporal e personalizada.
            </p>

            <p>
              Com a experiência adquirida ao longo dessa jornada, 
              desenvolvi também materiais e treinamentos para ajudar outras maquiadoras
              a se posicionarem de forma mais profissional, organizada e valorizada.
            </p>

            <p>
              Porque quando a experiência é premium, o valor percebido também é.
            </p>

            <a
              className="textLink"
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Conheça mais sobre mim
              <ArrowRight size={17} />
            </a>

        </div>

      </section>


      {/* ATENDIMENTO */}

      <section
        id="atendimento"
        className="services section"
      >

        <div className="sectionHeading">

          <span className="eyebrow dark">
            ATENDIMENTO
          </span>

          <h2>
            Beleza pensada para <em>você</em>
          </h2>

          <p>
            Escolha a experiência que deseja viver
            e entre em contato para saber mais.
          </p>

        </div>


        <div className="cards">

          {/* CARD ATENDIMENTO */}

          <article className="card">

            <div className="cardIcon">
              <Sparkles />
            </div>

            <h3>
              Atendimento
            </h3>

            <p>
              Um atendimento personalizado, pensado para
              valorizar seus traços e destacar sua beleza.
            </p>

            <Link to="/atendimento">
              Agendar atendimento
              <ArrowRight size={16} />
            </Link>

          </article>


          {/* CARD CURSOS */}

          <article
            id="cursos"
            className="card featured"
          >

            <div className="cardImage">

              <img
                src={images.notebook}
                alt="Cursos e conteúdos online"
              />

            </div>

            <div className="cardBody">

              <span className="tag">
                ONLINE
              </span>

              <h3>
                Cursos
              </h3>

              <p>
                Aprenda técnicas e descubra novos conhecimentos
                através dos meus cursos e conteúdos.
              </p>

              <Link to="/cursos">
                Conhecer cursos
                <ArrowRight size={16} />
              </Link>

            </div>

          </article>


          {/* CARD CURSOS PRESENCIAIS */}

          <article
            id="cursos-presenciais"
            className="card"
          >

            <div className="cardIcon">
              <MessageCircle />
            </div>

            <h3>
              Cursos Presenciais
            </h3>

            <p>
              Aprenda técnicas ao vivo com acompanhamento profissional
              em um ambiente criado para o seu desenvolvimento.
            </p>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Quero saber mais
              <ArrowRight size={16} />
            </a>

          </article>

        </div>

      </section>


      {/* PRODUTOS */}

      <section
        id="produtos"
        className="products section"
      >

        <div className="productText">

          <span className="eyebrow dark">
            MINHA SELEÇÃO
          </span>

          <h2>
            Produtos que fazem parte da
            <em> minha rotina</em>
          </h2>

          <p>
            Confira a seleção de produtos e itens que recomendo
            para complementar sua experiência de beleza.
          </p>

          <a
            className="button primary"
            href={links.shopee}
            target="_blank"
            rel="noreferrer"
          >
            <ShoppingBag size={18} />
            Ver produtos na Shopee
          </a>

        </div>


        <div className="productVisual">

          <div className="productCircle">
            <Sparkles size={34} />
          </div>

          <span>
            BEAUTY
            <br />
            ESSENTIALS
          </span>

        </div>

      </section>

      {/* CTA FINAL */}

      <section className="finalCta section">

        <img
          src={images.cta}
          alt=""
        />

        <div className="finalOverlay" />

        <div className="finalContent">

          <span className="eyebrow">
            PRONTA PARA COMEÇAR?
          </span>

          <h2>
            Vamos criar uma experiência
            <br />
            <em>especial para você.</em>
          </h2>

          <a
            className="button light"
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Entrar em contato
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </main>


      {/* FOOTER */ }

  <footer className="footer">

    <div>

      <div className="footerBrand">
        DAYANE GALDINO
        <span>
          BEAUTY STUDIO
        </span>
      </div>

      <p>
        Beleza, conhecimento e transformação.
      </p>

    </div>


    <div className="footerLinks">

      <a
        href={links.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <Globe size={18} />
        Instagram
      </a>

      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>

      <a
        href={links.shopee}
        target="_blank"
        rel="noreferrer"
      >
        <ShoppingBag size={18} />
        Shopee
      </a>

    </div>


    <div className="copyright">

      © {new Date().getFullYear()}
      {' '}
      Dayane Galdino Beauty Studio.
      Todos os direitos reservados.

    </div>

  </footer>

    </div >
  );
}

export default App;