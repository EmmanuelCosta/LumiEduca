import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DADOS_TRILHAS = {
  matematica: {
    nome: "Matemática",
    cor: "#FF8C00",
    fases: [
      { id: 1, nome: "Soma básica", path: "/exercicio/matematica" },
      { id: 2, nome: "Subtração", path: null },
    ]
  },
  portugues: {
    nome: "Português",
    cor: "#3498db",
    fases: [
      { id: 1, nome: "Vogais", path: null },
      { id: 2, nome: "Sílabas", path: null },
    ]
  }
};

export default function Trilha() {
  const { materia } = useParams();
  const navigate = useNavigate();
  const dados = DADOS_TRILHAS[materia];

  if (!dados) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Trilha não encontrada!</h2>
        <button onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Botão Voltar */}
      <button onClick={() => navigate('/')} style={btnVoltarStyle}>
        ← Menu Inicial
      </button>
      
      <h1 style={{ ...tituloStyle, color: dados.cor }}>
        Trilha de {dados.nome}
      </h1>
      
      <div style={containerTrilhaStyle}>
        {dados.fases.map((fase, index) => (
          <div key={fase.id} style={wrapperFaseStyle}>
            
            {/* Círculo da Fase */}
            <button 
              onClick={() => fase.path && navigate(fase.path)}
              disabled={!fase.path}
              style={{ 
                ...circuloStyle, 
                backgroundColor: fase.path ? dados.cor : '#ccc',
                cursor: fase.path ? 'pointer' : 'not-allowed'
              }}
            >
              {fase.id}
            </button>

            <p style={nomeFaseStyle}>{fase.nome}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos para Web (React)
const containerStyle = {
  padding: '40px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#fff'
};

const btnVoltarStyle = {
  alignSelf: 'flex-start',
  background: 'none',
  border: 'none',
  color: '#888',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginBottom: '20px',
  fontSize: '1rem'
};

const tituloStyle = {
  fontSize: '2rem',
  fontWeight: '900',
  marginBottom: '40px'
};

const containerTrilhaStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

const wrapperFaseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '60px',
  position: 'relative',
  zIndex: 1
};

const circuloStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: 'none',
  color: 'white',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  zIndex: 3, 
  cursor: 'pointer',
  position: 'relative' 
};

const nomeFaseStyle = {
  fontWeight: 'bold',
  marginTop: '10px',
  fontSize: '1.1rem',
  color: '#333'
};
