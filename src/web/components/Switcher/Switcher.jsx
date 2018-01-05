import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import bemclassnames from 'bemclassnames';
import { blockName, labelElement, animatedMod } from './constants';

import './styles.scss';

export default class Switcher extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    className: null,
    disabled: false,
    checked: false
  }

  constructor (props) {
    super(props);

    this.state = { animated: false };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {
    const { onChange } = this.props;
    const { animated } = this.state;

    if (!animated) {
      this.setState({ animated: true });
    }

    if (typeof onChange === 'function') {
      onChange(this._checkbox.checked);
    }
  }

  render () {
    const { name, className, disabled, checked } = this.props;
    const { animated } = this.state;


    return (
      <div className={classnames(blockName, className)}>
        <input
          type="checkbox"
          id={name}
          name={name}
          disabled={disabled}
          defaultChecked={checked}
          ref={checkbox => this._checkbox = checkbox}
          onChange={this.handleChange}
        />
        <label htmlFor={name} className={bemclassnames(blockName, labelElement, { [animatedMod]: animated })} />
      </div>
    );
  }
}