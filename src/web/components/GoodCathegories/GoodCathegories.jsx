import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCathegoriesAsString } from '../../utils';

export const GoodCathegories = ({
  children = 0,
  cathegories = [],
  cathegoryList = {},
  className = ''}) => {

  if (typeof children !== 'number') {
    children = parseInt(children) || 0;
  }

  const text = getCathegoriesAsString(children, cathegories, cathegoryList);

  return <div className={className} title={text}>{text}</div>;
};

GoodCathegories.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  cathegories: PropTypes.arrayOf(PropTypes.number),
  cathegoryList: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })),
  className: PropTypes.string
};

const mapStateToProps = ({ data = {} }) => {
  const cathegoryList = data.cathegoryList || {};
  let cathegories = data.cathegories;

  if (!Array.isArray(cathegories)) {
    cathegories = [];
  }

  return {
    cathegories,
    cathegoryList
  }
};

export default connect(mapStateToProps, null)(GoodCathegories);
