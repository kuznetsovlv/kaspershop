import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';
import { GoodData } from '../../components';
import { selectGood, clearGood } from './actions';
import {
  blockName,
  dataBlockName,
  wrapperElement,
  switcherPlaceElement,
  dataPlaceElement,
  goodElement
} from './constants';

import './styles.scss';

class Good extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
    selectGood: PropTypes.func.isRequired,
    clearGood: PropTypes.func.isRequired
  }

  static defaultProps = {
    good: {}
  }

  componentWillMount () {
    const { selectGood } = this.props;

    if (typeof selectGood === 'function') {
      const [id] = window.location.hash.split('/').filter(x => x).reverse();
      selectGood(id);
    }
  }

  componentWillUnmount() {
    const { clearGood } = this.props;

    if (typeof clearGood === 'function') {
      clearGood();
    }
  }

  render () {
    const good = this.props.good || {};

    const blockClassName = bemclassnames(blockName);
    const wrapperClassName = bemclassnames(blockName, wrapperElement);
    const switcherPlaceClassName = bemclassnames(blockName, switcherPlaceElement);
    const dataPlaceClassName = bemclassnames(blockName, dataPlaceElement);
    const goodClassName = bemclassnames(blockName, goodElement);

    return (
      <div className={blockClassName}>
        <div className={wrapperClassName}>
          <div className={switcherPlaceClassName}>
          </div>

          <div className={dataPlaceClassName}>
            <GoodData good={good} blockName={dataBlockName} className={goodClassName} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, good = {} }) => {
  const { id } = good;

  if (!id) {
    return {};
  }

  const goodList = data.goodList || {};
  const goodData = goodList[id] || {};
  const defaults = data.defaults || {};
  
  return {
    good: { ...defaults, ...goodData, ...good }
  };
};
const mapDispatchToProps = dispatch => ({
  selectGood: id => dispatch(selectGood(id)),
  clearGood: () => dispatch(clearGood())
});

export default connect(mapStateToProps, mapDispatchToProps)(Good);
