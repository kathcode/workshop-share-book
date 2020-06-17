import React from 'react';
import PropTypes from 'prop-types';

// Components
import CardContainer from './CardContainer';
import CardFooter from './CardFooter';

const Card = ({ imageUrl, author }) => {
  return (
    <div className="card">
      <CardContainer imageUrl={imageUrl} />
      <CardFooter author={author} />
    </div>
  );
};

Card.propTypes = {};

export default Card;
