import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemclassnames from 'bemclassnames';
import {
  NORMALISATION_VALUE,
  blockName,
  sliderElementName,
  textElementName,
  bounds,
  texts
} from './constants';

import './styles.scss';

const Availability = ({ amount = 0 }) => {
  const normalaizedAmount = amount / NORMALISATION_VALUE
  let sliderPercentWidth = 100 * (1 - normalaizedAmount);

  if (sliderPercentWidth <  0) {
    sliderPercentWidth = 0;
  }

  const sliderStyles = { width: `${sliderPercentWidth}%` };

  const blockClassName = bemclassnames(blockName);
  const sliderClassName = bemclassnames(blockName, sliderElementName);
  const textElementClassName = bemclassnames(blockName, textElementName);

  let text = 'Информация о наличии отсутсвует';

  const { length } = bounds;

  for (let i = 0; i < length; ++i) {
    if (normalaizedAmount >= bounds[i]) {
      text = texts[i] || text;
    } else {
      break;
    }
  }

  return (
    <div className={blockClassName}>
      <div className={sliderClassName} style={sliderStyles} />
      <div className={textElementClassName}>{text}</div>
    </div>
  );
};

Availability.propTypes = {
  amount: PropTypes.number
};

export default Availability;
