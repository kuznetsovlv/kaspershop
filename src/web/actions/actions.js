import sendRequest from '../sendRequest';

export const ADD_REQUEST = 'ADD_REQUEST';
export const DATA_ERROR = 'DATA_ERROR';
export const SET_FIELDS = 'SET_FIELDS';
export const SET_CATHEGORIES = 'SET_CATHEGORIES';
export const SET_DEFAULTS = 'SET_DEFAULTS';
export const SELECT_CATHEGORY = 'SELECT_CATHEGORY';
export const ADD_GOODS = 'ADD_GOODS';
export const SWITCH_CATHEGORY = 'SWITCH_CATHEGORY';
export const ADD_GOOD_INTO_BAG = 'ADD_GOOD_INTO_BAG';
export const REMOVE_GOOD_FROM_BAG = 'REMOVE_GOOD_FROM_BAG';
export const DECREASE_GOOD_IN_BAG = 'DECREASE_GOOD_IN_BAG';

const addRequest = () => ({ type: ADD_REQUEST });
const setError = error => ({ type: DATA_ERROR, payload: error });

export const askFields = () => (dispatch) => {
  dispatch(addRequest());

  return sendRequest({
    service: 'fields',
    command: 'getFields'
  }).then(
    ({ fields }) => dispatch((fields => ({ type: SET_FIELDS, payload: fields }))(fields)),
    error => dispatch(setError(error))
  );
};

export const askCathegories = () => (dispatch) => {
  dispatch(addRequest());

  return sendRequest({
    service: 'cathegories',
    command: 'getCathegories'
  }).then(
    (data) => {
      if (!data || typeof data !== 'object') {
        dispatch(setError('Incorrect cathegories responsed from server'));
      } else {
        dispatch((data => ({ type: SET_CATHEGORIES, payload: data }))(data));
      }
    },
    error => dispatch(setError(error))
  );
};

const setDefaults = defaults => ({ type: SET_DEFAULTS, payload: defaults });

export const askDefaults = () => (dispatch) => {
  dispatch(addRequest());

  return sendRequest({
    service: 'getDefaults'
  }).then(
    data => dispatch(setDefaults(data || {})),
    error => dispatch(setDefaults({}))
  );
};

export const selectCathegory = cathegory => ({
  type: SELECT_CATHEGORY,
  payload: cathegory
});

export const askGoods = cathegory => (dispatch) => {
  dispatch(addRequest());

  return sendRequest({
    service: 'goods',
    command: 'getGoods',
    params: { cathegory }
  }).then(
    ({ hash, ids }) => dispatch(((goodList, goods) => ({ type: ADD_GOODS, payload: { goodList, goods, cathegory } }))(hash, ids)),
    error => dispatch(setDefaults({}))
  );
};

export const switchCathegoryTo = (id, selected) => ({
  type: SWITCH_CATHEGORY,
  payload: { id, selected }
});

export const addGoodIntoBag = (id) => ({
  type: ADD_GOOD_INTO_BAG,
  payload: id
});

export const removeGoodFromBag = (id) => ({
  type: REMOVE_GOOD_FROM_BAG,
  payload: id
});

export const decreaseGoodInBag = (id) => ({
  type: DECREASE_GOOD_IN_BAG,
  payload: id
});
