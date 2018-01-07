import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const { id, onClick, disabled } = this.props;

    if (!disabled && typeof onClick === 'function') {
      onClick(id);
    }
  }

  render () {
    const { children } = this.props;
    return (<div { ...this.props } onClick={this.handleClick}>{children}</div>);
  }
};
