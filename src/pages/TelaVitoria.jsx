import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import lumiVitoria from '../assets/lumi_vitoria.png'; 

export default function TelaVitoria({ pontos }) {
  const navigate = useNavigate();

  // Lógica para detectar mobile em tempo real
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ ...fundoStyle, minHeight: isMobile ? '90vh' : '80vh' }}>
      <div style={{ 
        ...containerStyle, 
        padding: isMobile ? '30px 20px' : '40px',
        maxWidth: isMobile ? '90%' : '400px'
      }}>
        
        {/* Efeito de Confetes */}
        <div style={{ ...confeteStyle, fontSize: isMobile ? '2rem' : '1.5rem' }}>
          🎉 🎉 🎉
        </div>

        {/* Imagem do Lumi Comemorando - Maior no Mobile */}
        <img 
          src={lumiVitoria} 
          alt="Lumi Comemorando" 
          style={{ 
            ...lumiImageStyle, 
            height: isMobile ? '200px' : '150px' 
          }} 
        />

        <h1 style={{ 
          ...tituloStyle, 
          fontSize: isMobile ? '2.2rem' : '2rem' 
        }}>
          MISSÃO CUMPRIDA!
        </h1>
        
        <p style={{ 
          ...subtituloStyle, 
          fontSize: isMobile ? '1.3rem' : '1.1rem' 
        }}>
          Você brilhou hoje, Explorador!
        </p>

        {/* Resumo da Recompensa - Card mais robusto no Mobile */}
        <div style={{ 
          ...cardPontosStyle, 
          padding: isMobile ? '30px' : '20px' 
        }}>
          <span style={{ fontSize: isMobile ? '3.5rem' : '2.5rem' }}>🌟</span>
          <p style={{ ...txtGanhouStyle, fontSize: isMobile ? '1.2rem' : '1rem' }}>
            VOCÊ GANHOU:
          </p>
          <h2 style={{ 
            ...pontosValorStyle, 
            fontSize: isMobile ? '3.5rem' : '2.5rem' 
          }}>
            {pontos} <span style={txtPontosPequenoStyle}>Pontos</span>
          </h2>
        </div>

        {/* Botão para Voltar - Gigante para o polegar da criança */}
        <button 
          onClick={() => navigate('/')}
          style={{ 
            ...btnStyle, 
            padding: isMobile ? '20px' : '15px',
            fontSize: isMobile ? '1.3rem' : '1rem',
            boxShadow: isMobile ? '0 6px 0 #CC7000' : 'none'
          }}
        >
          VOLTAR PARA A TRILHA
        </button>
        
      </div>
    </div>
  );
}

// --- ESTILOS ---

const fundoStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f5f5f5'
};

const containerStyle = {
  backgroundColor: 'white',
  borderRadius: '30px',
  textAlign: 'center',
  width: '100%',
  boxShadow: '0 10px 25px rgba(255,140,0,0.15)',
  position: 'relative'
};

const confeteStyle = {
  marginBottom: '10px',
  opacity: 0.8
};

const lumiImageStyle = {
  width: 'auto',
  marginBottom: '20px'
};

const tituloStyle = {
  color: '#FF8C00',
  fontWeight: '900',
  margin: '10px 0'
};

const subtituloStyle = {
  color: '#666',
  marginBottom: '25px'
};

const cardPontosStyle = {
  backgroundColor: '#FFF8E1',
  borderRadius: '20px',
  border: '2px solid #FFE082',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const txtGanhouStyle = {
  fontWeight: 'bold',
  color: '#333',
  margin: '5px 0'
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
  borderRadius: '15px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.1s'
};