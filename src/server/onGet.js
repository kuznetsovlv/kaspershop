import { parse } from 'url';
import { readdir } from 'fs';
import { join } from 'path';
import { getFileInfo } from 'fiojs';
import { sendError, sendFile } from './utils';

export default (request, response, server) => {
  const { root = __dirname } = server;

  const data = parse(request.url, true);
  const query = data.query || {};
  const { pathname } = data;

  getFileInfo(join(root, pathname))
    .then((data) => {
      const { exists, fileType, path, name } = data;

      if (!exists) {
        sendError(response, 404, `${name} not found.`);
      } else {
        switch (fileType) {
          case 'regular file':
            sendFile(response, data);
            break;
          case 'directory':
            getFileInfo(join(path, 'index.html'))
              .then((data) => {
                const { exists, fileType, path } = data;
                if (!exists || fileType !== 'regular file') {
                  sendError(response, 404);
                } else {
                  sendFile(response, data);
                }
              }, error => sendError(response, 500, error.message || error));
            break;
          default: sendError(response, 403);
        }
      }
    }, error => sendError(response, 500, error.message || error));
};
