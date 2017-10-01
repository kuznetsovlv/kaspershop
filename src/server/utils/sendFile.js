import { readFile } from 'fiojs';
import { getContentType } from 'httpapijs';
import sendError from './sendError';

export default (response, fileData) => {
  const { path, ext, exists, size } = fileData;

  if (!exists) {
    sendError(response, 500, 'Incorrect server code!');
  } else {
    readFile(path).then((data) => {
      response.statusCode = 200;
      response.statusMessage = 'OK';
      response.setHeader('Content-Type', getContentType(ext));
      response.setHeader('Content-Length', size);
      response.write(data, () => response.end());
    }, error => sendError(response, 500, error.message || error));
  }
};
