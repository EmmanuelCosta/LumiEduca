import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RelatorioProfessor() {
  const navigate = useNavigate();
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    setHistorico(JSON.parse(localStorage.getItem('lumi_historico_tarefas') || '[]'));
  }, []);

  return (
    <div style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      <h1 style={{ color: '#3498db', marginBottom: '30px' }}>Relatório de Atividades 📊</h1>
      <div style={{ width: '100%', maxWidth: '800px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
              <th style={thStyle}>Aluno</th>
              <th style={thStyle}>Questão</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Data/Hora</th>
            </tr>
          </thead>
          <tbody>
            {historico.map(h => (
              <tr key={h.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}>{h.aluno}</td>
                <td style={tdStyle}>{h.pergunta}</td>
                <td style={{ ...tdStyle, color: h.status.includes('✅') ? '#2ecc71' : '#e74c3c', fontWeight: 'bold' }}>{h.status}</td>
                <td style={tdStyle}>{h.data} - {h.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => navigate('/')} style={btnVoltarStyle}>VOLTAR AO INÍCIO</button>
    </div>
  );
}

const thStyle = { padding: '15px', textAlign: 'left' };
const tdStyle = { padding: '15px' };
const btnVoltarStyle = { marginTop: '30px', padding: '10px 25px', borderRadius: '10px', border: 'none', backgroundColor: '#888', color: 'white', fontWeight: 'bold', cursor: 'pointer' };