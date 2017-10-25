import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemclassnames from 'bemclassnames';
import classnames from 'classnames';
import {
  blockName,
  pageElement,
  selectedPageMod,
  arrowLeftId,
  arrowRightId,
  closePageAmount
} from './constants';

import './styles.scss';

export default class Paginator extends Component {
  static propTypes = {
    pageNumber: PropTypes.number.isRequired,
    pageAmount: PropTypes.number.isRequired,
    className: PropTypes.string,
    onPageChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange (id) {
    const { pageNumber, onPageChange } = this.props;

    if (typeof onPageChange === 'function') {
      let newPageNumber;

      switch (id) {
        case arrowLeftId:
          newPageNumber = pageNumber - 1;
          break;
        case arrowRightId:
          newPageNumber = pageNumber + 1;
          break;
        default:
          newPageNumber = id;
      }

      onPageChange(newPageNumber);
    }
  }

  render () {
    const { pageNumber, pageAmount, className } = this.props;

    const pageDisplayFlags = [];
    const maxLeft = closePageAmount;
    const minRight = pageAmount - closePageAmount - 1;
    const leftToSelected = pageNumber - closePageAmount;
    const rightToSelected = pageNumber + closePageAmount;

    for (let i = 0; i < pageAmount; ++i) {
      pageDisplayFlags.push(i < maxLeft || (i > leftToSelected && i < rightToSelected) || i > minRight);
    }

    const blockClassName = classnames(bemclassnames(blockName), className);
    const pageClassName = bemclassnames(blockName, pageElement);

    return (
      <div className={blockClassName}>
        
      </div>
    );
  }
};
