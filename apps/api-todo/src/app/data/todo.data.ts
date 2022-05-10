import { postTodos } from '../urls/todo.urls';
import { TodoStatusModel } from '../models/todo.model';
import { httpRequest } from '../helpers/request.helper';

export const addTodo = async () => {
  const todo = {
    id: Math.floor(Math.random() * 1000000000) + 1,
    todo: 'Random Todo',
    status: TodoStatusModel.IN_PROGRESS,
  };
  await httpRequest(postTodos(todo));
  return todo;
};
