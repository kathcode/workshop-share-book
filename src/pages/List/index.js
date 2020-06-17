import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

// Shared Components
import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

const List = () => {
  return (
    <div>
      <Header title="ShareBook" />
      <Link to="/create">
        <FloatingIcon className="add-button" icon="+" />
      </Link>
      <Container>
        <div>Container...</div>
      </Container>
    </div>
  );
};

export default List;
