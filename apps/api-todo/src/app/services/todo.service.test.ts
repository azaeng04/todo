import { TodoStatusModel } from '../models/todo.model';
import serviceUnderTest from './todo.service';

describe('Todo Service', () => {
  beforeEach(() => {
    serviceUnderTest.todos = [];
  });

  describe('POSITIVE', () => {
    describe(`Add Todo`, () => {
      given('data of a todo item', () => {
        const expctedResult = [
          {
            id: expect.any(Number),
            todo: 'Test POST todo',
            status: TodoStatusModel.IN_PROGRESS,
          },
        ];

        const fakeTodo = {
          id: 1,
          todo: 'Test POST todo',
          status: TodoStatusModel.IN_PROGRESS,
        };

        when('adding the todo item', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);

          then('the todo item should be present in the todo list', () => {
            expect(actualResult).toEqual(expctedResult);
          });
        });
      });

      given('a todo item with less than 100 character', () => {
        const expctedResult = [
          {
            id: expect.any(Number),
            todo: 'a'.repeat(99),
            status: TodoStatusModel.IN_PROGRESS,
          },
        ];

        const fakeTodo = {
          id: 1,
          todo: 'a'.repeat(99),
          status: TodoStatusModel.IN_PROGRESS,
        };

        when('adding the todo item', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);
          then('the todo should be added to the list', () => {
            expect(actualResult).toEqual(expctedResult);
          });
        });
      });
    });

    describe('Get Todos', () => {
      given('more than one todo in the list', () => {
        const expctedResult = [
          {
            id: 1,
            todo: 'Test GET todos',
            status: TodoStatusModel.IN_PROGRESS,
          },
          {
            id: 2,
            todo: 'Test GET todos',
            status: TodoStatusModel.IN_PROGRESS,
          },
        ];

        const fakeTodo1 = {
          id: 1,
          todo: 'Test GET todos',
          status: TodoStatusModel.IN_PROGRESS,
        };

        const fakeTodo2 = {
          id: 2,
          todo: 'Test GET todos',
          status: TodoStatusModel.IN_PROGRESS,
        };
        serviceUnderTest.addTodo(fakeTodo1);
        serviceUnderTest.addTodo(fakeTodo2);

        when('fetching all todo items', () => {
          const actualResult = serviceUnderTest.fetchTodos();

          then('the todo items that were added are present in the list', () => {
            expect(actualResult).toEqual(expctedResult);
          });
        });
      });
    });

    describe('Update Todo', () => {
      given('an existing todo', () => {
        const expctedResult = [
          {
            id: 1,
            todo: 'My Updated Todo item',
            status: TodoStatusModel.IN_PROGRESS,
          },
        ];

        const fakeTodo = {
          id: 1,
          todo: 'Test POST todos',
          status: TodoStatusModel.IN_PROGRESS,
        };

        serviceUnderTest.addTodo(fakeTodo);

        const newTodo = {
          id: 1,
          todo: 'My Updated Todo item',
          status: TodoStatusModel.IN_PROGRESS,
        };

        when('updating the todo', () => {
          const actualResult = serviceUnderTest.updateTodo(newTodo);

          then('the todo item should be updated', () => {
            expect(actualResult).toEqual(expctedResult);
          });
        });
      });
    });

    describe('Delete Todo', () => {
      given('a list of todos', () => {
        const expctedResult = [
          {
            id: 1,
            todo: 'Test DELETE todos',
            status: TodoStatusModel.IN_PROGRESS,
          },
        ];

        const fakeTodo1 = {
          id: 1,
          todo: 'Test DELETE todos',
          status: TodoStatusModel.IN_PROGRESS,
        };

        const fakeTodo2 = {
          id: 2,
          todo: 'Test DELETE todos',
          status: TodoStatusModel.IN_PROGRESS,
        };

        serviceUnderTest.addTodo(fakeTodo1);
        serviceUnderTest.addTodo(fakeTodo2);

        when('deleting a todo', () => {
          const actualResult = serviceUnderTest.deleteTodo(fakeTodo2);

          then(
            'the todo item deleted should not be in the list of todos',
            () => {
              expect(actualResult).toEqual(expctedResult);
            }
          );
        });
      });
    });

    describe('Reset Todos', () => {
      given('a list of todos', () => {
        const todo1 = {
          id: 1,
          todo: 'My Todo',
          status: TodoStatusModel.IN_PROGRESS,
        };

        const todo2 = {
          id: 2,
          todo: 'My Todo',
          status: TodoStatusModel.IN_PROGRESS,
        };

        serviceUnderTest.addTodo(todo1);
        serviceUnderTest.addTodo(todo2);

        const expectedResult = [];

        when('resetting the todos', () => {
          const actualResult = serviceUnderTest.resetTodos();

          then('the todo list should be empty', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });
  });

  describe('NEGATIVE', () => {
    describe('Add Todo', () => {
      given('an empty todo item', () => {
        const expectedResult = {
          message:
            'Todo payload is invalid. The following properties are allowed: id, todo and status',
        };
        const fakeTodo = {};

        when('adding a todo', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);

          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });

      // BUG: No error handling
      given('a todo item only with the ID property', () => {
        const expectedResult = {
          message:
            'Todo payload is invalid. The following properties are allowed: id, todo and status',
        };
        const fakeTodo = {
          id: 1,
        };
        when('adding a todo', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);

          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });

      // BUG: No error handling
      given('a todo item only with the status property', () => {
        const expectedResult = {
          message:
            'Todo payload is invalid. The following properties are allowed: id, todo and status',
        };
        const fakeTodo = {
          status: TodoStatusModel.IN_PROGRESS,
        };
        when('adding a todo', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);
          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });

      // BUG: No error handling
      given('a todo item only with the todo property', () => {
        const expectedResult = {
          message:
            'Todo payload is invalid. The following properties are allowed: id, todo and status',
        };
        const fakeTodo = {
          todo: 'My fake Todo',
        };
        when('adding a todo', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);
          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });

      // BUG: No error handling
      given('a todo item with more than 100 characters', () => {
        const expectedResult = {
          message:
            'Todo item description length exceeds the maximum amount of 100 characters allowed',
        };

        const fakeTodo = {
          id: 1,
          todo: 'a'.repeat(101),
          status: TodoStatusModel.IN_PROGRESS,
        };
        when('adding a todo', () => {
          const actualResult = serviceUnderTest.addTodo(fakeTodo);

          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });

    describe('Update Todo', () => {
      given('no todos were added', () => {
        const expectedResult = {
          message: 'Todo item with ID: 1 could not be found',
        };

        const newTodo = {
          id: 1,
          todo: 'New todo',
          status: TodoStatusModel.DONE,
        };

        when('updating a todo', () => {
          const actualResult = serviceUnderTest.updateTodo(newTodo);

          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });

      // BUG: Log a bug
      given('a todo in the list', () => {
        const expectedResult = {
          message:
            'Todo item description length exceeds the maximum amount of 100 characters allowed',
        };

        const fakeTodo = {
          id: 1,
          todo: 'My Fake Todo',
          status: TodoStatusModel.IN_PROGRESS,
        };
        serviceUnderTest.addTodo(fakeTodo);

        const newTodo = {
          id: 1,
          todo: 'a'.repeat(101),
          status: TodoStatusModel.DONE,
        };
        when('updating a todo with more than 100 characters', () => {
          const actualResult = serviceUnderTest.updateTodo(newTodo);

          then('an error message should be returned', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });

    describe('Delete Todo', () => {
      given('an empty todo list', () => {
        const expectedResult = {
          message: 'Todo item with ID: 1 could not be found',
        };
        const fakeTodo = {
          id: 1,
          todo: 'I do not exist :P',
          status: TodoStatusModel.IN_PROGRESS,
        };
        when('deleting a todo', () => {
          const actualResult = serviceUnderTest.deleteTodo(fakeTodo);

          then('an error message should display', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });
  });
});
