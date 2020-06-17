import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';

// Shared Components
import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

import Card from '../../shared/Card';

const List = ({ shareBooks }) => {
  return (
    <div>
      <Header title="ShareBook" />
      <Link to="/create">
        <FloatingIcon className="add-button" icon="+" />
      </Link>
      <Container>
        <div className="share-book-list">
          {shareBooks.length &&
            shareBooks.map((book) => (
              <Card imageUrl={book.imageUrl} author={book.author} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default List;
