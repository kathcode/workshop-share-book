import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import './Create.css';

import Header from '../../shared/Header';
import Container from '../../shared/Container';
import FloatingIcon from '../../shared/FloatingIcon';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      imageUrl: '',
    };
  }

  handleOnSave = () => {
    const { onCreate } = this.props;
    onCreate(this.state);
  };

  handleOnUpdateField = (value, field) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    return (
      <div>
        <Header title="ShareBook" />
        <Link to="/">
          <FloatingIcon className="close-button" icon="x" />
        </Link>
        <Container>
          <div className="form">
            <h2>Create new book</h2>
            <input
              onChange={(event) =>
                this.handleOnUpdateField(event.target.value, 'author')
              }
              placeholder="Add the author"
            />
            <input
              onChange={(event) =>
                this.handleOnUpdateField(event.target.value, 'imageUrl')
              }
              placeholder="Add the image url of the book"
            />
            <Link to="/" onClick={this.handleOnSave}>
              <button>Create</button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

Create.propTypes = {
  onCreate: PropTypes.func,
};

export default Create;
