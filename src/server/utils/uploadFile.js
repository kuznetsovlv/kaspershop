import { parse } from 'url';
import { join, extname } from 'path';
import Promise from 'promise';
import { writeFile } from 'fiojs';
import { getContentType } from 'httpapijs';
import { getRequestData } from '../utils';

const IMAGE_FOLDER = 'img';

export default request => new Promise ((resolve, reject) => {
  const { contentType, root, query = {} } = getRequestData(request);
  const { id, name } = query;

  if (id && name) {
    const ext = extname(name).toLowerCase();

    if (getContentType(ext) === contentType) {
      let length = 0;
      const chunkList = [];

      request.on('data', (chunk) => {
        length += chunk.length;
        chunkList.push(chunk);

        console.log(`Loaded ${length} bytes.`);
      });
      request.on('end', () => {
        const dataBuffer = Buffer.concat(chunkList);
        writeFile(join(root, IMAGE_FOLDER, `${id}${ext}`), dataBuffer).then(
          () => resolve('OK'),
          error => reject(error)
        );
      });
    } else {
      reject('Incorect file extantion.');
    }
  } else {
    reject('Unknown file destination.');
  }
});
