import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Bag extends Component {
  render () {
    return <div>Bag template</div>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
