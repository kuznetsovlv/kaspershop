import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Good extends Component {
  componentWillMount () {
    // window.location.search = '?id=5';
  }

  render () {
    return <div>Good template</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  
  return {};
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Good);
