import axios from 'axios';
import { getTodos, postTodos, updateTodos } from '../urls/todo.urls';
import { TodoStatusModel } from '../models/todo.model';

describe('Todo API', () => {
  beforeEach(async () => {});

  describe('POSITIVE', () => {
    describe('POST /todo', () => {
      given('a todo item to add', () => {
        const expectedResult = [
          {
            id: 1,
            todos: 'Test Automation',
            status: TodoStatusModel.IN_PROGRESS,
          },
        ];
        const fakeTodo = {
          id: 1,
          todos: 'Test Automation',
          status: TodoStatusModel.IN_PROGRESS,
        };
        when('adding the todo', async () => {
          const actualResult = (await axios.request(postTodos(fakeTodo))).data;

          then('the returned results should equal as expected', () => {
            expect(actualResult).toEqual(expectedResult);
          });
        });
      });
    });

    describe('GET /todo', () => {});

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
