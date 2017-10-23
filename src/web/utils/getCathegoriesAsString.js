import { has } from '../utils';

export default (cathegory = 0, indexes = [], hash = {}) => indexes
  .filter(index => index !== -1 && (cathegory & index) && has(hash, `${index}`))
  .map(id => hash[id].value)
  .join(', ');
