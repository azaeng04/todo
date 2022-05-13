const apiHttpSchema = Cypress.env('HTTP_SCHEMA');
const apiHost = Cypress.env('API_TODO_HOST');
const apiPort = Cypress.env('API_TODO_PORT');

describe('Todo App E2E', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: `${apiHttpSchema}://${apiHost}:${apiPort}/reset`,
    });
  });

  describe('POSITIVE', () => {
    it(`GIVEN the user enters in a todo item
        WHEN clicking the Submit button 
        THEN the todo item should display in the list of todos`, () => {
      cy.visit('/');

      cy.get('[data-cy="addNewTodoTxtField"]').type('Add test automation');

      cy.get('[data-cy="submitBtn"]').click();

      cy.get(`[data-cy="todo-1"] span`).should(
        'have.text',
        'Add test automation'
      );
    });

    it(`GIVEN a todo item in the list
        WHEN clicking the tick button
        THEN the todo item should be striked through`, () => {
      cy.request({
        method: 'POST',
        url: `${apiHttpSchema}://${apiHost}:${apiPort}/todos`,
        body: {
          id: 1,
          todo: 'Add test automation',
        },
      });

      cy.visit('/');

      cy.get('[data-cy="checkTodoBtn"]').click();

      cy.get(`[data-cy="todo-1"] span`)
        .invoke('attr', 'style')
        .should('contain', 'line-through');
    });

    it.skip(`GIVEN a todo item that is striked through
        WHEN clicking the untick button 
        THEN the todo item should be unstruck`, () => {
      cy.request({
        method: 'POST',
        url: `${apiHttpSchema}://${apiHost}:${apiPort}/todos`,
        body: {
          id: 1,
          todo: 'Add test automation',
          status: 'done',
        },
      });

      cy.visit('/');

      cy.get('[data-cy="checkTodoBtn"]').click();

      cy.get(`[data-cy="todo-1"] span`)
        .invoke('attr', 'style')
        .should('not.contain', 'line-through');
    });

    it(`GIVEN a todo item in the list of todos
        WHEN clicking the deletion button 
        THEN the todo item should be removed from the list`, () => {
      cy.request({
        method: 'POST',
        url: `${apiHttpSchema}://${apiHost}:${apiPort}/todos`,
        body: {
          id: 1,
          todo: 'Add test automation',
          status: 'inprogress',
        },
      });

      cy.visit('/');

      cy.get('[data-cy="deleteTodoBtn"]').click();

      cy.get('[data-cy="todos"] .card-body').should('have.length', 0);
    });
  });

  describe('NEGATIVE', () => {
    it(`GIVEN the user does not enter in a todo
        WHEN clicking the Submit button 
        THEN the todo list will remain empty`, () => {
      cy.visit('/');
      cy.get('[data-cy="submitBtn"]').click();
      cy.get('[data-cy="todos"] .card-body').should('have.length', 0);
    });

    it.skip(`GIVEN the user enters in a todo   
        WHEN clicking the Submit button
        AND the request fails
        THEN an appropriate error message should be displayed`, () => {
      cy.visit('/');

      cy.get('[data-cy="addNewTodoTxtField"]').type('Add test automation');

      cy.intercept(
        {
          method: 'POST',
          url: '/todos',
        },
        {
          statusCode: 500,
          body: {
            message: 'Failed to add todo',
          },
        }
      );

      cy.get('[data-cy="submitBtn"]').click();
    });

    it(`GIVEN the user visits the todo app   
        WHEN the app attempts to retrieve the list of todos     
        AND the request to retrieve the todos fails    
        THEN an appropriate error message should be displayed`, () => {
      cy.intercept(
        {
          method: 'GET',
          url: '/todos',
        },
        {
          statusCode: 500,
          body: {
            message: 'Failed to retrieve todos',
          },
        }
      );
      cy.visit('/');
    });

    it.skip(`GIVEN a todo item in the list
        WHEN clicking the tick button  
        AND the request to strike through the todo fails 
        THEN an appropriate error message should be displayed`, () => {
      cy.request({
        method: 'POST',
        url: `${apiHttpSchema}://${apiHost}:${apiPort}/todos`,
        body: {
          id: 1,
          todo: 'Add test automation',
        },
      });

      cy.visit('/');

      cy.intercept(
        {
          method: 'POST',
          url: '/edit-todos',
        },
        {
          statusCode: 500,
          body: {
            message: 'Failed to mark todo as done',
          },
        }
      );

      cy.get('[data-cy="checkTodoBtn"]').click();
    });

    it.skip(`GIVEN a todo item in the list
        WHEN clicking the deletion button  
        AND the request to delete the todo fails 
        THEN an appropriate error message should be displayed`, () => {
      cy.request({
        method: 'POST',
        url: `${apiHttpSchema}://${apiHost}:${apiPort}/todos`,
        body: {
          id: 1,
          todo: 'Add test automation',
          status: 'inprogress',
        },
      });

      cy.visit('/');

      cy.intercept(
        {
          method: 'POST',
          url: '/del-todos',
        },
        {
          statusCode: 500,
          body: {
            message: 'Failed to mark todo as done',
          },
        }
      );
      cy.get('[data-cy="deleteTodoBtn"]').click();
    });
  });
});
