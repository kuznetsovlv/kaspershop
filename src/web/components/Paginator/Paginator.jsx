import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemclassnames from 'bemclassnames';
import classnames from 'classnames';
import Page from './Page';
import {
  blockName,
  pageElement,
  selectedPageMod,
  leftSwitcherMod,
  rightSwitcherMod,
  pointsMod,
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
    const { pageNumber, pageAmount, onPageChange } = this.props;

    if (typeof onPageChange === 'function') {
      let newPageNumber;

      switch (id) {
        case arrowLeftId:
          newPageNumber = pageNumber > 0 ? pageNumber - 1 : pageNumber;
          break;
        case arrowRightId:
          newPageNumber = pageNumber < pageAmount - 1 ? pageNumber + 1 : pageNumber;
          break;
        default:
          newPageNumber = id;
      }

      if (newPageNumber !== pageNumber) {
        onPageChange(newPageNumber);
      }
    }
  }

  render () {
    const { pageNumber, pageAmount, className } = this.props;

    if (pageAmount <= 0) {
      return null;
    }

    const disabledLeft = pageNumber <= 0;
    const disabledRight = pageNumber >= pageAmount - 1;

    const pageDisplayFlags = [];
    const maxLeft = closePageAmount;
    const minRight = pageAmount - closePageAmount - 1;
    const leftToSelected = pageNumber - closePageAmount;
    const rightToSelected = pageNumber + closePageAmount;

    for (let i = 0; i < pageAmount; ++i) {
      pageDisplayFlags.push(i < maxLeft || (i > leftToSelected && i < rightToSelected) || i > minRight);
    }

    const blockClassName = classnames(bemclassnames(blockName), className);
    const leftSwitcherClassName = bemclassnames(blockName, pageElement, leftSwitcherMod, { disabled: disabledLeft });
    const rightSwitcherClassName = bemclassnames(blockName, pageElement, rightSwitcherMod, { disabled: disabledRight });

    let pointsDisplaied;

    return (
      <div className={blockClassName}>
        <Page
          id={arrowLeftId}
          className={leftSwitcherClassName}
          disabled={disabledLeft}
          onClick={this.handlePageChange}
        >
          {arrowLeftId}
        </Page>
        {pageDisplayFlags.map((flag, id) => {
          if (flag) {
            pointsDisplaied = false;
            const className = bemclassnames(blockName, pageElement, {[selectedPageMod]: id === pageNumber});
            const value = id + 1;
            return <Page key={id} id={id} className={className} onClick={this.handlePageChange}>{value}</Page>
          } else if (pointsDisplaied) {
            return null;
          }

          const className = bemclassnames(blockName, pageElement, pointsMod);
          return <Page key={id} id={id} className={className}>...</Page>;
        })}
        <Page
          id={arrowRightId}
          className={rightSwitcherClassName}
          disabled={disabledRight}
          onClick={this.handlePageChange}
        >
          {arrowRightId}
        </Page>
      </div>
    );
  }
};
