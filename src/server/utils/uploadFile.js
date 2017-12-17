import { parse } from 'url';
import { join } from 'path';
import Promise from 'promise';
import { writeFile } from 'fiojs';

export default request => new Promise ((resolve, reject) => {
  console.log(request);
  let length = 0;

  request.on('data', (chunk) => {
    length += chunk.length;
    console.log(chunk);
    console.log(`Loaded ${length} bytes.`);
  });
  request.on('end', () => {
    console.log('SUCCESS');
    resolve();
  });
});
