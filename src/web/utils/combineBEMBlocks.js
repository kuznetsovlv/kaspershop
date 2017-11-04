import classnames from 'classnames';
import bemclassnames from 'bemclassnames';

export default (blocks, element, ...mods) => {
  if (!Array.isArray(blocks)) {
    blocks = [`${blocks}`];
  }

  return blocks.map(block => bemclassnames.apply(this, [block, element, ...mods])).join(' ');
};
