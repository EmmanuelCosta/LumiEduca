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
        
        {/* Lado Esquerdo: Logo e Nome (Sempre visíveis) */}
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
            fontSize: isMobile ? '1rem' : '1.5rem' // Diminui mas não some
          }}>
            LumiEduca
          </h2>
        </div>

        {/* Centro: Botão de Instalar (Compacto no Mobile) */}
        {deferredPrompt && (
          <button onClick={handleInstallClick} style={{
            ...installButtonStyle,
            padding: isMobile ? '6px 8px' : '8px 15px',
            fontSize: isMobile ? '0.7rem' : '0.9rem',
            margin: isMobile ? '0 4px' : '0 10px'
          }}>
            {isMobile ? "📥 Instalar" : "📥 Baixar App"}
          </button>
        )}
        
        {/* Lado Direito: Placar de Pontos */}
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
  justifyContent: 'space-between', // Distribui os 3 elementos
  width: '100%',
  gap: '5px' // Espaço mínimo entre os itens para não colarem
};

const logoGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexShrink: 1 // Permite que o logo encolha um pouco se necessário
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
  flexShrink: 0 // O botão de baixar não deve sumir/encolher
};

const placarContainerStyle = {
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '15px',
  border: '2px solid #ddd',
  gap: '4px',
  flexShrink: 0 // Garante que os pontos fiquem sempre visíveis
};

const textoPontosStyle = {
  fontWeight: '900',
  color: '#555'
};