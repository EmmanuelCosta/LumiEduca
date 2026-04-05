import React, { useState, useEffect } from 'react';
import logoLumi from '../assets/Lumi.png';

export default function Header({ pontos }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Captura o evento de instalação do navegador
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
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
            style={logoImageStyle} 
          />
          <h2 style={tituloStyle}>LumiEduca</h2>
        </div>

        {/* Centro: Botão de Instalar (Só aparece se disponível) */}
        {deferredPrompt && (
          <button onClick={handleInstallClick} style={installButtonStyle}>
            📥 Baixar App
          </button>
        )}
        
        {/* Lado Direito: Placar de Pontos */}
        <div style={placarContainerStyle}>
          <span style={{ fontSize: '1.2rem' }}>🌟</span>
          <span style={textoPontosStyle}>{pontos}</span>
        </div>

      </div>
    </header>
  );
}

// --- ESTILOS ---

const headerStyle = {
  backgroundColor: 'white',
  padding: '10px 20px',
  borderBottom: '2px solid #e5e5e5',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const logoGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const logoImageStyle = {
  height: '40px',
  width: 'auto'
};

const tituloStyle = {
  fontSize: '1.5rem',
  fontWeight: '900',
  color: '#FF8C00', 
  margin: 0
};

// Novo estilo para o botão de instalação
const installButtonStyle = {
  backgroundColor: '#FF8C00',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '15px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  boxShadow: '0 4px 0 #CC7000', // Sombra estilo jogo
  transition: 'transform 0.1s'
};

const placarContainerStyle = {
  backgroundColor: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  padding: '5px 15px',
  borderRadius: '20px',
  border: '2px solid #ddd',
  gap: '8px'
};

const textoPontosStyle = {
  fontWeight: '900',
  color: '#555',
  fontSize: '1.1rem'
};