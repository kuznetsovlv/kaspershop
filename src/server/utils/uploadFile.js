import { parse } from 'url';
import { join } from 'path';
import Promise from 'promise';
import { writeFile } from 'fiojs';

export default request => new Promise ((resolve, reject) => {
  console.log(request);
  request.on('end', () => resolve());
});
