import React from 'react';

import './List.css';

// Shared Components
import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

const List = () => {
  return (
    <div>
      <Header title="ShareBook" />
      <FloatingIcon className="add-button" icon="+" />
      <Container>
        <div>Container...</div>
      </Container>
    </div>
  );
};

export default List;
