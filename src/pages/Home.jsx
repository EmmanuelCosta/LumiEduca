import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>Olá, Pequeno Explorador! 🦊</h1>
      <p style={subtituloStyle}>Qual caminho vamos seguir hoje?</p>

      <div style={trilhaStyle}>
        
        {/* Botão de Matemática */}
        <div style={faseWrapperStyle}>
          <button 
            className="btn-lumi" 
            style={botaoMatematicaStyle}
            onClick={() => navigate('/trilha/matematica')}
          >
            ➕ Matemática
          </button>
          <span style={legendaStyle}>Desafio de Soma</span>
        </div>

        {/* Linha conectora cinza */}
        <div style={linhaStyle}></div>

        {/* Botão de Português */}
        <div style={faseWrapperStyle}>
          <button 
            className="btn-lumi" 
            style={botaoPortuguesStyle}
            onClick={() => navigate('/trilha/portugues')}
          >
            📚 Português
          </button>
          <span style={{ ...legendaStyle, color: '#aaa' }}>Alfabeto (Em breve)</span>
        </div>

      </div>
    </div>
  );
}

// Estilos para Web
const containerStyle = {
  padding: '40px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  minHeight: '80vh'
};

const tituloStyle = {
  color: '#FF8C00', // Lumi Orange
  fontWeight: '900',
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '10px'
};

const subtituloStyle = {
  color: '#666',
  fontSize: '1.1rem',
  textAlign: 'center',
  marginBottom: '30px'
};

const trilhaStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%'
};

const faseWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

const botaoMatematicaStyle = {
  backgroundColor: '#FF8C00',
  color: 'white',
  padding: '20px 40px',
  borderRadius: '20px',
  border: 'none',
  width: '280px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(255,140,0,0.3)',
  transition: 'transform 0.2s'
};

const botaoPortuguesStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '20px 40px',
  borderRadius: '20px',
  border: 'none',
  width: '280px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(52,152,219,0.3)'
};

const legendaStyle = {
  fontWeight: 'bold',
  marginTop: '10px',
  fontSize: '1rem',
  color: '#333'
};

const linhaStyle = {
  width: '10px',
  height: '50px',
  backgroundColor: '#e5e5e5',
  margin: '5px 0'
};