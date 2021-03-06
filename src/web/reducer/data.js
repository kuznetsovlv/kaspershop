import {
  ADD_REQUEST,
  DATA_ERROR,
  SET_FIELDS,
  SET_CATHEGORIES,
  SET_DEFAULTS,
  SELECT_CATHEGORY,
  ADD_GOODS,
  SWITCH_CATHEGORY,
  SET_GOOD
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
    case ADD_REQUEST: {
      ++requests;
      return { ...state, requests };
    }
    case SET_FIELDS: {
      --requests;
      return { ...state, requests, fields: payload };
    }
    case DATA_ERROR: {
      --requests;
      return { ...state, requests, error: payload };
    }
    case SET_CATHEGORIES: {
      --requests;
      return { ...state, ...payload, requests };
    }
    case SET_DEFAULTS: {
      --requests;
      return { ...state, requests, defaults: payload };
    }
    case SELECT_CATHEGORY: {
      return { ...state, cathegory: payload };
    }
    case ADD_GOODS: {
      const { goodList: newGoodList = {}, goods: newGoods = [], cathegory } = payload;
      let { goodList = {}, goods = [], loadedCathegories } = state;
      goodList = addGoods(goodList, newGoodList);
      goods = combineArrs(goods, newGoods);
      loadedCathegories |= cathegory;
      --requests;
      return { ...state, requests, goodList, goods, loadedCathegories };
    }
    case SWITCH_CATHEGORY: {
      const { id = -1, selected } = payload;
      let { cathegory = 0 } = state;
      cathegory = selected ? cathegory | id : cathegory & ~id;
      return { ...state, cathegory };
    }
    case SET_GOOD: {
      const { id } = payload;
      const goods = state.goods || [];
      const goodList = state.goodList || {};
      const newGoodList = { ...goodList, [id]: payload };

      --requests;

      if (goods.indexOf(id) < 0) {
        return { ...state, requests, goods: [...goods, id], goodList: newGoodList };
      } else {
        return { ...state, requests, goodList: newGoodList };
      }
    }
  }

  return state;
};
