import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import QuestaoMatematica from './components/QuestaoMatematica';

// Criamos um componente rápido para a Home
function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>O que o Lumi vai te ensinar hoje?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
        
        {/* O 'Link' substitui o <a> e o estado manual de navegação */}
        <Link to="/matematica" className="btn-lumi" style={{ textDecoration: 'none' }}>
          ➕ Matemática
        </Link>

        <button className="btn-lumi" style={{ opacity: 0.5, cursor: 'not-allowed' }} disabled>
          📚 Português (Em breve)
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Header />
      
      {/* Aqui definimos os caminhos do site */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matematica" element={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'var(--lumi-orange)', fontWeight: 'bold' }}>← Voltar</Link>
            <QuestaoMatematica />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;