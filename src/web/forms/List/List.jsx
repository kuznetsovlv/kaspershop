import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';
import { showGood } from '../../utils';

import './styles.scss';

const block = 'carcass';
const headerElement = 'header';
const dataSectionElement = "data";
const dataCellElement = "cell";

class List extends Component {
  static propTypes = {
    cathegory: PropTypes.number.isRequired,
    cathegories: PropTypes.arrayOf(PropTypes.number).isRequired,
    cathegoryList: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    goodList: PropTypes.objectOf(PropTypes.object).isRequired
  };

  render () {
    const {
      cathegory,
      cathegories,
      cathegoryList,
      goods,
      goodList
    } = this.props;

    const blockClass = bemclassnames(block);
    const headerClass = bemclassnames(block, headerElement);
    const dataClass = bemclassnames(block, dataSectionElement);
    const navigatorClass = bemclassnames(block, dataCellElement, 'navigator');
    const goodListClass = bemclassnames(block, dataCellElement, 'goods');

    return (
      <div className={blockClass}>
        <header className={headerClass}>List template</header>
        <section className={dataClass}>
          <nav className={navigatorClass}>
          </nav>
          <section className={goodListClass}>
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const { cathegory = 0 } = data;
  const goods = data.goods || [];
  const goodList = data.goodList || {};
  const defaults = data.defaults || {};
  const cathegories = data.cathegories || [];
  const cathegoryList = data.cathegoryList || {};

  return {
    cathegory,
    cathegories,
    cathegoryList,
    goodList,
    goods: goods.filter(id => goodList[id] && showGood(goodList[id], cathegory))
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
