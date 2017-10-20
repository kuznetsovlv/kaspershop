import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';
import { switchCathegoryTo } from '../../actions';
import Item  from './Item';
import { blockName, cathegoryElement } from './constants';

import './styles.scss';

class Cathegories extends Component {
  static propTypes = {
    inline: PropTypes.bool,
    cathegory: PropTypes.number.isRequired,
    cathegories: PropTypes.arrayOf(PropTypes.number).isRequired,
    cathegoryList: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };

  static defaultProps = {
    inline: false
  };

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (id) {
    if (typeof id !== 'number') {
      id = parseInt(id) || 0;
    }
    const { cathegory = 0 , switchCathegoryTo } = this.props;
    const selected = (cathegory & id) === id;

    if (typeof switchCathegoryTo === 'function') {
      switchCathegoryTo(id, !selected);
    }
  }

  render () {
    const { inline, cathegory = 0 } = this.props;
    const cathegories = this.props.cathegories || [];
    const cathegoryList = this.props.cathegoryList || {};

    return (
      <ul className={blockName}>
        {cathegories.map(id => {
          const cathegoryData = cathegoryList[id];

          if (!cathegoryData || typeof cathegoryData !== 'object') {
            return null;
          }

          const { id: key, value } = cathegoryData;
          const className = bemclassnames(blockName, cathegoryElement, {
            inline,
            selected: (cathegory & id) === id
          });

          return (<Item key={key} id={id} className={className} onClick={this.handleItemClick}>{value}</Item>);
        })}
      </ul>
    );
  }
};

const mapStateToProps = ({ data = {} }) => {
  const { cathegory = 0 } = data;

  const cathegories = data.cathegories || [];
  const cathegoryList = data.cathegoryList || {};

  return {
    cathegory,
    cathegories,
    cathegoryList
  };
};

const mapDispatchToProps = dispatch => ({
  switchCathegoryTo: (id, selected) => dispatch(switchCathegoryTo(id, selected))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cathegories);
