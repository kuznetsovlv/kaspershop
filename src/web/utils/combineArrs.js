import { has } from '../utils';

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

    if (el1 < el2) {
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
