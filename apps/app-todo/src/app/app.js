import React, {useEffect} from "react";
import "./app.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { appUrl } from "../environments/environment";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      data-cy={`todo-${index}`}
    >
      <span style={{ textDecoration: todo.status==='done' ? "line-through" : "" }}>{todo.todo}</span>
      <div>
        <Button data-cy="checkTodoBtn" variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button data-cy="deleteTodoBtn" variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control data-cy="addNewTodoTxtField" type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button data-cy="submitBtn" variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch(`${appUrl}/todos`, requestOptions)
        .then(response => response.json())
        .then(data => setTodos(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  const addTodo = text => {
    let idForTodo = todos.length + 1
    let todoObj = {
      id:idForTodo,
      todo: text,
      status: 'inprogress'
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoObj)
    };
    fetch(`${appUrl}/todos`, requestOptions)
        .then(response => response.json())
        .then(data => setTodos(data));
  };

  const markTodo = index => {
    let todoInArray = todos.find(element => element.id === index);
    let todoObj = {
      id:todoInArray.id,
      todo: todoInArray.todo,
      status: 'done'
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoObj)
    };
    fetch(`${appUrl}/edit-todos`, requestOptions)
        .then(response => response.json())
        .then(data => setTodos(data));
  };

  const removeTodo = index => {

    let todoObjToDel = {
      id:index,
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoObjToDel)
    };
    fetch(`${appUrl}/del-todos`, requestOptions)
        .then(response => response.json())
        .then(data => setTodos(data));

  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Stitch Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div data-cy='todos'>
          {todos?.map((todo) => (
            <Card>
              <Card.Body>
                <Todo
                key={todo.id}
                index={todo.id}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;