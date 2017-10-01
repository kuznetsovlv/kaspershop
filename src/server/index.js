import ServerAPI, { getContentType, getStatusText } from 'httpapijs';
import onStart from './onStart';
import onGet from './onGet';

const server = new ServerAPI(8084, __dirname);

// server.on('start', onStart);

server.on('get', (request, response) => {
  onGet(request, response, server);
});

server.up();
