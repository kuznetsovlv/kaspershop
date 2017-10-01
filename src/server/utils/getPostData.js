import { parse } from 'url';
import { join } from 'path';
import Promise from 'promise';

export default request => new Promise((resolve, reject) => {
  const data = [];
  request.on('data', (chunk) => {data.push(chunk.toString()); });
  request.on('end', () => {
    try {
      const postData = JSON.parse(data.join(''));
      const server = request.server || {};
      const { url } = request;
      const { root = __dirname } = server;
      const { pathname } = parse(url, true);
      const path = join(root, pathname);
      resolve({ ...postData, path });
    } catch (error) {
      reject(error);
    }
  });
});
