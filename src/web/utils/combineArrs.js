import { has, min } from '../utils';

/**
 * Create new ordered array consists of unique only elements from two othe odered arrays.
 * @param {Array} [arr1] - array of numbers
 * @param {Array} [arr2] - array of numbers
 * @return {Array} - resulting array
 */
export default (arr1 = [], arr2 = []) => {
  const hash = {};
  const res = [];

  const length = arr1.length + arr2.length;

  let i1 = 0;
  let i2 = 0;

  for (let i = 0; i < length; ++i) {
    const el1 = arr1[i1];
    const el2 = arr2[i2];
    let el;

    if (el1 === min(el1, el2)) {
      el = el1;
      ++i1;
    } else {
      el = el2;
      ++i2;
    }

    if (has(hash, el)) {
      continue;
    }

    hash[el] = true;

    res.push(el);
  }

  return res;
};
