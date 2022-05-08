import { TodoModel, TodoStatusModel } from './todo.model';

let todoService: TodoService = null;

class TodoService {
  todos: TodoModel[] = [
    {
      id: 1,
      todo: 'Write app for QA assessment',
      status: TodoStatusModel.IN_PROGRESS,
    },
    {
      id: 2,
      todo: 'Write up for QA assessment',
      status: TodoStatusModel.DONE,
    },
  ];

  resetTodos = () => {
    this.todos = [];
  };

  fetchTodos = () => {
    return this.todos;
  };

  addTodo = (todoData: TodoModel) => {
    this.todos.push(todoData);
    return this.todos;
  };

  updateTodo = (todoData: TodoModel) => {
    const idToEdit = todoData.id;
    const updatedToDo = todoData.todo;
    const updatedStatus = todoData.status;
    const todoInArray = this.todos.find((element) => element.id === idToEdit);
    const todoPosition = this.todos.indexOf(todoInArray);
    this.todos[todoPosition].todo = updatedToDo;
    this.todos[todoPosition].status = updatedStatus;
    return this.todos;
  };

  deleteTodo = (todoData: TodoModel) => {
    const idToEdit = todoData.id;
    const todoInArray = this.todos.find((element) => element.id === idToEdit);
    const todoPosition = this.todos.indexOf(todoInArray);
    this.todos.splice(todoPosition, 1);
    return this.todos;
  };
}

if (!todoService) todoService = new TodoService();

export default todoService;
