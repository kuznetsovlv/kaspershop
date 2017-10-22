import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';
import { showGood } from '../../utils';
import { Cathegories, GoodList } from '../../components';
import {
  blockName,
  headerElement,
  dataSectionElement,
  dataCellElement,
  titleElem,
  navigatorMod,
  goodsMod
} from './constants';

import './styles.scss';

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

    const blockNameClass = bemclassnames(blockName);
    const headerClass = bemclassnames(blockName, headerElement);
    const dataClass = bemclassnames(blockName, dataSectionElement);
    const navigatorClass = bemclassnames(blockName, dataCellElement, navigatorMod);
    const navigatorTitleClass = bemclassnames(blockName, titleElem, navigatorMod);
    const goodListClass = bemclassnames(blockName, dataCellElement, goodsMod);

    return (
      <div className={blockNameClass}>
        <header className={headerClass}>List template</header>
        <section className={dataClass}>
          <nav className={navigatorClass}>
            <div className={navigatorTitleClass}>Каталог</div>
            <Cathegories />
          </nav>
          <section className={goodListClass}>
            <GoodList />
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
