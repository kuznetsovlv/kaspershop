import { getContentType } from 'httpapijs';

export default (response, success = true, data = {}) => {
  const strData = JSON.stringify(success ? { success, output: data } : { success, error: data });

  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', getContentType('json'));
  response.end(strData);
};
