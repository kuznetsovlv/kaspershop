import { has } from '../utils';

/**
 * Creates expanded good list.
 * @param {Object} initialGoods - object with initial good list.
 * @param {Object} newGoods - good list with goods to be added or updated.
 * @return {Object} - new good list
 */
export default (initialGoods = {}, newGoods = {}) => Object.keys(newGoods).reduce((hash, id) => {
  if (has(hash, id)) {
    hash[id] = { ...hash[id], ...newGoods[id] };
  } else {
    hash[id] = { ...newGoods[id] };
  }

  return hash;
}, { ...initialGoods });
