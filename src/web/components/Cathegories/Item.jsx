import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const { id, onClick } = this.props;

    if (typeof onClick === 'function') {
      onClick(id);
    }
  }

  render () {
    return <li { ...this.props } onClick={this.handleClick} />;
  }
}
