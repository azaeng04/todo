import app from '../helpers/todo.app';
import todoService from '../services/todo.service';
import http = require('http');

app.post('/reset', function (req, res) {
  res.header('Content-type', 'text/json');

  const todos = todoService.resetTodos();

  return res.end(JSON.stringify(todos));
});

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
