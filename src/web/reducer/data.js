import {
  ADD_REQUEST,
  DATA_ERROR,
  SET_FIELDS,
  SET_CATHEGORIES,
  SET_DEFAULTS,
  SELECT_CATHEGORY,
  ADD_GOODS
} from '../actions';
import { combineArrs, addGoods } from '../utils';

const initialState = {
  requests: 0,
  loadedCathegories: 0,
  goodList: {},
  goods: []
};

export default (state = initialState, { type, payload }) => {
  let { requests } = state;

  switch (type) {
    case ADD_REQUEST:
      ++requests;
      return { ...state, requests };
    case SET_FIELDS:
      --requests;
      return { ...state, requests, fields: payload };
    case DATA_ERROR:
      --requests;
      return { ...state, requests, error: payload };
    case SET_CATHEGORIES:
      --requests;
      return { ...state, ...payload, requests };
    case SET_DEFAULTS:
      --requests;
      return { ...state, requests, defaults: payload };
    case SELECT_CATHEGORY:
      return { ...state, cathegory: payload };
    case ADD_GOODS:
      const { goodList: newGoodList = {}, goods: newGoods = [], cathegory } = payload;
      let { goodList = {}, goods = [], loadedCathegories } = state;
      goodList = addGoods(goodList, newGoodList);
      goods = combineArrs(goods, newGoods);
      loadedCathegories |= cathegory;
      return { ...state, goodList, goods, loadedCathegories };
  }
  return state;
};
