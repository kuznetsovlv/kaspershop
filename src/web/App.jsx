import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  askFields,
  askCathegories,
  askDefaults,
  selectCathegory,
  askGoods
} from './actions';
import {
  List,
  Good,
  Bag
} from './forms';

class App extends Component {

  static propTypes = {
    loadedCathegories: PropTypes.number.isRequired,
    cathegory: PropTypes.number,
    requests: PropTypes.number,
    error: PropTypes.string,
    fields: PropTypes.arrayOf(PropTypes.string),
    cathegories: PropTypes.arrayOf(PropTypes.number),
    cathegoryList: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired
    })),
    defaults: PropTypes.objectOf(PropTypes.any),
    askFields: PropTypes.func.isRequired,
    askCathegories: PropTypes.func.isRequired,
    askDefaults: PropTypes.func.isRequired,
    selectCathegory: PropTypes.func.isRequired,
    askGoods: PropTypes.func.isRequired
  };

  static defaultProps = {
    requests: 0,
    error: null,
    cathegory: null,
    loadedCathegories: 0,
    fields: null,
    cathegories: null,
    cathegoryList: null,
    defaults: null
  };

  componentWillMount () {
    const {
      askFields,
      askCathegories,
      askDefaults
    } = this.props;

    askFields();
    askCathegories();
    askDefaults();
  }

  componentWillReceiveProps (nextProps) {
    const {
      requests,
      fields,
      cathegories,
      cathegoryList,
      defaults,
      cathegory,
      loadedCathegories
    } = nextProps;

    if (requests > 0) {
      return;
    }

    const {
      askFields,
      askCathegories,
      askDefaults,
      selectCathegory,
      askGoods
    } = this.props;

    if (!Array.isArray(fields)) {
      askFields();
    }

    if (!Array.isArray(cathegories) || !cathegoryList || typeof cathegoryList !== 'object') {
      askCathegories();
    } else if (typeof cathegory !== 'number' && cathegories.length > 0) {
      selectCathegory(cathegories[0]);
    } else if (typeof cathegory === 'number' && !(cathegory & loadedCathegories)) {
      askGoods(cathegory);
    }

    if (!defaults || typeof defaults !== 'object') {
      askDefaults();
    }
  }

  render () {
    const { requests, error } = this.props;

    if (requests > 0 || !!error) {
      return null;
    }

    return (
      <main>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/good" component={Good} />
            <Route exact path="/bag" component={Bag} />
          </Switch>
        </HashRouter>
      </main>
    );
  }
}

const mapStateToProps = ({ data = {} }) => data;
const mapDispatchToProps = dispatch => ({
  askFields: () => dispatch(askFields()),
  askCathegories: () => dispatch(askCathegories()),
  askDefaults: () => dispatch(askDefaults()),
  selectCathegory: cathegory => dispatch(selectCathegory(cathegory)),
  askGoods: cathegory => dispatch(askGoods(cathegory))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
