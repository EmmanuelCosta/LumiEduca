import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Trilha from './pages/Trilha';
import Questao from './pages/Questao';
import TelaVitoria from './pages/TelaVitoria';

function App() {
  // Estado de Pontos (Persistente)
  const [pontos, setPontos] = useState(() => {
    const salvo = localStorage.getItem('lumi_pontos');
    return salvo ? parseInt(salvo) : 0;
  });

  // Estado de Questões Concluídas (Para não repetir pontos)
  const [concluidas, setConcluidas] = useState(() => {
    const salvo = localStorage.getItem('lumi_concluidas');
    return salvo ? JSON.parse(salvo) : [];
  });

  useEffect(() => {
    localStorage.setItem('lumi_pontos', pontos.toString());
    localStorage.setItem('lumi_concluidas', JSON.stringify(concluidas));
  }, [pontos, concluidas]);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Header pontos={pontos} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trilha/:materia" element={<Trilha />} />
        <Route path="/exercicio/:materia" element={
          <Questao 
            setPontos={setPontos} 
            concluidas={concluidas} 
            setConcluidas={setConcluidas} 
          />
        } />
        <Route path="/vitoria" element={<TelaVitoria pontos={pontos} />} />
      </Routes>
    </div>
  );
}

export default App;