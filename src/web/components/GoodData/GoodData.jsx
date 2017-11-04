import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { combineBEMBlocks } from '../../utils';
import { blockName } from './constants';

import './styles.scss';

export default class GoodData extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
    blockName: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    blockName: null,
    className: null,
    good: {}
  }

  render () {
    const { blockName: userBlockName, className } = this.props;

    const blocks = userBlockName ? [blockName, userBlockName] : [blockName];

    const blockClassName = classnames(combineBEMBlocks(blocks), { [className]: className });
    
    return (
      <div className={blockClassName}>
        
      </div>
    );
  }
}
