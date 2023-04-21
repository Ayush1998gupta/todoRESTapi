# TODO API using ExpressJS and MongoDB

This is a RESTful API for managing a todo list, built using Node.js, ExpressJS and MongoDB.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine

2. Install the dependencies:

npm install

3. Create a `.env` file in the root directory of the project, and add the following environment variables:

DB_CONNECTION_STRING=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_SECRET_KEY>


4. Start the server:

npm start

The server should now be running on `http://localhost:8000`.

## Routes

The API has the following routes:

### Authentication

* `POST /api/auth/register` - Register a new user
* `POST /api/auth/login` - Authenticate user and generate a JWT token
* `GET /api/auth/logout` -  Logout user


### TODO

* `GET /api/tasks/all` - Get all todos
* `GET /api/tasks/myTasks` - Get current user todos
* `POST /api/tasks` - Create a new todo
* `PUT /api/tasks/:id` - Update a todo
* `DELETE /api/tasks/:id` - Delete a todo
* `DELETE /api/tasks/deleteAll` - Delete all todos


### USER

* `GET /api/tasks/me` - Get user info
* `PUT /api/tasks/me` - Update user info


### Pagination and Searching

* `GET /api/todo/all?title=<QUERY>&description=<QUERY>&page=<PAGE>&limit=<LIMIT>` - Search for todos based on title and description, with pagination

* `GET /api/todo/myTasks?title=<QUERY>&description=<QUERY>&page=<PAGE>&limit=<LIMIT>` - Search for todos based on title and description, with pagination

## Authentication

Authentication is required for all routes except for `/api/auth/register` and `/api/auth/login`. To authenticate, include a valid JWT token in the `Authorization` header:
