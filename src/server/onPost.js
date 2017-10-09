import { getPostData, sendError, sendData } from './utils';
import {
  data,
  cathegories
} from './services';

export default (request, response) => {
  getPostData(request)
    .then((data) => {
      const { path, service, command } = data;
      const params = data.params || {};

      switch (service) {
        case 'data':
          return data(path, command, params);
        case 'cathegories':
          return cathegories(path, command, params);
        default:
          throw 'Unknown service';
      }
    })
    .then((data) => {}, error => sendError(response, 500, error.message || error));
};
