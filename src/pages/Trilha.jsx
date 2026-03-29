// src/pages/Trilha.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DADOS_TRILHAS = {
  matematica: {
    nome: "Matemática",
    cor: "var(--lumi-orange)",
    fases: [
      { id: 1, nome: "Soma básica", path: "/exercicio/matematica/0" },
      { id: 2, nome: "Subtração", path: "#" },
    ]
  },
  portugues: {
    nome: "Português",
    cor: "#3498db", // Azul para português
    fases: [
      { id: 1, nome: "Vogais", path: "#" },
      { id: 2, nome: "Sílabas", path: "#" },
    ]
  }
};

export default function Trilha() {
  const { materia } = useParams(); // Pega 'matematica' ou 'portugues' da URL
  const navigate = useNavigate();
  const dados = DADOS_TRILHAS[materia];

  if (!dados) return <div>Trilha não encontrada!</div>;

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <button onClick={() => navigate('/')} style={btnVoltar}>← Menu</button>
      
      <h1 style={{ color: dados.cor }}>Trilha de {dados.nome}</h1>
      
      <div style={containerTrilha}>
        {dados.fases.map((fase, index) => (
          <div key={fase.id} style={wrapperFase}>
            <button 
              className="btn-lumi" 
              onClick={() => fase.path !== "#" && navigate(fase.path)}
              style={{ 
                backgroundColor: dados.cor, 
                width: '80px', height: '80px', borderRadius: '50%' 
              }}
            >
              {fase.id}
            </button>
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{fase.nome}</p>
            {index < dados.fases.length - 1 && <div style={linhaStyle}></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos rápidos
const btnVoltar = { background: 'none', border: 'none', color: '#888', cursor: 'pointer', marginBottom: '20px' };
const containerTrilha = { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' };
const wrapperFase = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  marginBottom: '60px', // Aumente o espaço para o texto não bater na linha
  zIndex: 2 // Garante que o texto e o botão fiquem na frente
};
const linhaStyle = {
  position: 'absolute',
  top: '80px', // Começa abaixo do botão
  width: '8px',
  height: '70px', // Ajuste para conectar com a próxima
  backgroundColor: '#e5e5e5',
  zIndex: -1 // COLOCA A LINHA ATRÁS DE TUDO
};