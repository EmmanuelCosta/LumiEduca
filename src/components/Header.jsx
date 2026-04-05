import React, { useState, useEffect } from 'react';
import logoLumi from '../assets/Lumi.png';

export default function Header({ pontos }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    }
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        
        {/* Lado Esquerdo: Logo e Nome */}
        <div style={logoGroupStyle}>
          <img 
            src={logoLumi} 
            alt="Lumi" 
            style={{ 
              ...logoImageStyle, 
              height: isMobile ? '30px' : '40px' 
            }} 
          />
          {/* Esconde o texto do título em telas muito pequenas para dar espaço ao botão */}
          {(!isMobile || (isMobile && !deferredPrompt)) && (
            <h2 style={{ 
              ...tituloStyle, 
              fontSize: isMobile ? '1.1rem' : '1.5rem' 
            }}>
              LumiEduca
            </h2>
          )}
        </div>

        {/* Centro: Botão de Instalar */}
        {deferredPrompt && (
          <button onClick={handleInstallClick} style={{
            ...installButtonStyle,
            padding: isMobile ? '6px 10px' : '8px 15px',
            fontSize: isMobile ? '0.75rem' : '0.9rem'
          }}>
            {isMobile ? "📥 Baixar" : "📥 Baixar App"}
          </button>
        )}
        
        {/* Lado Direito: Placar de Pontos */}
        <div style={{ 
          ...placarContainerStyle, 
          padding: isMobile ? '4px 10px' : '5px 15px' 
        }}>
          <span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>🌟</span>
          <span style={{ 
            ...textoPontosStyle, 
            fontSize: isMobile ? '0.9rem' : '1.1rem' 
          }}>
            {pontos}
          </span>
        </div>

      </div>
    </header>
  );
}

// --- ESTILOS RESPONSIVOS ---

const headerStyle = {
  backgroundColor: 'white',
  padding: '10px 3%', // Padding lateral em porcentagem
  borderBottom: '2px solid #e5e5e5',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  boxSizing: 'border-box',
  width: '100%'
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
};

const logoGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const logoImageStyle = {
  width: 'auto',
  transition: 'height 0.2s'
};

const tituloStyle = {
  fontWeight: '900',
  color: '#FF8C00', 
  margin: 0,
  whiteSpace: 'nowrap' // Impede que o nome quebre em duas linhas
};

const installButtonStyle = {
  backgroundColor: '#FF8C00',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 3px 0 #CC7000',
  transition: 'transform 0.1s',
  whiteSpace: 'nowrap',
  margin: '0 5px'
};

const placarContainerStyle = {
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  border: '2px solid #ddd',
  gap: '5px',
  flexShrink: 0 // Impede o placar de "esmagar"
};

const textoPontosStyle = {
  fontWeight: '900',
  color: '#555'
};