import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { combineBEMBlocks } from '../../utils';
import { FileLoader } from '../../components';
import { blockName } from './constants';

import './styles.scss';

export class GoodData extends Component {
  static propTypes = {
    good: PropTypes.object.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    blockName: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    blockName: null,
    className: null,
    good: {},
    fields: []
  }
  

  render () {
    const { blockName: userBlockName, className } = this.props;

    const blocks = userBlockName ? [blockName, userBlockName] : [blockName];

    const blockClassName = classnames(combineBEMBlocks(blocks), { [className]: className });
    
    return (
      <div className={blockClassName}>
        Data
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const fields = data.fields || [];

  return { fields };
}

const mapDispatchToPops = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToPops)(GoodData);
