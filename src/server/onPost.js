import { getPostData, sendError, sendData } from './utils';
import {
  data
} from './services';

export default (request, response) => {
  getPostData(request)
    .then((data) => {
      const { path, service, command } = data;
      const params = data.params || params;
    }, error => sendError(response, 500, error.message || error));
};
