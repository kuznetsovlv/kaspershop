import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';
import { GoodData } from '../../components';
import { askGood } from '../../actions';
import { has } from '../../utils';
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
    editable: PropTypes.bool.isRequired,
    selectGood: PropTypes.func.isRequired,
    clearGood: PropTypes.func.isRequired
  }

  static defaultProps = {
    good: {},
    editable: false
  }

  constructor (props) {
    super(props);

    this.checGood = this.checkGood.bind(this);
  }

  componentWillMount () {
    const { selectGood } = this.props;
    const good = this.props.good || {};

    if (typeof selectGood === 'function') {
      const [id] = window.location.hash.split('/').filter(x => x).reverse();
      selectGood(id);
    }

    this.checkGood(good);
  }

  componentWillReceiveProps (nextProps) {
    const good = nextProps.good || {};
    this.checkGood(good);
  }

  componentWillUnmount() {
    const { clearGood } = this.props;

    if (typeof clearGood === 'function') {
      clearGood();
    }
  }

  checkGood (good) {
    const { askGood } = this.props;
    const { id, complete } = good;

    if (has(good, 'id')) {
      if (!complete && typeof askGood === 'function') {
        askGood(id);
      }
    } 
  }

  render () {
    const { editable } = this.props;
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
            {!editable && <GoodData good={good} blockName={dataBlockName} className={goodClassName} />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, good = {} }) => {
  const { editable = false, ...restGood } = good;
  const { id } = restGood;

  if (!id) {
    return { editable };
  }

  const goodList = data.goodList || {};
  const goodData = goodList[id] || {};
  const defaults = data.defaults || {};
  
  return {
    editable,
    good: { ...defaults, ...goodData, ...restGood }
  };
};
const mapDispatchToProps = dispatch => ({
  selectGood: id => dispatch(selectGood(id)),
  clearGood: () => dispatch(clearGood()),
  askGood: id => dispatch(askGood(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Good);
