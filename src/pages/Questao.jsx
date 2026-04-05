import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bancoDeQuestoes } from '../data/questoes';

export default function Questao({ setPontos, concluidas, setConcluidas }) {
  const { materia } = useParams();
  const navigate = useNavigate();
  const questoes = bancoDeQuestoes[materia] || [];

  const [indice, setIndice] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [escolha, setEscolha] = useState(null);
  const [errouAlguma, setErrouAlguma] = useState(false);

  // Lógica para detectar mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const questaoAtual = questoes[indice];
  const idUnico = `${materia}-${questaoAtual?.id}`;

  const conferir = (valor) => {
    if (respondido) return;
    setEscolha(valor);
    setRespondido(true);

    if (valor === questaoAtual.correta) {
      if (!concluidas.includes(idUnico)) {
        setPontos(prev => prev + 10);
        setConcluidas(prev => [...prev, idUnico]);
      }
    } else {
      setErrouAlguma(true);
    }
  };

  const proximo = () => {
    if (indice < questoes.length - 1) {
      setIndice(indice + 1);
      setRespondido(false);
      setEscolha(null);
    } else {
      if (errouAlguma) {
        alert("Ops! Você errou algumas. Tente acertar todas para ganhar a medalha!");
        navigate(`/trilha/${materia}`);
      } else {
        navigate('/vitoria');
      }
    }
  };

  if (!questaoAtual) return null;

  return (
    <div style={{ 
      ...cardStyle, 
      maxWidth: isMobile ? '90%' : '450px',
      padding: isMobile ? '20px' : '30px'
    }}>
      {/* Indicador de progresso */}
      <p style={{ color: '#888', fontWeight: 'bold' }}>
        Questão {indice + 1} de {questoes.length}
      </p>

      <h2 style={{ 
        marginBottom: '30px', 
        fontSize: isMobile ? '1.5rem' : '1.8rem',
        color: '#333'
      }}>
        {questaoAtual.pergunta}
      </h2>

      <div style={{ 
        ...gridStyle, 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' // Coluna única no mobile
      }}>
        {questaoAtual.opcoes.map((op) => {
          const isCorreta = op === questaoAtual.correta;
          const isEscolhida = op === escolha;
          
          let bgColor = 'white';
          let textColor = 'black';

          if (respondido) {
            if (isCorreta) {
              bgColor = '#2ecc71';
              textColor = 'white';
            } else if (isEscolhida) {
              bgColor = '#e74c3c';
              textColor = 'white';
            }
          }

          return (
            <button 
              key={op} 
              style={{ 
                ...btnRespostaStyle,
                padding: isMobile ? '25px 15px' : '20px', 
                fontSize: isMobile ? '1.3rem' : '1.1rem',
                backgroundColor: bgColor,
                color: textColor,
                border: respondido ? 'none' : '2px solid #e5e5e5',
                boxShadow: !respondido ? '0 4px 0 #e5e5e5' : 'none'
              }}
              onClick={() => conferir(op)}
            >
              {op}
            </button>
          );
        })}
      </div>

      {respondido && (
        <button 
          onClick={proximo} 
          style={{ 
            ...btnProximoStyle,
            padding: isMobile ? '20px' : '15px',
            fontSize: isMobile ? '1.2rem' : '1rem'
          }}
        >
          {indice < questoes.length - 1 ? "PRÓXIMA PERGUNTA ➔" : "VER MEUS PONTOS 🏆"}
        </button>
      )}
    </div>
  );
}

// --- ESTILOS ---

const cardStyle = { 
  backgroundColor: 'white', 
  margin: '20px auto', 
  textAlign: 'center', 
  borderRadius: '25px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.08)' 
};

const gridStyle = { 
  display: 'grid', 
  gap: '15px' 
};

const btnRespostaStyle = {
  borderRadius: '15px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.1s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const btnProximoStyle = {
  marginTop: '30px', 
  width: '100%', 
  backgroundColor: '#FF8C00', 
  color: 'white',
  border: 'none',
  borderRadius: '15px',
  fontWeight: '900',
  cursor: 'pointer',
  boxShadow: '0 5px 0 #CC7000'
};