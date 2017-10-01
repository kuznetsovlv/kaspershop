import ServerAPI, { getContentType, getStatusText } from 'httpapijs';
import onStart from './onStart';
import onGet from './onGet';
import onPost from './onPost';

const server = new ServerAPI(8084, __dirname);

server.on('start', onStart);
server.on('get', onGet);
server.on('post', onPost);

server.up();
