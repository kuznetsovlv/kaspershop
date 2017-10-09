import data, { getCommand } from './data';

export default (path, command, inputData = {}) => data(path, getCommand, {}).then((data) => {
  const { defaults } = data;

  return typeof defaults === 'object' ? defaults : {};
});
