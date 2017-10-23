import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WIDTH, HEIGHT } from './constants';

const Photo = (props = {}) => <img { ...props } width={WIDTH} height={HEIGHT} />;

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string
};

export default Photo;
