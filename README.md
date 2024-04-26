# Restful API Template

This is a Node.js TypeScript project that implements a RESTful API using Express.js, MongoDB native driver, and follows Domain-Driven Design (DDD) principles. It also utilizes `express-session`, `express-rate-limit`, and `helmet` for enhanced security.

## Project Structure

The project is structured into several components that work together to handle HTTP requests and interact with the database:

### Models

- The `models` directory contains TypeScript interfaces that define the structure of our domain entities. These interfaces serve as blueprints for our data.

### Utils

- The `utils` directory contains a module called `mongo.ts` which handles the MongoDB connection and provides a function to get access to the database instance.

### Config

- The `config.ts` file manages environment variables using the `dotenv` package. It stores values like the port number, MongoDB URI, and session secret.

### Repositories

- The `repositories` directory houses functions that interact directly with the database using the MongoDB native driver. These functions handle operations such as creating and retrieving data.

- Repositories use the models defined in the `models` directory and the MongoDB connection from the `utils` module.

### Services

- The `services` directory contains modules that encapsulate business logic. They rely on the repositories to perform database operations.

- Services handle operations that involve more complex logic than simple database interactions.

### Controllers

- The `controllers` directory handles HTTP requests and responses. They use the services to perform operations and return appropriate responses.

- Controllers are responsible for taking data from incoming HTTP requests, passing it to the services, and returning the response back to the client.

### Routes

- The `routes` directory organizes route files for different resources. The `index.ts` file serves as the main router that combines all the resource-specific routes.

## Configuration

The application's configuration values are managed using the `dotenv` package. You can modify the environment variables in the `.env` file.

### Available Configuration Variables

- `PORT`: The port number the server will listen on. Default is 3000.

- `MONGO_URI`: The URI for the MongoDB database. Default is `mongodb://localhost:27017/mydatabase`.

- `SESSION_SECRET`: The secret key used to sign the session ID cookie. Default is `my-secret-key`.

## Running the Project

1. Make sure you have Node.js and npm installed.

2. Create a `.env` file in the root of your project with the following content:

```plaintext
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydatabase
SESSION_SECRET=my-secret-key
```
## Install project dependencies:
```plaintext
yarn install
```
## Start the server in development:
```plaintext
yarn dev
```
## Start the server:
```plaintext
yarn start
```
## Testing
We use Jest for testing. You can run the tests using the command:
```plaintext
yarn test
```
