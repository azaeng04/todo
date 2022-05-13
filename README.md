
# Stitch Todo
This is the Stitch Todo app.

# Requirements
 - Node LTS version
 - Yarn
 - Docker Desktop

# Starting the Application
The application requires the REST API to be running in order for it to work.

Start up the REST API and App: 
Terminal 1: `yarn start api-todo`
Terminal 2: `yarn start app-todo`

# Testing the Application
To execute the unit tests of the REST API execute:
`yarn test api-todo`

To execute the integration tests of the REST API execute:
`yarn nx run api-todo:test-int`

# E2E Tests
To execute the Cypress E2E tests run:
`yarn test app-todo-e2e`

# Using Docker
#### Execute this command to bring up both the REST API and App:
`docker compose run --rm -p 3000:3000 app`

#### Execute the unit tests:
`docker compose run --rm api-unit`

#### Execute the integration tests:
`docker compose run --rm api-int`

#### Execute the E2E tests:
`docker compose run --rm app-e2e`
