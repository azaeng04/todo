import { postTodos } from './main.urls';
import axios from 'axios';

export const validTodo = async () => {
  const todo = {
    id: Math.floor(Math.random() * 1000000000) + 1,
    todo: 'Random Todo',
    status: 'inprogress',
  };
  await axios.request(postTodos(todo));
  return todo;
};

export const todoWithoutId = async () => {
  const todo = {
    todo: 'My test todo',
    status: 'inprogress',
  };
  return todo;
};

export const todoWithoutTodoItem = async () => {
  const todo = {
    id: 1,
    status: 'inprogress',
  };
  return todo;
};

export const todoWithoutStatus = async () => {
  const todo = {
    id: 1,
    status: 'inprogress',
  };
  return todo;
};

export const todoWithoutIdAndTodo = async () => {
  const todo = {
    status: 'inprogress',
  };
  return todo;
};

export const todoWithoutIdAndStatus = async () => {
  const todo = {
    todo: 'My test todo',
  };
  return todo;
};

export const todoWithoutTodoAndStatus = async () => {
  
}
