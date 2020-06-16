import React from 'react';
import PropTypes from 'prop-types';

import './FloatingIcon.css';

const FloatingIcon = ({ icon, className }) => {
  return (
    <div className={`floating-icon ${className}`}>
      <span>{icon}</span>
    </div>
  );
};

FloatingIcon.propTypes = {
  icon: PropTypes.string,
};

export default FloatingIcon;
