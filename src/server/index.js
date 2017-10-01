import ServerAPI, { getContentType, getStatusText } from 'httpapijs';
import onStart from './onStart';

const server = new ServerAPI(8084, __dirname);

server.on('start', onStart);

server.on('get', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = getStatusText(200);
  response.setHeader('Content-Type', getContentType('txt'));
  response.setHeader('Content-length', 'Hello!'.length);
  response.end('Hello!');
});

server.up();