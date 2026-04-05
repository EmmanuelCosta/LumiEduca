import React, { useState, useEffect } from 'react';
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

  // Lógica para detectar mobile em tempo real
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!dados) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Trilha não encontrada!</h2>
        <button onClick={() => navigate('/')}>Voltar ao Menu</button>
      </div>
    );
  }

  return (
    <div style={{ ...containerStyle, padding: isMobile ? '20px 10px' : '40px 20px' }}>
      {/* Botão Voltar */}
      <button onClick={() => navigate('/')} style={{ ...btnVoltarStyle, fontSize: isMobile ? '1.2rem' : '1rem' }}>
        ← Menu Inicial
      </button>
      
      <h1 style={{ 
        ...tituloStyle, 
        color: dados.cor,
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        textAlign: 'center'
      }}>
        Trilha de {dados.nome}
      </h1>
      
      <div style={containerTrilhaStyle}>
        {dados.fases.map((fase) => (
          <div key={fase.id} style={{ ...wrapperFaseStyle, marginBottom: isMobile ? '40px' : '60px' }}>
            
            {/* Círculo da Fase - Bem maior no Mobile */}
            <button 
              onClick={() => fase.path && navigate(fase.path)}
              disabled={!fase.path}
              style={{ 
                ...circuloStyle, 
                width: isMobile ? '110px' : '80px',
                height: isMobile ? '110px' : '80px',
                fontSize: isMobile ? '2.2rem' : '1.5rem',
                backgroundColor: fase.path ? dados.cor : '#ccc',
                cursor: fase.path ? 'pointer' : 'not-allowed',
                boxShadow: isMobile ? '0 6px 0 #bbb' : '0 4px 0 #bbb' // Efeito 3D mais forte no mobile
              }}
            >
              {fase.id}
            </button>

            <p style={{ 
              ...nomeFaseStyle, 
              fontSize: isMobile ? '1.4rem' : '1.1rem',
              marginTop: isMobile ? '15px' : '10px'
            }}>
              {fase.nome}
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

// --- ESTILOS ---

const containerStyle = {
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
  marginBottom: '20px'
};

const tituloStyle = {
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
  position: 'relative',
  zIndex: 1
};

const circuloStyle = {
  borderRadius: '50%',
  border: 'none',
  color: 'white',
  fontWeight: 'bold',
  zIndex: 3, 
  position: 'relative',
  transition: 'transform 0.1s active'
};

const nomeFaseStyle = {
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center'
};