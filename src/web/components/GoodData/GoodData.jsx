import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addGoodIntoBag } from '../../actions';
import { combineBEMBlocks } from '../../utils';
import { FileLoader, Photo, Availability } from '../../components';
import {
  blockName,
  headerElementName,
  dataElementName,
  photoElementName,
  goodNameElementName,
  goodNameItemElementName,
  bagZoneElementName,
  toBagButtonElementName,
  inTheBagElementName
} from './constants';

import './styles.scss';

export class GoodData extends Component {
  static propTypes = {
    bag: PropTypes.objectOf(PropTypes.number).isRequired,
    good: PropTypes.object.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    blockName: PropTypes.string,
    className: PropTypes.string,
    addGoodIntoBag: PropTypes.func
  };

  static defaultProps = {
    blockName: null,
    className: null,
    good: {},
    fields: []
  }

  constructor (props) {
    super(props);

    this.addGoodHandler = this.addGoodHandler.bind(this);
  }

  addGoodHandler () {
    const { addGoodIntoBag } = this.props;
    const good = this.props.good || {};
    const { id = '' } = good;

    if (typeof addGoodIntoBag === 'function') {
      addGoodIntoBag(id);
    }
  }
  

  render () {
    const { blockName: userBlockName, className } = this.props;
    const bag = this.props.bag || {};
    const good = this.props.good || {};
    const {
      id = '',
      name,
      photo,
      amount = 0
    } = good;

    const amountInTheBag = bag[id] || 0;
    const inTheBagText = `В корзине: ${amountInTheBag}`;

    const blocks = userBlockName ? [blockName, userBlockName] : [blockName];

    const blockClassName = classnames(combineBEMBlocks(blocks), { [className]: className });
    const headerClassName = combineBEMBlocks(blocks, headerElementName);
    const dataClassName = combineBEMBlocks(blocks, dataElementName);
    const photoClassName = combineBEMBlocks(blocks, photoElementName);
    const goodNameClassName = combineBEMBlocks(blocks, goodNameElementName);
    const goodNameItemClassName = combineBEMBlocks(blocks, goodNameItemElementName);
    const bagZoneClassName = combineBEMBlocks(blocks, bagZoneElementName);
    const toBagButtonClassName = combineBEMBlocks(blocks, toBagButtonElementName);
    const inTheBagClassName = combineBEMBlocks(blocks, inTheBagElementName);
    
    return (
      <div className={blockClassName}>
        <div className={headerClassName}>
          <div className={photoElementName}>
            <Photo src={photo} />
          </div>

          <div className={goodNameClassName}>
            <div className={goodNameItemClassName}>{name}</div>
            <div className={goodNameItemClassName}>
              <Availability amount={amount} />
            </div>
          </div>

          <div className={bagZoneClassName}>
            <input type="button" onClick={this.addGoodHandler} className={toBagButtonClassName} value="Добавить в корзину" />
            <div className={inTheBagClassName}>{inTheBagText}</div>
          </div>
        </div>

        <div className={dataClassName}>Data</div>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, bag = {} }) => {
  const fields = data.fields || [];

  return {
    bag,
    fields
  };
}

const mapDispatchToPops = dispatch => ({
  addGoodIntoBag: id => dispatch(addGoodIntoBag(id))
});

export default connect(mapStateToProps, mapDispatchToPops)(GoodData);
