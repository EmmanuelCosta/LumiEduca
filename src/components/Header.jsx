// src/components/Header.jsx
import logoLumi from '../assets/Lumi.png';

export default function Header({ pontos }) {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logoLumi} alt="Lumi" style={{height: '40px'}} />
          <h2 style={{color: 'var(--lumi-orange)', margin: 0}}>LumiEduca</h2>
        </div>
        
        {/* Placar de Pontos Real-Time */}
        <div style={placarStyle}>
          <span style={{ fontSize: '1.2rem' }}>🌟</span>
          <span style={{ fontWeight: '900', color: '#555' }}>{pontos}</span>
        </div>
      </div>
    </header>
  );
}

const placarStyle = {
  backgroundColor: '#f0f0f0',
  padding: '5px 15px',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  border: '2px solid #ddd'
};

const headerStyle = {
  padding: '15px 20px',
  borderBottom: '2px solid #e5e5e5',
  backgroundColor: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 100
};

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
};