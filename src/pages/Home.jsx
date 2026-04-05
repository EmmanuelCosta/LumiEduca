import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // Mantemos o isMobile apenas para ajustes finos de texto que % não resolve
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={{ 
        ...tituloStyle, 
        fontSize: isMobile ? '1.8rem' : '2.5rem' 
      }}>
        Olá, Pequeno Explorador! 🦊
      </h1>
      
      <p style={{ 
        ...subtituloStyle, 
        fontSize: isMobile ? '1.1rem' : '1.3rem' 
      }}>
        Qual caminho vamos seguir hoje?
      </p>

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

        {/* Linha conectora */}
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
          <span style={{ ...legendaStyle, color: '#aaa' }}>
            Alfabeto (Em breve)
          </span>
        </div>

      </div>
    </div>
  );
}

// --- ESTILOS FLUIDOS ---

const containerStyle = {
  padding: '5% 20px', // Padding lateral fixo, mas vertical em %
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  minHeight: '100vh'
};

const tituloStyle = {
  color: '#FF8C00', 
  fontWeight: '900',
  textAlign: 'center',
  marginBottom: '10px',
  width: '90%' // Garante que o texto não cole na borda do celular
};

const subtituloStyle = {
  color: '#666',
  textAlign: 'center',
  marginBottom: '40px',
  width: '85%'
};

const trilhaStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

const faseWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
};

// O segredo do botão: 90% de largura, mas para de crescer em 350px
const baseBotaoStyle = {
  width: '90%', 
  maxWidth: '350px', 
  padding: '22px', 
  borderRadius: '25px',
  border: 'none',
  fontWeight: 'bold',
  fontSize: '1.3rem',
  cursor: 'pointer',
  transition: 'transform 0.1s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const botaoMatematicaStyle = {
  ...baseBotaoStyle,
  backgroundColor: '#FF8C00',
  color: 'white',
  boxShadow: '0 6px 0 #CC7000', // Sombra sólida 3D que funciona em tudo
};

const botaoPortuguesStyle = {
  ...baseBotaoStyle,
  backgroundColor: '#3498db',
  color: 'white',
  boxShadow: '0 6px 0 #2980b9',
};

const legendaStyle = {
  fontWeight: 'bold',
  marginTop: '12px',
  fontSize: '1.1rem',
  color: '#333'
};

const linhaStyle = {
  width: '8px',
  height: '40px',
  backgroundColor: '#e5e5e5',
  margin: '10px 0'
};