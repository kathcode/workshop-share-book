import React from 'react';
import './App.css';

// Shared Components
import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

function App() {
  return (
    <div className="App">
      <Header title="ShareBook" />
      <FloatingIcon className="add-button" icon="+" />
      <Container>
        <div>Container...</div>
      </Container>
    </div>
  );
}

export default App;
