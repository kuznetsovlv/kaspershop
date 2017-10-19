import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bemclassnames from 'bemclassnames';

import './styles.scss';

const blockName = 'cathegory-selector';
const cathegoryElement = 'cathegory';

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
            selected: cathegory & id
          });

          return (<li key={key} id={id} className={className}>{value}</li>);
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

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cathegories);
