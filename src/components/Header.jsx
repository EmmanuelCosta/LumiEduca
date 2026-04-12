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

  // Função para deslogar
  const handleLogout = () => {
    localStorage.removeItem('userType');
    window.location.href = '/login'; // Força o redirecionamento e limpa o estado
  };

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
              height: isMobile ? '28px' : '40px', 
              width: 'auto' 
            }} 
          />
          <h2 style={{ 
            ...tituloStyle, 
            fontSize: isMobile ? '1rem' : '1.5rem' 
          }}>
            LumiEduca
          </h2>
        </div>

        {/* Lado Direito: Grupo de Ações (Instalar, Placar e Sair) */}
        <div style={rightGroupStyle}>
          
          {/* Botão de Instalar (Só aparece se disponível) */}
          {deferredPrompt && (
            <button onClick={handleInstallClick} style={{
              ...installButtonStyle,
              padding: isMobile ? '6px 8px' : '8px 15px',
              fontSize: isMobile ? '0.7rem' : '0.9rem'
            }}>
              {isMobile ? "📥 PWA" : "📥 Instalar App"}
            </button>
          )}
          
          {/* Placar de Pontos */}
          <div style={{ 
            ...placarContainerStyle, 
            padding: isMobile ? '4px 8px' : '5px 15px' 
          }}>
            <span style={{ fontSize: isMobile ? '0.9rem' : '1.2rem' }}>🌟</span>
            <span style={{ 
              ...textoPontosStyle, 
              fontSize: isMobile ? '0.85rem' : '1.1rem' 
            }}>
              {pontos}
            </span>
          </div>

          {/* Botão Sair */}
          <button onClick={handleLogout} style={{
            ...btnLogoutStyle,
            padding: isMobile ? '6px 10px' : '8px 15px',
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}>
            {isMobile ? "✖" : "Sair"}
          </button>
        </div>

      </div>
    </header>
  );
}

// --- ESTILOS ---

const headerStyle = {
  backgroundColor: 'white',
  padding: '10px 3%', 
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
  width: '100%',
  gap: '5px'
};

const logoGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexShrink: 1
};

const rightGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px', // Espaço entre os elementos da direita
  flexShrink: 0
};

const tituloStyle = {
  fontWeight: '900',
  color: '#FF8C00', 
  margin: 0,
  whiteSpace: 'nowrap',
  transition: 'font-size 0.2s'
};

const installButtonStyle = {
  backgroundColor: '#FF8C00',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 3px 0 #CC7000',
  whiteSpace: 'nowrap',
  flexShrink: 0
};

const placarContainerStyle = {
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '15px',
  border: '2px solid #ddd',
  gap: '4px',
  flexShrink: 0
};

const textoPontosStyle = {
  fontWeight: '900',
  color: '#555'
};

const btnLogoutStyle = {
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 3px 0 #cc0000',
  transition: 'transform 0.1s',
  flexShrink: 0
};