import httpServer from './app/todo/todo.routes';

const port = process.env.API_TODO_PORT || 3333;
const httpSchema = process.env.HTTP_SCHEMA || 'http';
const apiTodoHost = process.env.API_TODO_HOST || 'localhost';

httpServer.listen(port, () => {
  console.log(`Listening at ${httpSchema}://${apiTodoHost}:${port}`);
});

httpServer.on('error', console.error);
