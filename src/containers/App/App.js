import React from 'react';
import './App.css';

// Shared Components
import Header from '../../shared/Header';
import Container from '../../shared/Container';

function App() {
  return (
    <div className="App">
      <Header title="ShareBook" />
      <Container>
        <div>Container...</div>
      </Container>
    </div>
  );
}

export default App;
