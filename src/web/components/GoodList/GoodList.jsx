import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';
import { getCathegoriesAsString, has } from '../../utils';
import { Paginator } from '../../components';
import {
  blockName,
  listElement,
  paginatorElement,
  MAX_AMOUNT_TO_DISPLAY
} from './constants';
import { setPageNumber } from './actions';
import Item from './Item';

import './styles.scss';

class GoodList extends Component {
  static propTypes = {
    pageNumber: PropTypes.number.isRequired,
    pageAmount: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.object).isRequired,
    setPageNumber: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.addGoodToBag = this.addGoodToBag.bind(this);
  }

  addGoodToBag (id) {
    // TODO: Add realisation
  }

  handlePageChange (pageNumber) {
    const { setPageNumber } = this.props;

    if (typeof setPageNumber === 'function') {
      setPageNumber(pageNumber);
    }
  }

  render () {
    const { pageNumber, pageAmount } = this.props;
    const goods = this.props.goods || [];

    const blockClassName = bemclassnames(blockName);
    const listClassName = bemclassnames(blockName, listElement);
    const paginatorClassName = bemclassnames(blockName, paginatorElement);

    return (
      <div className={blockClassName}>
        <ul className={listClassName}>
          {goods.map(good => {
            const { id } = good;

            return (
              <li key={id}>
                <Item { ...good } onAddToBag={this.addGoodToBag} />
              </li>
            );
          })}
        </ul>
        <Paginator
          className={paginatorClassName}
          pageNumber={pageNumber}
          pageAmount={pageAmount}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ data, goodList}) => {
  let { pageNumber } = goodList;

  const { cathegory } = data;
  const indexes = data.goods || [];
  const hash = data.goodList || {};
  const cathegoryIndexes = data.cathegories || [];
  const cathegoryHash = data.cathegoryList || {};
  const defaults = data.defaults || {};

  const selectedIndexes = indexes.filter(index => has(hash, index) && (hash[index].cathegories & cathegory));
  const pageAmount = Math.ceil(selectedIndexes.length / MAX_AMOUNT_TO_DISPLAY);

  if (pageNumber >= pageAmount) {
    pageNumber = pageAmount - 1;
  } else if (pageNumber < 0) {
    pageNumber = 0;
  }

  const from = MAX_AMOUNT_TO_DISPLAY * pageNumber;
  const to = from + MAX_AMOUNT_TO_DISPLAY;

  const goods = selectedIndexes
    .slice(from, to)
    .map(index => {
      const good = hash[index]
      const cathegoryList = getCathegoriesAsString(good.cathegories, cathegoryIndexes, cathegoryHash);

      return { ...defaults, ...good, cathegoryList };
    });

  return {
    pageNumber,
    pageAmount,
    goods
  };
};

const mapDispatchToProps = dispatch => ({
  setPageNumber: pageNumber => dispatch(setPageNumber(pageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodList);
