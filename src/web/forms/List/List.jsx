import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showGood } from '../../utils';

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

    return <div>List template</div>;
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
