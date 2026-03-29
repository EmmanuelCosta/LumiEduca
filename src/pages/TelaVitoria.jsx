// src/pages/TelaVitoria.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import lumiVitoria from '../assets/lumi_vitoria.png'; // Importe a imagem do Lumi comemorando

export default function TelaVitoria() {
  const navigate = useNavigate();

  // Vamos fingir que o aluno ganhou 30 pontos (depois conectamos com a lógica real)
  const pontosGanhos = 30;

  return (
    <div style={fundoStyle}>
      <div style={containerStyle}>
        
        

        {/* Imagem do Lumi Comemorando */}
        <img src={lumiVitoria} alt="Lumi Comemorando" style={lumiStyle} />

        <h1 style={tituloStyle}>MISSÃO CUMPRIDA!</h1>
        <p style={subtituloStyle}>Você brilhou hoje, Explorador!</p>

        {/* Resumo da Recompensa */}
        <div style={cardPontosStyle}>
          <span style={{ fontSize: '3rem' }}>🌟</span>
          <p style={{ margin: 0, fontWeight: 'bold' }}>VOCÊ GANHOU:</p>
          <h2 style={{ color: 'var(--lumi-orange)', fontSize: '2.5rem', margin: '10px 0' }}>
            {pontosGanhos} <span style={{ fontSize: '1rem', color: '#888' }}>Pontos</span>
          </h2>
        </div>

        {/* Botão para Voltar à Home/Trilha */}
        <button className="btn-lumi" onClick={() => navigate('/')} style={{ width: '100%', marginTop: '20px' }}>
          VOLTAR PARA A TRILHA
        </button>
      </div>
    </div>
  );
}

// Estilos para a Tela de Vitória
const fundoStyle = {
  backgroundColor: 'var(--lumi-gray-bg)', // O cinza claro que definimos
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px'
};

const containerStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '30px',
  boxShadow: '0 10px 25px rgba(255,140,0,0.2)', // Sombra com um toque de laranja
  textAlign: 'center',
  maxWidth: '400px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden' // Para o efeito de confetes
};

const lumiStyle = {
  height: '150px',
  marginBottom: '20px',
  animation: 'pula 1s ease infinite' // Adiciona um pequeno pulinho (precisa definir a animação no CSS)
};

const tituloStyle = {
  color: 'var(--lumi-orange)',
  fontWeight: '900',
  fontSize: '2rem',
  margin: '10px 0'
};

const subtituloStyle = {
  color: 'var(--text-light)',
  fontSize: '1.2rem',
  marginBottom: '30px'
};

const cardPontosStyle = {
  backgroundColor: '#FFF8E1', // Um amarelinho bem claro (cor de ouro)
  padding: '20px',
  borderRadius: '15px',
  border: '2px solid #FFE082'
};

const confeteStyle = {
  fontSize: '2rem',
  position: 'absolute',
  top: '10px',
  width: '100%',
  textAlign: 'center',
  opacity: 0.7
};