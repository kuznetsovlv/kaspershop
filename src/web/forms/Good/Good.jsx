import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'classnames';
import { GoodData } from '../../components';
import { selectGood, clearGood } from './actions';
import { blockName, dataBlockName } from './constants';

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

    const blockClass = bemclassnames(blockName);

    return (
      <div className={blockClass}>
        <GoodData goog={good} blockName={dataBlockName} />
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
