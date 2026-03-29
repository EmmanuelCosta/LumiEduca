// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>Olá, Pequeno Explorador! 🦊</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Qual caminho vamos seguir hoje?</p>

      <div style={trilhaStyle}>
        {/* Botão de Matemática - O Único Ativo no MVP */}
        <div style={faseWrapper}>
            <button className="btn-lumi" onClick={() => navigate('/trilha/matematica')}>
                ➕ Matemática
            </button>
          <span style={legendaStyle}>Desafio de Soma</span>
        </div>

        {/* Linha conectora cinza */}
        <div style={linhaStyle}></div>

        {/* Botão de Português - Bloqueado para o futuro */}
        <div style={faseWrapper}>
            <button className="btn-lumi" onClick={() => navigate('/trilha/portugues')} style={{ backgroundColor: '#3498db' }}>
            📚 Português
            </button>
          <span style={{ ...legendaStyle, color: '#aaa' }}>Alfabeto (Em breve)</span>
        </div>
      </div>
    </div>
  );
}

// Estilos para a Home
const containerStyle = {
  padding: '40px 20px',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto'
};

const tituloStyle = {
  color: 'var(--lumi-orange)',
  fontWeight: '900',
  fontSize: '2rem'
};

const trilhaStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  marginTop: '40px'
};

const faseWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 2
};

const circuloStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  fontSize: '1.8rem'
};

const legendaStyle = {
  fontWeight: 'bold',
  marginTop: '10px',
  fontSize: '1.1rem'
};

const linhaStyle = {
  width: '10px',
  height: '50px',
  backgroundColor: '#e5e5e5',
  margin: '-10px 0',
  zIndex: 1
};