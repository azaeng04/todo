import { environment } from './environments/environment';

const env = process.env.ENV ? environment.local : environment.docker;

export const getTodos = () => ({
  method: 'GET',
  url: `${env}/todos`,
});

export const postTodos = (data: any) => ({
  method: 'POST',
  url: `${env}/todos`,
  data: data,
});

export const updateTodos = (data: any) => ({
  method: 'POST',
  url: `${env}/edit-todos`,
  data,
});

export const deleteTodos = (id: any) => ({
  method: 'POST',
  url: `${env}/del-todos`,
  data: { id },
});
