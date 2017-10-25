import { parse } from 'url';
import { join } from 'path';
import { getFileInfo } from 'fiojs';
import { sendError, sendFile, sendData } from './utils';

export default (request, response) => {
  const server = request.server || {};
  const { url } = request;
  const { root = __dirname } = server;

  const data = parse(url, true);
  const query = data.query || {};
  const { pathname } = data;

  if (Object.keys(query).length === 0) {
    getFileInfo(join(root, pathname))
      .then((data) => {
        const { exists, fileType, path, name } = data;

        if (!exists) {
          sendError(response, 404, `${name} not found.`);
        } else {
          switch (fileType) {
            case 'regular file':
              return data;
            case 'directory':
              return getFileInfo(join(path, 'index.html'))
                .then((data) => {
                  const { exists, fileType } = data;
                  if (!exists || fileType !== 'regular file') {
                    sendError(response, 404);
                  } else {
                    return data;
                  }
                });
            default: sendError(response, 403);
          }
        }
      })
    .then(
      data => sendFile(response, data),
      error => sendError(response, 500, error.message || error)
    );
  } else {
    sendData(response, true);
  }
};
