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

const images = {
  hero: '/images/dayanepose.PNG',
  notebook: '/images/dayanecomputador.jpeg',
  portrait: '/images/dayane.jpeg',
  cta: '/images/dayanemake.jpeg',
  logo: '/images/dayaneperfil.PNG',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
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

          <span className="logoText">
            <strong>DAYANE GALDINO</strong>
            <small>BEAUTY STUDIO</small>
          </span>
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

          <a
            className="navCta"
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Fale comigo
          </a>

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

            <span className="eyebrow">
              BEAUTY • EDUCAÇÃO • TRANSFORMAÇÃO
            </span>

            <h1>
              Realce a sua beleza.
              <br />
              <em>Desperte sua melhor versão.</em>
            </h1>

            <p>
              Um espaço pensado para você se sentir ainda mais
              confiante, bonita e preparada para transformar sua imagem.
            </p>

            <div className="heroActions">

              <a
                className="button primary"
                href="#atendimento"
              >
                Conheça meu trabalho
                <ArrowRight size={18} />
              </a>

              <a
                className="button ghost"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Fale comigo
              </a>

            </div>

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
              Mais do que beleza,
              <br />
              <em>uma experiência.</em>
            </h2>

            <p>
              Meu propósito é ajudar cada mulher a reconhecer
              sua própria beleza e se sentir segura para expressá-la.
              Aqui, cada detalhe é pensado para unir técnica,
              cuidado e autoestima.
            </p>

            <p>
              Conheça meus serviços, conteúdos e produtos e encontre
              a experiência que mais combina com você.
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

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Agendar atendimento
                <ArrowRight size={16} />
              </a>

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


            {/* CARD CONSULTORIA */}

            <article
              id="consultoria"
              className="card"
            >

              <div className="cardIcon">
                <MessageCircle />
              </div>

              <h3>
                Consultoria
              </h3>

              <p>
                Orientação personalizada para você encontrar
                caminhos que façam sentido para sua beleza e imagem.
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


      {/* FOOTER */}

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


      {/* BOTÃO WHATSAPP */}

      <a
        className="floatingWhatsapp"
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>

    </div>
  );
}

export default App;