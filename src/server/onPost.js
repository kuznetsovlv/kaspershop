import {
  getPostData,
  uploadFile,
  sendError,
  sendData
} from './utils';
import {
  data,
  cathegories,
  goods,
  getDefaults,
  fields
} from './services';

export default (request, response) => {
  switch (request.headers['content-type'].toLowerCase()) {
    case 'application/json':
      getPostData(request)
        .then((data) => {
          const { path, service, command } = data;
          const params = data.params || {};

          switch (service) {
            case 'data':
              return data(path, command, params);
            case 'cathegories':
              return cathegories(path, command, params);
            case 'goods':
              return goods(path, command, params);
            case 'getDefaults':
              return getDefaults(path, command, params);
            case 'fields':
              return fields(path, command, params);
            default:
              throw 'Unknown service';
          }
        })
        .then(
          data => sendData(response, !!data, data),
          error => sendError(response, 500, error.message || error)
        );
      break;
    case 'image/jpeg':
    case 'image/png':
    case 'image/gif':
      uploadFile(request).then(
        () => sendData(response, true, {}),
        error => sendError(response, 500, error.message || error)
      );

  }
};
