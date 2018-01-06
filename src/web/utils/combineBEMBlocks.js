import classnames from 'classnames';
import bemclassnames from 'bemclassnames';

/**
 * Creates string of BEM classes for case more then one block's names
 * @param {Array | string} blocks - Array of block's names or one block's name
 * @param {string} [element] - element's name.
 * @params {...(string | Object) } [...mods] - list of modificators
 * @return {string} - string of BEM classes
 */
export default (blocks, element, ...mods) => {
  if (!Array.isArray(blocks)) {
    blocks = [`${blocks}`];
  }

  return blocks.map(block => bemclassnames(block, element, ...mods)).join(' ');
};
