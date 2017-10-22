import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bemclassnames from 'bemclassnames';

export default class Item extends Component {

  render () {
    const { id, name, photo } = this.props;

    const to = `good/${id}`;

    return (
      <div>
        <Link to={to}>
          {name}
        </Link>
      </div>
    );
  }
}