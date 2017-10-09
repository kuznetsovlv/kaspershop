import data, { getCommand } from './data';

const getCathegoriesCommand = 'getCathegories';

export default (path, command, inputData = {}) => data(path, getCommand, inputData).then((data) => {
  switch (command) {
    case getCathegoriesCommand:
      const { cathegories, cathegoryList } = data;
      return { cathegories, cathegoryList };
    default:
      throw `Unknown command "${command}"`;
  }
});
