import { has } from '../utils';

export default (initialGoods = {}, newGoods = {}) => Object.keys(newGoods).reduce((hash, id) => {
  if (has(hash, id)) {
    hash[id] = { ...hash[id], ...newGoods[id] };
  } else {
    hash[id] = { ...newGoods[id] };
  }

  return hash;
}, { ...initialGoods });
