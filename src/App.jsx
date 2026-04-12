import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Adicionei Navigate
import Header from './components/Header';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import Questao from './pages/Questao';
import TelaVitoria from './pages/TelaVitoria';
import Login from './pages/Login'; // 1. Importe o Login

function App() {
  // Estado de Pontos
  const [pontos, setPontos] = useState(() => {
    const salvo = localStorage.getItem('lumi_pontos');
    return salvo ? parseInt(salvo) : 0;
  });

  // Estado de Questões Concluídas
  const [concluidas, setConcluidas] = useState(() => {
    const salvo = localStorage.getItem('lumi_concluidas');
    return salvo ? JSON.parse(salvo) : [];
  });

  // 2. Buscar o tipo de usuário logado
  const userType = localStorage.getItem('userType');

  useEffect(() => {
    localStorage.setItem('lumi_pontos', pontos.toString());
    localStorage.setItem('lumi_concluidas', JSON.stringify(concluidas));
  }, [pontos, concluidas]);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* O Header e o Banner só aparecem se houver alguém logado */}
      {userType && <Header pontos={pontos} />}
      
      {userType === 'professor' && (
        <div style={adminBanner}>Área do Professor: Gerenciar Turmas</div>
      )}

      <Routes>
        {/* 3. Se não estiver logado, manda para /login. Se estiver, mostra a Home */}
        <Route path="/" element={userType ? <Home /> : <Navigate to="/login" />} />
        
        {/* Rota do Login */}
        <Route path="/login" element={<Login />} />

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
        
        <Route path="/vitoria" element={userType ? <TelaVitoria pontos={pontos} /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

// Estilo do Banner do Professor
const adminBanner = {
  backgroundColor: '#3498db',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  fontWeight: 'bold',
  fontSize: '0.9rem'
};

export default App;