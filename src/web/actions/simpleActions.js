export const SELECT_CATHEGORY = 'SELECT_CATHEGORY';
export const SWITCH_CATHEGORY = 'SWITCH_CATHEGORY';
export const ADD_GOOD_INTO_BAG = 'ADD_GOOD_INTO_BAG';
export const REMOVE_GOOD_FROM_BAG = 'REMOVE_GOOD_FROM_BAG';
export const DECREASE_GOOD_IN_BAG = 'DECREASE_GOOD_IN_BAG';

export const selectCathegory = cathegory => ({
  type: SELECT_CATHEGORY,
  payload: cathegory
});

export const switchCathegoryTo = (id, selected) => ({
  type: SWITCH_CATHEGORY,
  payload: { id, selected }
});

export const addGoodIntoBag = id => ({
  type: ADD_GOOD_INTO_BAG,
  payload: id
});

export const removeGoodFromBag = id => ({
  type: REMOVE_GOOD_FROM_BAG,
  payload: id
});

export const decreaseGoodInBag = id => ({
  type: DECREASE_GOOD_IN_BAG,
  payload: id
});
