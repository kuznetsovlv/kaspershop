import { has } from '../../utils';

/**
 * Converts cathegory number to string with human readable list of cathegories
 * @param {number} [cathegory = 0] - cathegory number
 * @param {Array} [indexes = []] - array of indexes for each cathegory.
 * @param {Object} [hash = {}] - collection of cathegories by indexes.
 * @return {string} - human readable list of cathegories.
 */
export default (cathegory = 0, indexes = [], hash = {}) => indexes
  .filter(index => index !== -1 && (cathegory & index) && has(hash, `${index}`))
  .map(id => hash[id].value)
  .join(', ');
