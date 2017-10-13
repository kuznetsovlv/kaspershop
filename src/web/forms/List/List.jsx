import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class List extends Component {
  render () {
    return <div>List template</div>;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
