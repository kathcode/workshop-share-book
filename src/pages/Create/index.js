import React from 'react';
import PropTypes from 'prop-types';

import './Create.css';

import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

const Create = (props) => {
  return (
    <div>
      <Header title="ShareBook" />
      <FloatingIcon className="close-button" icon="x" />
      <Container>
        <div>Create...</div>
      </Container>
    </div>
  );
};

Create.propTypes = {};

export default Create;
