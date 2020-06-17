import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Create.css';

import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

const Create = (porps) => {
  return (
    <div>
      <Header title="ShareBook" />
      <Link to="/">
        <FloatingIcon className="close-button" icon="x" />
      </Link>
      <Container>
        <div>Create...</div>
      </Container>
    </div>
  );
};

Create.propTypes = {};

export default Create;
