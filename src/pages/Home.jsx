import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // Lógica para detectar mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ ...containerStyle, padding: isMobile ? '30px 15px' : '40px 20px' }}>
      <h1 style={{ 
        ...tituloStyle, 
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        marginBottom: isMobile ? '5px' : '10px' 
      }}>
        Olá, Pequeno Explorador! 🦊
      </h1>
      <p style={{ 
        ...subtituloStyle, 
        fontSize: isMobile ? '1.2rem' : '1.1rem',
        marginBottom: isMobile ? '40px' : '30px' 
      }}>
        Qual caminho vamos seguir hoje?
      </p>

      <div style={trilhaStyle}>
        
        {/* Botão de Matemática */}
        <div style={faseWrapperStyle}>
          <button 
            className="btn-lumi" 
            style={{ 
              ...botaoMatematicaStyle, 
              width: isMobile ? '90%' : '320px',
              padding: isMobile ? '25px 20px' : '20px 40px',
              fontSize: isMobile ? '1.4rem' : '1.2rem',
              boxShadow: isMobile ? '0 6px 0 #CC7000' : '0 4px 15px rgba(255,140,0,0.3)'
            }}
            onClick={() => navigate('/trilha/matematica')}
          >
            ➕ Matemática
          </button>
          <span style={{ ...legendaStyle, fontSize: isMobile ? '1.1rem' : '1rem' }}>
            Desafio de Soma
          </span>
        </div>

        {/* Linha conectora cinza */}
        <div style={{ 
          ...linhaStyle, 
          height: isMobile ? '40px' : '50px',
          width: isMobile ? '8px' : '10px' 
        }}></div>

        {/* Botão de Português */}
        <div style={faseWrapperStyle}>
          <button 
            className="btn-lumi" 
            style={{ 
              ...botaoPortuguesStyle, 
              width: isMobile ? '90%' : '320px',
              padding: isMobile ? '25px 20px' : '20px 40px',
              fontSize: isMobile ? '1.4rem' : '1.2rem',
              boxShadow: isMobile ? '0 6px 0 #2980b9' : '0 4px 15px rgba(52,152,219,0.3)'
            }}
            onClick={() => navigate('/trilha/portugues')}
          >
            📚 Português
          </button>
          <span style={{ 
            ...legendaStyle, 
            color: '#aaa', 
            fontSize: isMobile ? '1.1rem' : '1rem' 
          }}>
            Alfabeto (Em breve)
          </span>
        </div>

      </div>
    </div>
  );
}

// --- ESTILOS ---

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  minHeight: '80vh'
};

const tituloStyle = {
  color: '#FF8C00', 
  fontWeight: '900',
  textAlign: 'center'
};

const subtituloStyle = {
  color: '#666',
  textAlign: 'center'
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
  borderRadius: '25px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.1s'
};

const botaoPortuguesStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  borderRadius: '25px',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.1s'
};

const legendaStyle = {
  fontWeight: 'bold',
  marginTop: '12px',
  color: '#333'
};

const linhaStyle = {
  backgroundColor: '#e5e5e5',
  margin: '8px 0'
};