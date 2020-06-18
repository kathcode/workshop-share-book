import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = ({ imageUrl }) => {
  return <img src={imageUrl} alt={imageUrl} />;
};

CardContainer.propTypes = {
  imageUrl: PropTypes.string,
};

export default CardContainer;
