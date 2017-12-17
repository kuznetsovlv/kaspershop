import { join } from 'path';
import { getFileInfo } from 'fiojs';
import {
  sendError,
  sendFile,
  sendData,
  getRequestData
} from './utils';

export default (request, response) => {
  const {
    query = {},
    targetPath = ''
  } = getRequestData(request);

  if (Object.keys(query).length === 0) {
    getFileInfo(targetPath)
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
