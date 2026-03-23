// src/components/Header.jsx
import logoLumi from '../assets/Lumi.png';

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <img src={logoLumi} alt="Lumi Mascote" style={{height: '50px'}} />
        <h1 style={{color: 'var(--lumi-orange)', margin: 0}}>LumiEduca</h1>
      </div>
    </header>
  );
}

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