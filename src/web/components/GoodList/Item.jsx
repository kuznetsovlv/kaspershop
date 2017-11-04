import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bemclassnames from 'bemclassnames';
import { Photo, Price, Availability } from '../../components';
import {
  blockName,
  itemElement,
  photoElement,
  infoElement,
  nameElement,
  cathegoryElement,
  linkElement,
  priceElement,
  buttonPlaceElement,
  buttonElement,
  idElement
} from './constants';

import './styles.scss';

export default class Item extends Component {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    cathegoryList: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    onAddToBag: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick (event) {
    const { id, onAddToBag } = this.props;

    if (typeof onAddToBag === 'function') {
      onAddToBag(id);
      event.preventDefault();
    }
  }

  render () {
    const { id, name, photo, cathegoryList, price, amount } = this.props;
    const to = `good/${id}`;

    const itemClassName = bemclassnames(blockName, itemElement);
    const photoClassName = bemclassnames(blockName, photoElement);
    const infoClassName = bemclassnames(blockName, infoElement);
    const nameClassName = bemclassnames(blockName, nameElement);
    const cathegoryClassName = bemclassnames(blockName, cathegoryElement);
    const linkClassName = bemclassnames(blockName, linkElement);
    const priceClassName = bemclassnames(blockName, priceElement);
    const buttonPlaceClassName = bemclassnames(blockName, buttonPlaceElement);
    const buttonClassName = bemclassnames(blockName, buttonElement);
    const idClassName = bemclassnames(blockName, idElement);

    return (
      <div className={itemClassName}>
        <Link to={to} className={linkClassName}>
          <Photo src={photo} className={photoClassName} alt={name} />
          <div className={infoClassName}>
            <div className={nameClassName}>{name}</div>
            <div className={cathegoryClassName}>{cathegoryList}</div>
            <div className={idClassName}>Артикул: {id}</div>
            <Availability amount={amount} />
          </div>
          <Price price={price} className={priceClassName} />
          <div className={buttonPlaceClassName}>
            <input className={buttonClassName} type="button" value="Добавить в корзину" onClick={this.handleButtonClick} />
          </div>
        </Link>
      </div>
    );
  }
}