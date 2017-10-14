import { getFileInfo, readFile, writeFile } from 'fiojs';
import { join } from 'path';

const ENCODING = 'utf8';
const FILE_NAME = 'data.json';
const FROM = process.cwd();
const TO = join(FROM, 'dist', 'data');
const FROM_PATH = join(FROM, FILE_NAME);
const TO_PATH = join(TO, FILE_NAME);

console.log(`Starting copy ${FROM_PATH} into ${TO_PATH}.\n`);

readFile(FROM_PATH, ENCODING)
  .then(data => writeFile(TO_PATH, data, ENCODING))
  .then(
    () => console.log(`${FROM_PATH} was copied into ${TO_PATH} successfully.`),
    (error) => {
      console.error(error);
      process.exit(1);
    }
  );
