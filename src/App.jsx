import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import Questao from './pages/Questao';
import TelaVitoria from './pages/TelaVitoria';
import Login from './pages/Login';
import CriarTarefa from './pages/CriarTarefa';
import TarefasRecebidas from './pages/TarefasRecebidas';
import RelatorioProfessor from './pages/RelatorioProfessor';

function App() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || 'visitante';
  const userType = localStorage.getItem('userType');

  // Pontos únicos por usuário
  const [pontos, setPontos] = useState(() => {
    const salvo = localStorage.getItem(`lumi_pontos_${userName}`);
    return salvo ? parseInt(salvo) : 0;
  });

  // Questões concluídas únicas por usuário
  const [concluidas, setConcluidas] = useState(() => {
    const salvo = localStorage.getItem(`lumi_concluidas_${userName}`);
    return salvo ? JSON.parse(salvo) : [];
  });

  // Sincroniza estados com LocalStorage quando pontos ou conclusões mudam
  useEffect(() => {
    if (userName !== 'visitante') {
      localStorage.setItem(`lumi_pontos_${userName}`, pontos.toString());
      localStorage.setItem(`lumi_concluidas_${userName}`, JSON.stringify(concluidas));
    }
  }, [pontos, concluidas, userName]);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {userType && <Header pontos={pontos} />}
      
      {userType === 'professor' && (
        <div style={adminBannerStyle}>
          <span style={{ fontWeight: 'bold' }}>Área do Professor 🎓</span>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => navigate('/tarefas-recebidas')} style={btnCriarTarefaStyle}>
          📂 GESTÃO DE TAREFAS
        </button>
        <button onClick={() => navigate('/relatorio')} style={btnRelatorioStyle}>
          📊 RELATÓRIO
        </button>
        </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={userType ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/criar-tarefa" element={userType === 'professor' ? <CriarTarefa /> : <Navigate to="/" />} />
        <Route path="/relatorio" element={userType === 'professor' ? <RelatorioProfessor /> : <Navigate to="/" />} />
        
        <Route path="/tarefas-recebidas" element={
          userType ? <TarefasRecebidas setPontos={setPontos} /> : <Navigate to="/login" />
        } />
        
        <Route path="/trilha/:materia" element={userType ? <Trilha /> : <Navigate to="/login" />} />
        <Route path="/exercicio/:materia" element={
          userType ? (
            <Questao 
              setPontos={setPontos} 
              concluidas={concluidas} 
              setConcluidas={setConcluidas} 
            />
          ) : <Navigate to="/login" />
        } />
        <Route path="/vitoria" element={userType ? <TelaVitoria /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

// --- ESTILOS ---
const adminBannerStyle = { backgroundColor: '#3498db', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '12px 20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', flexWrap: 'wrap' };
const btnCriarTarefaStyle = { backgroundColor: '#fff', color: '#3498db', border: 'none', padding: '6px 15px', borderRadius: '8px', fontWeight: '900', cursor: 'pointer', fontSize: '0.8rem', boxShadow: '0 3px 0 #2980b9' };
const btnRelatorioStyle = { ...btnCriarTarefaStyle, backgroundColor: '#2ecc71', color: 'white', boxShadow: '0 3px 0 #27ae60' };

export default App;