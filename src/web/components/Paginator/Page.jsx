import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Paginator's component to select page.
 */
export default class extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    children: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  }

  /**
   * @param {Object} props - element's props:
   * @param {number | string} props#id - unique element's identificator;
   * @param {number | string} props#children - element's content;
   * @param {string} [props#className] - root's className;
   * @param {boolean} [props#disabled] - disabled flag;
   * @param {function} [props#onClick] - element's click-handler.
   */
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Click-handler method.
   */
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
