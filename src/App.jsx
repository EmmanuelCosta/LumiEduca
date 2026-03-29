// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Trilha from './pages/Trilha';
import Home from './pages/Home';
import QuestaoMatematica from './pages/QuestaoMatematica';
import TelaVitoria from './pages/TelaVitoria';

function App() {
  const [pontos, setPontos] = useState(() => {
    const salvo = localStorage.getItem('lumi_pontos');
    return salvo ? parseInt(salvo) : 0;
  });

  // Toda vez que o estado 'pontos' mudar, ele salva no navegador
  useEffect(() => {
    localStorage.setItem('lumi_pontos', pontos.toString());
  }, [pontos]);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Header pontos={pontos} />
      
      <Routes>
        <Route path="/" element={<Home />} />
  
        {/* Esta rota serve para qualquer trilha: /trilha/matematica ou /trilha/portugues */}
        <Route path="/trilha/:materia" element={<Trilha />} />

        {/* Rota para o exercício específico */}
        <Route path="/exercicio/:materia/:id" element={<QuestaoMatematica pontos={pontos} setPontos={setPontos} />} />

        <Route path="/vitoria" element={<TelaVitoria pontos={pontos} setPontos={setPontos} />} />
      </Routes>
    </div>
  );
}

export default App;