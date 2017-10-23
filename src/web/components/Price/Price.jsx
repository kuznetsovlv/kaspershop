import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';

const Price = (props = {}) => <div { ...props }>{formatPrice(props.price || 0)}</div>;

Price.propTypes = {
  price: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Price;
