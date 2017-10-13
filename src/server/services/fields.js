import data, { getCommand } from './data';

const getFieldsCommand = 'getFields';

export default (path, command, inputData = {}) => data(path, getCommand, {}).then((data) => {
  switch (command) {
    case getFieldsCommand:
      const { fields } = data;
      return { fields };
    default:
      throw `Unknown command "${command}"`;
  }
});
