import React, { useState } from 'react';
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

  const questaoAtual = questoes[indice];
  const idUnico = `${materia}-${questaoAtual?.id}`;

  const conferir = (valor) => {
    if (respondido) return;
    setEscolha(valor);
    setRespondido(true);

    if (valor === questaoAtual.correta) {
      // SÓ PONTUA SE NÃO ESTIVER NA LISTA DE CONCLUÍDAS
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

  return (
    <div style={cardStyle}>
      <h2 style={{ marginBottom: '20px' }}>{questaoAtual.pergunta}</h2>
      <div style={gridStyle}>
        {questaoAtual.opcoes.map((op) => (
          <button 
            key={op} 
            className="btn-lumi"
            style={{ 
              padding: '20px', 
              backgroundColor: respondido ? (op === questaoAtual.correta ? '#2ecc71' : (op === escolha ? '#e74c3c' : 'white')) : 'white',
              color: respondido && (op === questaoAtual.correta || op === escolha) ? 'white' : 'black'
            }}
            onClick={() => conferir(op)}
          >
            {op}
          </button>
        ))}
      </div>
      {respondido && (
        <button className="btn-lumi" onClick={proximo} style={{ marginTop: '20px', width: '100%', backgroundColor: '#FF8C00', color: 'white' }}>
          {indice < questoes.length - 1 ? "PRÓXIMA" : "FINALIZAR"}
        </button>
      )}
    </div>
  );
}

const cardStyle = { backgroundColor: 'white', padding: '30px', borderRadius: '20px', maxWidth: '450px', margin: '40px auto', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' };