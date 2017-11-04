import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { combineBEMBlocks, has } from '../../utils';
import { askGood } from '../../actions';
import { blockName } from './constants';

import './styles.scss';

export class GoodData extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    blockName: PropTypes.string,
    className: PropTypes.string,
    askGood: PropTypes.func.isRequired
  };

  static defaultProps = {
    blockName: null,
    className: null,
    good: {},
    fields: []
  }

  constructor (props) {
    super(props);

    this.checGood = this.checkGood.bind(this);
  }

  componentWillMount () {
    const good = this.props.good || {};
    this.checkGood(good);
  }

  componentWillReceiveProps (nextProps) {
    const good = nextProps.good || {};
    this.checkGood(good);
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
    const { blockName: userBlockName, className } = this.props;
    console.log(this.props);

    const blocks = userBlockName ? [blockName, userBlockName] : [blockName];

    const blockClassName = classnames(combineBEMBlocks(blocks), { [className]: className });
    
    return (
      <div className={blockClassName}>
        
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const fields = data.fields || [];

  return { fields };
}

const mapDispatchToPops = dispatch => ({
  askGood: id => dispatch(askGood(id))
});

export default connect(mapStateToProps, mapDispatchToPops)(GoodData);
