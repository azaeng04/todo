/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

const todos = [
  {
    todo: 'Write app for QA assessment',
    status: 'inprogress',
    id: 1,
  },
  {
    todo: 'Write up for QA assessment',
    status: 'done',
    id: 2,
  },
];

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-todo!' });
});

app.get('/todos', function (req, res) {
  res.header('Content-type', 'text/json');

  return res.end(JSON.stringify(todos));
});

app.post('/todos', function (req, res) {
  res.header('Content-type', 'text/json');

  todos.push(req.body);
  return res.end(JSON.stringify(todos));
});

app.post('/edit-todos', function (req, res) {
  const idToEdit = req.body.id;
  const updatedToDo = req.body.todo;
  const updatedStatus = req.body.status;
  const todoInArray = todos.find((element) => element.id === idToEdit);
  const todoPosition = todos.indexOf(todoInArray);
  console.log(todoPosition);
  todos[todoPosition].todo = updatedToDo;
  todos[todoPosition].status = updatedStatus;

  res.header('Content-type', 'text/json');

  return res.end(JSON.stringify(todos));
});

app.post('/del-todos', function (req, res) {
  const idToEdit = req.body.id;
  const todoInArray = todos.find((element) => element.id === idToEdit);
  const todoPosition = todos.indexOf(todoInArray);
  todos.splice(todoPosition, 1);

  res.header('Content-type', 'text/json');

  return res.end(JSON.stringify(todos));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
