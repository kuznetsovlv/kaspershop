import { getFileInfo, readFile, writeFile } from 'fiojs';
import Promise from 'promise';
import { ENCODING } from '../constants';
import { expandCathegories, compressCathegories } from '../utils';

export const getCommand = 'read';
export const setCommand = 'write';

export default (path, command, data = {}) => new Promise ((resolve, reject) => {
  switch (command) {
    case getCommand:
      getFileInfo(path)
        .then(({ exists, fileType, absolute }) => {
          if (!exists) {
            return '{}';
          } else if (fileType !== 'regular file') {
            reject('Path is unapproachable.');
          }

          return readFile(absolute, ENCODING);
        })
        .then((str) => {
          try {
            resolve(expandCathegories(JSON.parse(str)));
          } catch (e) {
            reject('Reading data error.');
          }
        }, error => reject('Reading data error.'));
      break;
    case setCommand:
      try {
        data = compressCathegories(JSON.stringify(data));
        writeFile(path, data, ENCODING)
          .then(data => resolve('OK'), error => reject(`Can not save data ${JSON.stringify(data)}.`));
      } catch (error) {
        reject(error);
      }
      break;
    default:
      reject(`Unknown command "${command}" for data service.`);
  }
});
