import React from 'react';
import logoLumi from '../assets/Lumi.png';

export default function Header({ pontos }) {
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
        
        {/* Lado Direito: Placar de Pontos */}
        <div style={placarContainerStyle}>
          <span style={{ fontSize: '1.2rem' }}>🌟</span>
          <span style={textoPontosStyle}>{pontos}</span>
        </div>

      </div>
    </header>
  );
}

// Estilos para Web
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
  color: '#FF8C00', // Lumi Orange
  margin: 0
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