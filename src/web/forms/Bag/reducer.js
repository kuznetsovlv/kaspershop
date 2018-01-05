import {
  ADD_GOOD_INTO_BAG,
  REMOVE_GOOD_FROM_BAG,
  DECREASE_GOOD_IN_BAG
} from '../../actions';

const initialState = {};

const removeValue = (state, id) => {
  const newState = { ...state };

  delete newState[id];

  return newState;
};

const changeValue = (state, id, delta) => {
  const value = (state[id] || 0) + delta;

  if (value > 0) {
    return { ...state, [id]: value };
  }

  return removeValue(state, id);
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GOOD_INTO_BAG:
      return changeValue(state, payload, 1);
    case DECREASE_GOOD_IN_BAG:
      return changeValue(state, payload, -1);
    case REMOVE_GOOD_FROM_BAG:
      return removeValue(state, payload);
  }

  return state;
};
