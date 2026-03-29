import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bancoDeQuestoes } from '../data/questoes'; // Certifique-se de que exportou como 'bancoDeQuestoes'

export default function QuestaoMatematica({ setPontos }) {
  const { materia } = useParams(); // Pega 'matematica' ou 'portugues' da URL
  const navigate = useNavigate();
  
  // Busca as questões da matéria selecionada ou usa uma lista vazia
  const questoes = bancoDeQuestoes[materia] || [];

  const [indiceQuestao, setIndiceQuestao] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [escolhaUsuario, setEscolhaUsuario] = useState(null);
  const [errouAlguma, setErrouAlguma] = useState(false); // Monitora erros

  const questaoAtual = questoes[indiceQuestao];

  const conferirResposta = (valor) => {
    if (respondido) return;
    
    setEscolhaUsuario(valor);
    setRespondido(true);

    if (valor === questaoAtual.correta) {
      setPontos(prev => prev + 10);
    } else {
      setErrouAlguma(true); // Marcou que errou pelo menos uma
    }
  };

  const proximaQuestao = () => {
    if (indiceQuestao < questoes.length - 1) {
      // Vai para a próxima pergunta
      setIndiceQuestao(indiceQuestao + 1);
      setRespondido(false);
      setEscolhaUsuario(null);
    } else {
      // Fim do questionário
      if (errouAlguma) {
        alert("Ops! Você errou algumas questões. Tente novamente para ganhar a medalha!");
        // Opcional: setPontos(0); // Reinicia os pontos se quiser
        navigate(`/trilha/${materia}`); // Volta para a trilha da matéria
      } else {
        navigate('/vitoria'); // Só vai para a vitória se acertou TUDO
      }
    }
  };

  // Caso não existam questões (segurança)
  if (questoes.length === 0) return <p>Nenhuma questão encontrada.</p>;

  return (
    <div style={cardStyle}>
      {/* Barra de Progresso */}
      <div style={progressoContainer}>
        <div style={{...barraProgresso, width: `${((indiceQuestao + 1) / questoes.length) * 100}%`}}></div>
      </div>

      <p style={{color: '#888', fontWeight: 'bold'}}>
        {materia.toUpperCase()} • QUESTÃO {indiceQuestao + 1} DE {questoes.length}
      </p>
      
      <h2 style={{ marginBottom: '20px' }}>{questaoAtual.pergunta}</h2>
      
      <div style={gridStyle}>
        {questaoAtual.opcoes.map((opcao) => {
          let corBotao = 'white';
          if (respondido) {
            if (opcao === questaoAtual.correta) corBotao = '#2ecc71'; // Verde acerto
            else if (opcao === escolhaUsuario) corBotao = '#e74c3c'; // Vermelho erro
          }

          return (
            <button
              key={opcao}
              onClick={() => conferirResposta(opcao)}
              className="btn-lumi"
              style={{ 
                ...botaoEstilo, 
                backgroundColor: corBotao, 
                color: respondido && (opcao === questaoAtual.correta || opcao === escolhaUsuario) ? 'white' : 'black',
                cursor: respondido ? 'default' : 'pointer'
              }}
            >
              {opcao}
            </button>
          );
        })}
      </div>

      {respondido && (
        <div style={feedbackStyle}>
          {escolhaUsuario === questaoAtual.correta ? (
            <span style={{color: '#27ae60', fontSize: '1.2rem'}}>🌟 Incrível! +10 pontos</span>
          ) : (
            <span style={{color: '#c0392b', fontSize: '1.2rem'}}>💡 O Lumi diz: a resposta era {questaoAtual.correta}</span>
          )}
          
          <button className="btn-lumi" onClick={proximaQuestao} style={btnProxima}>
            {indiceQuestao < questoes.length - 1 ? "PRÓXIMA PERGUNTA" : "VER RESULTADO"}
          </button>
        </div>
      )}
    </div>
  );
}

// Estilos mantidos e organizados
const cardStyle = { backgroundColor: 'white', padding: '30px', borderRadius: '20px', maxWidth: '450px', margin: '20px auto', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' };
const botaoEstilo = { padding: '20px', fontSize: '1.2rem', border: '2px solid #eee', transition: '0.2s' };
const feedbackStyle = { marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 'bold' };
const progressoContainer = { width: '100%', height: '12px', backgroundColor: '#eee', borderRadius: '6px', marginBottom: '20px', overflow: 'hidden' };
const barraProgresso = { height: '100%', backgroundColor: '#FF8C00', transition: '0.5s ease-in-out' };
const btnProxima = { marginTop: '15px', width: '100%', backgroundColor: '#FF8C00', color: 'white' };