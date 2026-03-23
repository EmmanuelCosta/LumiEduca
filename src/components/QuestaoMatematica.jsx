import React, { useState } from 'react';

export default function QuestaoMatematica() {
  // Estados para controlar a lógica
  const [respondido, setRespondido] = useState(false);
  const [escolhaUsuario, setEscolhaUsuario] = useState(null);

  const questao = {
    pergunta: "Quanto é 5 + 3?",
    opcoes: [6, 7, 8, 9],
    correta: 8
  };

  const conferirResposta = (valor) => {
    if (respondido) return; // Impede clicar de novo após responder
    setEscolhaUsuario(valor);
    setRespondido(true);
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginBottom: '20px' }}>{questao.pergunta}</h2>
      
      <div style={gridStyle}>
        {questao.opcoes.map((opcao) => {
          // Lógica das cores:
          let corBotao = 'var(--lumi-white)'; 
          let corBorda = '#e5e5e5';
          let corTexto = 'var(--text-main)';

          if (respondido) {
            if (opcao === questao.correta) {
              corBotao = '#2ecc71'; // Verde (Acerto)
              corBorda = '#27ae60';
              corTexto = 'white';
            } else if (opcao === escolhaUsuario) {
              corBotao = '#e74c3c'; // Vermelho (Erro)
              corBorda = '#c0392b';
              corTexto = 'white';
            }
          }

          return (
            <button
              key={opcao}
              onClick={() => conferirResposta(opcao)}
              style={{
                ...botaoOpcaoStyle,
                backgroundColor: corBotao,
                borderBottom: `4px solid ${corBorda}`,
                color: corTexto
              }}
            >
              {opcao}
            </button>
          );
        })}
      </div>

      {respondido && (
        <div style={{ marginTop: '20px' }}>
          {escolhaUsuario === questao.correta 
            ? <p style={{color: '#27ae60', fontWeight: 'bold'}}>🌟 Parabéns! Você acertou!</p>
            : <p style={{color: '#c0392b', fontWeight: 'bold'}}>❌ Quase lá! Tente novamente.</p>
          }
          <button 
            className="btn-lumi" 
            onClick={() => {setRespondido(false); setEscolhaUsuario(null)}}
            style={{ marginTop: '10px' }}
          >
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}

// Estilos básicos para o MVP
const cardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '20px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  textAlign: 'center',
  maxWidth: '400px',
  margin: '20px auto'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '15px'
};

const botaoOpcaoStyle = {
  padding: '15px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '12px',
  border: '2px solid #e5e5e5',
  cursor: 'pointer',
  transition: '0.2s'
};