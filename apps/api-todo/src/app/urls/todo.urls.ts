import { env } from '../../environments/environment';

export const getTodos = () => ({
  method: 'GET',
  url: `${env}/todos`,
});

export const postTodos = (data: any) => ({
  method: 'POST',
  url: `${env}/todos`,
  data,
});

export const updateTodos = (data: any) => ({
  method: 'POST',
  url: `${env}/edit-todos`,
  data,
});

export const deleteTodos = (data: any) => ({
  method: 'POST',
  url: `${env}/del-todos`,
  data,
});

export const resetTodos = () => ({
  method: 'POST',
  url: `${env}/reset`,
});
