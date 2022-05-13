import {
  deleteTodos,
  getTodos,
  postTodos,
  resetTodos,
  updateTodos,
} from '../urls/todo.urls';

import { TodoStatusModel } from '../models/todo.model';
import { addTodo } from '../data/todo.data';
import { httpRequest } from '../helpers/request.helper';

describe('Todo API', () => {
  beforeEach(async () => {
    await httpRequest(resetTodos());
  });

  describe('POSITIVE', () => {
    describe('GET /todos', () => {
      test('GIVEN a valid todo item WHEN retrieving all todos THEN the correct status code and data is returned', async () => {
        const todo = await addTodo();
        const expectedResult = { data: [todo], status: 200 };

        const { status, data } = await httpRequest(getTodos());
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });

    describe('POST /todo', () => {
      test('GIVEN a valid todo item WHEN adding a todo THEN the correct data and status code should display', async () => {
        const todo = {
          id: 1,
          todo: 'My todo',
          status: TodoStatusModel.IN_PROGRESS,
        };
        const expectedResult = { data: [todo], status: 200 };

        const { status, data } = await httpRequest(postTodos(todo));
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });

    // TODO: It is preffered to use the PUT HTTP Method
    describe('POST /edit-todo', () => {
      test('GIVEN a valid todo item WHEN updating the todo THEN the new todo should reflect', async () => {
        const todo = await addTodo();
        const newTodo = {
          id: todo.id,
          todo: 'My Updated Todo',
          status: TodoStatusModel.DONE,
        };
        const expectedResult = { data: [newTodo], status: 200 };

        const { status, data } = await httpRequest(updateTodos(newTodo));
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });

    // TODO: It is preffered to use the DELETE HTTP Method
    describe('POST /del-todo', () => {
      test('GIVEN two valid todo items WHEN deleting the 2nd todo THEN the first todo should only be in the list of todos', async () => {
        const todo1 = await addTodo();
        const todo2 = await addTodo();
        const expectedResult = { data: [todo1], status: 200 };

        const { status, data } = await httpRequest(deleteTodos(todo2));
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });
  });

  describe.skip('NEGATIVE', () => {
    describe('POST /todo', () => {
      // BUG: Log defect
      test('GIVEN an empty todo payload WHEN adding a todo THEN an error message should be returned', async () => {
        const expectedResult = expect.objectContaining({
          status: 400,
          data: {
            message:
              'The properties passed are invalid. These properties are allowed: id, todo and status',
          },
        });

        const emptyFakeTodoPayload = {};

        const { status, data } = await httpRequest(
          postTodos(emptyFakeTodoPayload)
        );
        const actualResult = { status, data };

        expect(actualResult).toMatchObject(expectedResult);
      });

      // BUG: Log defect
      test(`GIVEN a todo payload with invalid properties
         WHEN adding the todo
         THEN an error message should be returned`, async () => {
        const expectedResult = expect.objectContaining({
          status: 400,
          data: {
            message:
              'The properties passed are invalid. These properties are allowed: id, todo and status',
          },
        });
        const invalidFakeTodoProperties = {
          invalidIdProp: 1,
          invalidTodoProp: 'HAHAHAHA GOT YOU!',
          invalidStatusProp: TodoStatusModel.DONE,
        };

        const { status, data } = await httpRequest(
          postTodos(invalidFakeTodoProperties)
        );
        const actualResult = { status, data };

        expect(actualResult).toMatchObject(expectedResult);
      });

      // BUG: Log defect
      test(`GIVEN a todo payload with an invalid status
         WHEN adding the todo
         THEN an error message should be returned`, async () => {
        const expectedResult = {
          status: 400,
          data: {
            message:
              'The status of the Todo item is invalid only "inprogress" or "done" are allowed',
          },
        };
        const invalidStatusTodo = {
          id: 1,
          todo: 'My Todo',
          invalidStatus: 'INVALID',
        };

        const { status, data } = await httpRequest(
          postTodos(invalidStatusTodo)
        );
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });

      // BUG: Log defect
      test(`GIVEN a todo payload with invalid property values
         WHEN adding the todo
         THEN an error message should be returned`, async () => {
        const expectedResult = {
          status: 400,
          data: {
            message: `The following fields: id, todo and status, have the incorrect types. Id should be a number, todo should be a string and status should be a string`,
          },
        };
        const invalidStatusTodo = {
          id: '1',
          todo: 1234,
          status: 4321,
        };

        const { status, data } = await httpRequest(
          postTodos(invalidStatusTodo)
        );
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });

    describe('POST /edit-todo', () => {
      // BUG: Log defect
      test('GIVEN an empty todo payload WHEN updating a todo THEN an error message should be returned', async () => {
        const todo = await addTodo();
        const expectedResult = {
          status: 404,
          data: {
            message: `The todo with ID: ${todo.id} does not exist`,
          },
        };
        const todoPayload = {};

        const { status, data } = await httpRequest(updateTodos(todoPayload));
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });

      // BUG: Log defect
      test('GIVEN an empty todo list WHEN updating a todo that does not exist THEN an error message should be returned', async () => {
        const nonExistentTodo = {
          id: 1,
          todo: "My todo that doesn't exist :P",
          status: TodoStatusModel.IN_PROGRESS,
        };

        const expectedResult = {
          status: 404,
          data: {
            message: 'The todo with ID: 1 does not exist',
          },
        };

        const { status, data } = await httpRequest(
          updateTodos(nonExistentTodo)
        );
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });

      // BUG: Log defect
      test(`GIVEN a todo payload with an invalid status
         WHEN updating the todo
         THEN an error message should be returned`, async () => {
        const todo = await addTodo();
        const expectedResult = {
          status: 400,
          data: {
            message:
              'The status of the Todo item is invalid, only "inprogress" or "done" are allowed',
          },
        };
        const invalidStatusTodo = {
          id: todo.id,
          todo: 'My Todo',
          invalidStatus: 'INVALID',
        };

        const { status, data } = await httpRequest(
          postTodos(invalidStatusTodo)
        );
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });

      // BUG: Log defect
      test(`GIVEN a todo payload with invalid property values
         WHEN adding the todo
         THEN an error message should be returned`, async () => {
        const expectedResult = {
          status: 400,
          data: {
            message: `The following fields: id, todo and status, have the incorrect types. Id should be a number, todo should be a string and status should be a string`,
          },
        };
        const invalidStatusTodo = {
          id: '1',
          todo: 1234,
          status: 4321,
        };

        const { status, data } = await httpRequest(
          updateTodos(invalidStatusTodo)
        );
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });

    describe('POST /del-todo', () => {
      // BUG: Log defect
      test('GIVEN an empty todo list WHEN deleting a todo that does not exist THEN an error message should be returned', async () => {
        const todoId = { id: 1 };
        const expectedResult = {
          status: 404,
          data: {
            message: `Todo item with ID ${todoId.id} does not exist`,
          },
        };

        const { status, data } = await httpRequest(deleteTodos(todoId));
        const actualResult = { status, data };

        expect(actualResult).toEqual(expectedResult);
      });
    });
  });
});
