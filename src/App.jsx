// src/App.jsx
import Header from './components/Header';
import QuestaoMatematica from './components/QuestaoMatematica';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Header />
      <div style={{ padding: '20px' }}>
        <QuestaoMatematica />
      </div>
    </div>
  );
}

export default App;