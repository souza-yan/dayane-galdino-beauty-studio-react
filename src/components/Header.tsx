import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoImage from '../assets/images/logo.png';

interface HeaderProps {
  backTo: string;
  backLabel?: string;
  backAriaLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showCta?: boolean;
}

function Header({
  backTo,
  backLabel = 'Home',
  backAriaLabel,
  ctaLabel = 'Agendar',
  ctaHref = 'https://m.casamentos.com.br/beleza-noivas/dayane-galdino-beauty--e224406',
  showCta = false,
}: HeaderProps) {
  return (
    <header className="pageHeader">
      <Link to={backTo} className="pageHeaderBackLink" aria-label={backAriaLabel || `Voltar para ${backLabel}`}>
        <ArrowLeft size={20} />
        <span>{backLabel}</span>
      </Link>

      <div className="pageHeaderLogo">
        <img src={logoImage} alt="Dayane Galdino Beauty Studio" />
      </div>

      {showCta ? (
        <a className="pageHeaderCta" href={ctaHref} target="_blank" rel="noopener noreferrer">
          <CalendarDays size={16} />
          <span>{ctaLabel}</span>
        </a>
      ) : (
        <div className="pageHeaderCtaPlaceholder" aria-hidden="true" />
      )}
    </header>
  );
}

export default Header;
