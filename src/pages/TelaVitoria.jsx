import React from 'react';
import { useNavigate } from 'react-router-dom';
import lumiVitoria from '../assets/lumi_vitoria.png'; 

export default function TelaVitoria({ pontos }) {
  const navigate = useNavigate();

  return (
    <div style={fundoStyle}>
      <div style={containerStyle}>
        
        {/* Efeito de Confetes (Emoji) */}
        <div style={confeteStyle}>🎉 🎉 🎉</div>

        {/* Imagem do Lumi Comemorando */}
        <img 
          src={lumiVitoria} 
          alt="Lumi Comemorando" 
          style={lumiImageStyle} 
        />

        <h1 style={tituloStyle}>MISSÃO CUMPRIDA!</h1>
        <p style={subtituloStyle}>Você brilhou hoje, Explorador!</p>

        {/* Resumo da Recompensa */}
        <div style={cardPontosStyle}>
          <span style={{ fontSize: '2.5rem' }}>🌟</span>
          <p style={txtGanhouStyle}>VOCÊ GANHOU:</p>
          <h2 style={pontosValorStyle}>
            {pontos} <span style={txtPontosPequenoStyle}>Pontos</span>
          </h2>
        </div>

        {/* Botão para Voltar */}
        <button 
          className="btn-lumi" 
          onClick={() => navigate('/')}
          style={btnStyle}
        >
          VOLTAR PARA A TRILHA
        </button>
        
      </div>
    </div>
  );
}

// Estilos Web (CSS-in-JS)
const fundoStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
  padding: '20px',
  backgroundColor: '#f5f5f5'
};

const containerStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '30px',
  textAlign: 'center',
  maxWidth: '400px',
  width: '100%',
  boxShadow: '0 10px 25px rgba(255,140,0,0.15)',
  position: 'relative'
};

const confeteStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
  opacity: 0.8
};

const lumiImageStyle = {
  height: '150px',
  width: 'auto',
  marginBottom: '20px'
};

const tituloStyle = {
  color: '#FF8C00',
  fontWeight: '900',
  fontSize: '2rem',
  margin: '10px 0'
};

const subtituloStyle = {
  color: '#666',
  fontSize: '1.1rem',
  marginBottom: '25px'
};

const cardPontosStyle = {
  backgroundColor: '#FFF8E1',
  padding: '20px',
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
  fontSize: '2.5rem',
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
  padding: '15px',
  backgroundColor: '#FF8C00',
  color: 'white',
  border: 'none',
  borderRadius: '15px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem'
};