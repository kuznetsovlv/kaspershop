export const SELECT_GOOD = 'SELECT_GOOD';
export const CLEAR_GOOD = 'CLEAR_GOOD';
export const SET_FIELD_IN_GOOD = 'SET_FIELD_IN_GOOD';
export const DELETE_FIELD_FROM_GOOD = 'DELETE_FIELD_FROM_GOOD';
export const SET_EDITABLE = 'SET_EDITABLE';

export const selectGood = id => ({ type: SELECT_GOOD, payload: id });

export const clearGood = () => ({ type: CLEAR_GOOD });

export const setFieldInGood = (fieldName, fieldValue) => ({
  type: SET_FIELD_IN_GOOD,
  payload: { fieldName, fieldValue }
});

export const deleteFieldFromGood = fieldName => ({ type: DELETE_FIELD_FROM_GOOD, payload: fieldName });

export const setEditable = editable => ({ type: SET_EDITABLE, payload: editable });
