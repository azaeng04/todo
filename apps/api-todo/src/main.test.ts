import axios from 'axios';
import { getTodos, postTodos, updateTodos } from './main.urls';

type ErrorResponse = {
  message: string;
};

describe('Todo API', () => {
  describe('POSITIVE', () => {
    describe('POST /todo', () => {
      given('todo item added to be in progress state', () => {
        const data = {
          id: 3,
          todo: 'My automation test',
          status: 'inprogress',
        };
        const expectedResult = [
          { id: 3, todo: 'My automation test', status: 'inprogress' },
        ];
        when('adding a todo', async () => {
          const actualResult = await axios.request(postTodos(data));

          then('added todo should be part of the todo list', () => {
            expect(actualResult.data).toEqual(
              expect.arrayContaining(expectedResult)
            );
          });
        });
      });

      given('todo item added to be in done state', () => {
        const data = {
          id: 3,
          todo: 'My automation test',
          status: 'inprogress',
        };
        const expectedResult = [
          { id: 3, todo: 'My automation test', status: 'done' },
        ];
        when('adding a todo', async () => {
          const actualResult = await axios.request(postTodos(data));

          then('added todo should be part of the todo list', () => {
            expect(actualResult.data).toEqual(
              expect.arrayContaining(expectedResult)
            );
          });
        });
      });
    });

    describe('GET /todo', () => {
      given('a todo list structure expected', async () => {
        const expectedResult = expect.arrayContaining(
          expect.objectContaining({
            id: String,
            todo: String,
            status: String,
          })
        );
        when('retrieving all todos', async () => {
          const actualResult = await axios.request(getTodos());
          then(
            'todos returned should be more than 1 and match the given structure',
            async () => {
              expect(actualResult.data).toBeGreaterThan(1);
              expect(actualResult.data).toEqual(expectedResult);
            }
          );
        });
      });
    });

    describe('POST /edit-todo', () => {});

    describe('POST /del-todo', () => {});
  });

  describe('NEGATIVE', () => {
    describe('POST /todo', () => {
      given('a payload with only a status', async () => {
        when('', async () => {
          then('', async () => {});
        });
      });
      given('an empty payload requst to add', async () => {
        const data = {};
        const expectedResult = {
          message:
            'Todos need to have the following properties: id, todo and status',
        };
        when('adding the todo', async () => {
          // const actualResult = await axios.request();
          then('an error message should be returned', async () => {});
        });
      });

      given('a payload with invalid properties request', async () => {
        when('adding a todo', async () => {
          then('an error message should be returned', async () => {});
        });
      });

      given('a payload with only an id and todo', async () => {
        when('adding the todo', async () => {
          then('an error message should be returned', async () => {});
        });
      });

      given('a payload with only an id and status', async () => {
        when('adding the todo', async () => {
          then('an error message should be returned', async () => {});
        });
      });
      given('a payload with only a todo and status', async () => {
        when('adding the todo', async () => {
          then('an error message should be returned', async () => {});
        });
      });

      given('a payload with only an id', async () => {
        when('adding the todo', async () => {
          then('an error message should be returned', async () => {});
        });
      });

      given('a payload with only a todo', async () => {
        when('adding the todo', async () => {
          then('an error message should be returned', async () => {});
        });
      });
    });

    describe('POST /edit-todo', () => {});

    describe('POST /del-todo', () => {});
  });
});

//   // TODO: Error handling not included.
//   test("should not add a todo with no data", async () => {
//     const data = {};
//     const expectedResult: ErrorResponse = {
//       message: `The following properties are missing and status`,
//     };

//     const actualResult = await axios.request(postTodos(data));

//     expect(actualResult.data).toEqual(expectedResult);
//   });

//   // TODO: Error handling not included
//   test("should not add a todo with invalid properties", async () => {
//     const data = { invalid: "Property" };
//     const expectedResult: ErrorResponse = {
//       message: `The following properties are missing and status`,
//     };

//     const actualResult = await axios.request(postTodos(data));

//     expect(actualResult.data).toEqual(expectedResult);
//   });

//   test("should not add a todo with an invalid status", async () => {
//     const data = { id: 1, todo: "My Todo", status: "INVALID" };
//     const expectedResult: ErrorResponse = {
//       message: `The status is invalid. The following properties are allowed: inprogress or done`,
//     };

//     const actualResult = await axios.request(postTodos(data));

//     expect(actualResult.data).toEqual(expectedResult);
//   });

//   test("should retrieve all todos", async () => {
//     const expectedResult = 1;
//     const actualResult = await axios.request(getTodos());

//     expect(actualResult.data.length).toBeGreaterThan(expectedResult);
//   });

//   test("should update a todo with a valid ID", async () => {
//     const addedTodo = await addATodo();
//     const expectedResult = [
//       {
//         id: addedTodo.id,
//         todo: "Updated Todo",
//         status: "done",
//       },
//     ];

//     const newData = {
//       id: addedTodo.id,
//       todo: "Updated Todo",
//       status: "done",
//     };

//     const actualResult = await axios.request(updateTodos(newData));

//     expect(actualResult.data).toMatchObject(
//       expect.arrayContaining(expectedResult)
//     );
//   });

//   // TODO: Error handling not included
//   test("should not update a todo with an invalid ID", async () => {
//     const expectedResult = [
//       {
//         id: 100,
//         todo: "Updated Todo",
//         status: "done",
//       },
//     ];

//     const newData = {
//       id: 100,
//       todo: "Updated Todo",
//       status: "done",
//     };

//     const actualResult = await httpRequest(updateTodos(newData));

//     expect(actualResult.data).toMatchObject(
//       expect.arrayContaining(expectedResult)
//     );
//   });

//   // TODO: Error handling not included
//   test("should not update a todo with a valid ID and invalid properties", async () => {
//     const addedTodo = await addATodo();
//     const expectedResult = {
//       error:
//         'Property "invalid", not recognized. The allowed properties are: todo and status',
//     };

//     const newData = {
//       id: addedTodo.id,
//       invalid: "Updated Todo",
//       status: "done",
//     };

//     const actualResult = await axios.request(updateTodos(newData));

//     expect(actualResult.data).toEqual(expectedResult);
//   });
// });
