import {
  SELECT_GOOD,
  CLEAR_GOOD,
  SET_FIELD_IN_GOOD,
  DELETE_FIELD_FROM_GOOD
} from './actions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_GOOD:
      return { ...initialState, id: payload };
    case CLEAR_GOOD:
      return { ...initialState };
    case SET_FIELD_IN_GOOD:
      const { fieldName, fieldValue } = payload;
      return { ...state, [fieldName]: fieldValue };
    case DELETE_FIELD_FROM_GOOD:
      const newState = { ...state };
      delete newState[payload];
      return newState;
  }

  return state;
};
