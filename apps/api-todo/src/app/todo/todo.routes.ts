import app from '../../helpers/registerRoutes';
import todoService from '../../app/todo/todo.service';
import http = require('http');

app.get('/todos', function (req, res) {
  res.header('Content-type', 'text/json');

  const todos = todoService.fetchTodos();

  return res.end(JSON.stringify(todos));
});

app.post('/todos', function (req, res) {
  res.header('Content-type', 'text/json');

  const todos = todoService.addTodo(req.body);

  return res.end(JSON.stringify(todos));
});

app.post('/edit-todos', function (req, res) {
  res.header('Content-type', 'text/json');

  const todos = todoService.updateTodo(req.body);

  return res.end(JSON.stringify(todos));
});

app.post('/del-todos', function (req, res) {
  res.header('Content-type', 'text/json');

  const todos = todoService.deleteTodo(req.body);

  return res.end(JSON.stringify(todos));
});

const httpServer = http.createServer(app);

export default httpServer;
