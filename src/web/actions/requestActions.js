import sendRequest from '../sendRequest';

export const ADD_REQUEST = 'ADD_REQUEST';
export const DATA_ERROR = 'DATA_ERROR';
export const SET_FIELDS = 'SET_FIELDS';
export const SET_CATHEGORIES = 'SET_CATHEGORIES';
export const SET_DEFAULTS = 'SET_DEFAULTS';
export const ADD_GOODS = 'ADD_GOODS';
export const SET_GOOD = 'SET_GOOD';

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

export const askGoods = cathegory => (dispatch) => {
  dispatch(addRequest());

  return sendRequest({
    service: 'goods',
    command: 'getGoods',
    params: { cathegory }
  }).then(
    ({ hash, ids }) => dispatch(((goodList, goods) => ({ type: ADD_GOODS, payload: { goodList, goods, cathegory } }))(hash, ids)),
    error => dispatch(setError({}))
  );
};

export const askGood = id => (dispatch) => {
  dispatch(addRequest());

  return sendRequest({
    service: 'goods',
    command: 'getGood',
    params: { id }
  }).then(
    (data) => dispatch(((good) => ({ type: SET_GOOD, payload: { ...good, id } }))(data)),
  )
  .catch(error => dispatch(setError({})));
};
