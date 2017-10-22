import { SET_PAGE_NUMBER } from './actions';

const initialState = {
  pageNumber: 0
};

export default (state = initialState, { type, payload }) => {

  switch (type) {
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: payload };
  }

  return state;
};
