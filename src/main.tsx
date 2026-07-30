import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import CursosPage from './pages/cursos';
import Curso from './pages/curso';
import AtendimentoPage from './pages/Atendimento';
import './styles.css';

function AppRoutes() {
  const location = useLocation();
  const [direction, setDirection] = React.useState<'forward' | 'backward'>('forward');

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  React.useEffect(() => {
    const previousPath = sessionStorage.getItem('lastPath');
    if (previousPath) {
      setDirection(previousPath === '/' && location.pathname === '/cursos' ? 'forward' : 'backward');
    }
    sessionStorage.setItem('lastPath', location.pathname);
  }, [location.pathname]);

  return (
    <div className={`pageTransition ${direction === 'forward' ? 'pageTransitionForward' : 'pageTransitionBackward'}`}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/atendimento" element={<AtendimentoPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/cursos/:slug" element={<Curso />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);