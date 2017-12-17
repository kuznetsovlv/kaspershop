import { parse } from 'url';
import { join } from 'path';

export default (request) => {
  const server = request.server || {};
  const { url } = request;
  const { root = __dirname } = server;

  const urlData = parse(url, true);
  const query = urlData.query || {};
  const { pathname } = urlData;

  const targetPath = join(root, pathname);

  const headers = request.headers || {};
  let { 'content-type': contentType = '' } = headers;

  contentType = contentType.toLowerCase();

  return {
    url,
    urlData,
    query,
    root,
    targetPath,
    contentType
  };
};
