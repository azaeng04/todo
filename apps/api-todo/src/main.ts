import httpServer from './app/routes/todo.routes';
import { apiPort, apiUrl } from './environments/environment';

console.log(apiUrl);
console.log(apiPort);

httpServer.listen(apiPort, () => {
  console.log(`Listening at ${apiUrl}`);
});

httpServer.on('error', console.error);
