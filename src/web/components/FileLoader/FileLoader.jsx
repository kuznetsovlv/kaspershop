import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

export class FileLoader extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    errorText: PropTypes.string,
    disabled: PropTypes.bool,
    validateFile: PropTypes.func,
    onFileSelected: PropTypes.func
  };

  constructor (props) {
    super(props);

    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  handleFileSelected () {
    const { disabled, validateFile, onFileSelected } = this.props;

    if (disabled) {
      return;
    }

    const [file] = this._fileInput.files;

    if (typeof validateFile === 'function') {
      if (!validateFile(file)) {
        return;
      }
    }

    if (typeof onFileSelected === 'function') {
      onFileSelected(file);
    }
  }

  render () {
    return <input { ...this.props } type="file" ref={input => this._fileInput = input} onChange={this.handleFileSelected} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FileLoader);
