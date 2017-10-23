import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bemclassnames from 'bemclassnames';
import { Photo, Price } from '../../components';
import {
  blockName,
  itemElement,
  photoElement,
  infoElement,
  nameElement,
  cathegoryElement,
  linkElement,
  priceElement
} from './constants';

import './styles.scss';

export default class Item extends Component {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    cathegoryList: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }

  render () {
    const { id, name, photo, cathegoryList, price } = this.props;
    const to = `good/${id}`;

    const itemClassName = bemclassnames(blockName, itemElement);
    const photoClassName = bemclassnames(blockName, photoElement);
    const infoClassName = bemclassnames(blockName, infoElement);
    const nameClassName = bemclassnames(blockName, nameElement);
    const cathegoryClassName = bemclassnames(blockName, cathegoryElement);
    const linkClassName = bemclassnames(blockName, linkElement);
    const priceClassName = bemclassnames(blockName, priceElement);

    return (
      <div className={itemClassName}>
        <Link to={to} className={linkClassName}>
          <Photo src={photo} className={photoClassName} alt={name} />
          <div className={infoClassName}>
            <div className={nameClassName}>{name}</div>
            <div className={cathegoryClassName}>{cathegoryList}</div>
          </div>
          <Price price={price} className={priceClassName} />
        </Link>
      </div>
    );
  }
}