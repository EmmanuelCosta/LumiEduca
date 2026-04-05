import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import lumiVitoria from '../assets/lumi_vitoria.png'; 

export default function TelaVitoria({ pontos }) {
  const navigate = useNavigate();

  // Mantemos o isMobile apenas para o tamanho da imagem e fontes
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={fundoStyle}>
      <div style={containerStyle}>
        
        {/* Efeito de Confetes */}
        <div style={{ ...confeteStyle, fontSize: isMobile ? '2rem' : '1.5rem' }}>
          🎉 🎉 🎉
        </div>

        {/* Imagem do Lumi - Altura fluida para não quebrar o layout */}
        <img 
          src={lumiVitoria} 
          alt="Lumi Comemorando" 
          style={{ 
            ...lumiImageStyle, 
            height: isMobile ? '180px' : '150px' 
          }} 
        />

        <h1 style={{ 
          ...tituloStyle, 
          fontSize: isMobile ? '1.8rem' : '2.2rem' 
        }}>
          MISSÃO CUMPRIDA!
        </h1>
        
        <p style={{ 
          ...subtituloStyle, 
          fontSize: isMobile ? '1.1rem' : '1.3rem' 
        }}>
          Você brilhou hoje, Explorador!
        </p>

        {/* Card de Pontos - 100% da largura do container pai */}
        <div style={cardPontosStyle}>
          <span style={{ fontSize: isMobile ? '3rem' : '2.5rem' }}>🌟</span>
          <p style={txtGanhouStyle}>VOCÊ GANHOU:</p>
          <h2 style={{ 
            ...pontosValorStyle, 
            fontSize: isMobile ? '3rem' : '2.5rem' 
          }}>
            {pontos} <span style={txtPontosPequenoStyle}>Pontos</span>
          </h2>
        </div>

        {/* Botão para Voltar - Ocupa toda a largura interna */}
        <button 
          onClick={() => navigate('/')}
          style={btnStyle}
        >
          VOLTAR PARA A TRILHA
        </button>
        
      </div>
    </div>
  );
}

// --- ESTILOS RESPONSIVOS ---

const fundoStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  boxSizing: 'border-box'
};

const containerStyle = {
  backgroundColor: 'white',
  borderRadius: '30px',
  textAlign: 'center',
  // O SEGREDO: 92% no mobile, mas trava em 450px no PC
  width: '92%',
  maxWidth: '450px',
  padding: '8% 5%', 
  boxShadow: '0 10px 30px rgba(255,140,0,0.12)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const confeteStyle = {
  marginBottom: '10px',
  opacity: 0.9
};

const lumiImageStyle = {
  width: 'auto',
  marginBottom: '15px',
  maxWidth: '100%' // Garante que a imagem nunca vaze o card
};

const tituloStyle = {
  color: '#FF8C00',
  fontWeight: '900',
  margin: '10px 0',
  lineHeight: '1.1'
};

const subtituloStyle = {
  color: '#666',
  marginBottom: '20px',
  width: '90%'
};

const cardPontosStyle = {
  backgroundColor: '#FFF8E1',
  borderRadius: '25px',
  border: '2px solid #FFE082',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%', // Preenche o card branco
  padding: '20px 0',
  boxSizing: 'border-box'
};

const txtGanhouStyle = {
  fontWeight: 'bold',
  color: '#333',
  margin: '5px 0',
  fontSize: '1rem'
};

const pontosValorStyle = {
  color: '#FF8C00',
  margin: 0,
  fontWeight: '900'
};

const txtPontosPequenoStyle = {
  fontSize: '1rem',
  color: '#888',
  fontWeight: 'normal'
};

const btnStyle = {
  width: '100%',
  marginTop: '25px',
  backgroundColor: '#FF8C00',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  fontWeight: '900',
  cursor: 'pointer',
  padding: '18px',
  fontSize: '1.2rem',
  boxShadow: '0 6px 0 #CC7000',
  transition: 'transform 0.1s'
};