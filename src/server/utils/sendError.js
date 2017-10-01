import { getStatusText } from 'httpapijs';

export default (response, code, msg) => {
  response.statusCode = code;
  response.statusMessage = msg || getStatusText(code);
  response.end();
};
