import { apiUrl } from '../../environments/environment';

export const getTodos = () => ({
  method: 'GET',
  url: `${apiUrl}/todos`,
});

export const postTodos = (data: any) => ({
  method: 'POST',
  url: `${apiUrl}/todos`,
  data,
});

export const updateTodos = (data: any) => ({
  method: 'POST',
  url: `${apiUrl}/edit-todos`,
  data,
});

export const deleteTodos = (data: any) => ({
  method: 'POST',
  url: `${apiUrl}/del-todos`,
  data,
});

export const resetTodos = () => ({
  method: 'POST',
  url: `${apiUrl}/reset`,
});
