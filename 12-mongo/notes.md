All of the specific code is in the `07-express` directory where we refactored the User model and controller to use Mongo.

Here are some notes on using MongoDB with Mongoose in a Node.js application:

## Connecting to the database (index.js)

### Import Statements

1. **Mongoose**:
   - `import mongoose from "mongoose";`
   - This imports the Mongoose library, which provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, and other features.

2. **App and Port**:
   - `import { app, port } from "./server";`
   - This imports the Express application (`app`) and the port number (`port`) from your server module. These are used to start your web server.

### The `startup` Function

1. **Async Function**:
   - `async function startup() {...}`
   - Defined as an asynchronous function (`async`) because it will use `await` to handle asynchronous operations like connecting to the database and starting the server.

2. **Try-Catch Block**:
   - The function uses a `try...catch` block for error handling. If any error occurs within the `try` block, it will be caught and handled in the `catch` block.

3. **Mongoose Connection**:
   - `await mongoose.connect("mongodb+srv://...");`
   - This is where Mongoose is used to connect to a MongoDB database.
   - The `connect` method is an asynchronous operation, thus it's prefixed with `await` to ensure the execution waits until the connection is established.
   - The connection string (URL) includes the following:
     - **Protocol**: `mongodb+srv://` - This indicates a connection string for MongoDB's cloud service, Atlas.
     - **Credentials**: `kevin:kevin` - These are the username and password for the database. In a production environment, these should be stored securely and not hard-coded.
     - **Host and Database**: `training.1ptmm9u.mongodb.net` - The host address of your MongoDB database.
     - **Query Parameters**: `?retryWrites=true&w=majority` - Additional options for the connection. `retryWrites=true` enables automatic retry of write operations. `w=majority` sets the write concern to "majority", ensuring write operations are acknowledged by the majority of replica set members.

4. **Starting the Server**:
   - `app.listen(port, () => {...});`
   - Once the database connection is successfully established, the Express application starts listening on the specified `port`.
   - The callback function logs a message indicating the server is running.

5. **Error Handling**:
   - `catch (error) { console.error(error); }`
   - If there's an error during the connection process or starting the server, it's caught here and logged to the console.

6. **Executing the Function**:
   - `startup();`
   - This line calls the `startup` function, initiating the connection to the database and the starting of the server.

### Summary
This code handles the startup process for a Node.js application with a MongoDB database backend. It establishes a database connection using Mongoose and starts the server only after ensuring the database connection is successful. The use of `async/await` and error handling with `try...catch` makes the code clean and robust.

## Updating the Model

`users.model.ts` is a Node.js module that uses Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment, to define a model for a `User`. Let's break down the key components of this file:

### Import Statements

1. **Mongoose and its Components**:
   - `import mongoose, { Schema, Document } from "mongoose";`
   - This line imports Mongoose and some of its components (`Schema` and `Document`) that are used to define schemas and types.

### User Interface

1. **User Interface**:
   - `export interface User extends Document { ... }`
   - This TypeScript interface extends Mongoose's `Document`, representing a MongoDB document with added properties and methods.
   - It defines the shape of a user document with fields: `name`, `location`, and an optional `role`.

### User Schema Definition

1. **UserSchema**:
   - `const UserSchema: Schema = new Schema({ ... });`
   - A new schema for users is defined using Mongoose's `Schema` class.
   - The schema specifies the fields `name`, `location`, and `role`, including their types and other options like `required` and `unique`.

### Pre-save Hook

1. **Pre-save Middleware**:
   - `UserSchema.pre("save", function (doc, next) { ... });`
   - This is a pre-save hook, a type of middleware in Mongoose that is executed before a document is saved to the database.
   - The function checks if the current document's `etag` (a field not defined in the provided code, presumably used for versioning or concurrency control) differs from the most recent version of the document in the database. If they are different, an error should be thrown (though the actual error throwing is not implemented in the provided snippet).

### UserModel

1. **UserModel**:
   - `const UserModel = mongoose.model<User>("User", UserSchema);`
   - This line creates a Mongoose model named `"User"` using the `UserSchema`. The model is genericized with the `User` interface, ensuring that documents created from this model will conform to the `User` interface structure.
   - The `UserModel` will be used to create and manage documents in the MongoDB database's "users" collection.

### Export

1. **Default Export**:
   - `export default UserModel;`
   - This line exports `UserModel`, allowing it to be imported and used in other parts of the application to interact with the "users" collection in the database.

### Summary
`users.model.ts` defines a Mongoose model for a user, which includes the schema definition, a pre-save hook for additional logic before saving a document, and the creation of a model that can be used for CRUD (Create, Read, Update, Delete) operations in a MongoDB database. The use of TypeScript adds type safety and clarity to the structure of user documents.

## Update the controller

`users.controller.ts` contains a collection of Express route handler functions and a custom error class, primarily for performing CRUD (Create, Read, Update, Delete) operations on user data using Mongoose, a MongoDB object modeling tool. Let's break down each part of the file:

### Import Statements

- **Express Types**: 
  - `import { Response, Request } from "express";` imports the `Request` and `Response` types from Express, which are used to define the types of the request and response objects in the route handlers.

- **User Model**: 
  - `import UserModel from "./users.model";` imports the `UserModel`, which is a Mongoose model representing the users collection in the MongoDB database.

### Custom Error Class: NotFound

- **NotFound Class**: 
  - `export class NotFound extends Error { ... }` is a custom error class that extends the native JavaScript `Error` class.
  - It's designed to handle "not found" error cases, such as when a user is not found in the database. It includes an additional `resource` property to specify what resource was not found.

### Route Handler Functions

Each function is an async function that handles a specific route in your Express application:

1. **getAllUsers**: 
   - Retrieves all users from the database using `UserModel.find()`.
   - Sends the retrieved users in the response.

2. **createNewUser**: 
   - Extracts user data (`name`, `location`, `role`) from the request body.
   - Checks for the presence of required fields (`name`, `location`). If missing, it sends a 400 error response.
   - Saves the new user to the database and sends back the created user data with a 201 status code.

3. **getUserById**: 
   - Retrieves a user by their ID using `UserModel.findById()`.
   - If the user is not found, it passes a `NotFound` error to the next middleware.

4. **updateUserById**: 
   - Updates a user's information based on their ID using `UserModel.findByIdAndUpdate()`.
   - If the user is not found, it passes a `NotFound` error to the next middleware.
   - Sends the updated user data in the response.

5. **deleteUser**: 
   - Deletes a user by their ID using `UserModel.findByIdAndDelete()`.
   - If the user is not found, it sends a 404 error response.
   - Sends a 204 status code (No Content) to indicate successful deletion.

### Error Handling

- In each function, a `try...catch` block is used for error handling.
- If an error occurs during database operations, it logs the error and sends a 400 status code with an error message.
- In `createNewUser`, `getUserById`, and `updateUserById`, the `next` function is called with the error, which passes it to the next error handling middleware in Express.

### Summary

This file demonstrates a structured approach to building an Express API that interacts with a MongoDB database. The use of async/await syntax for handling asynchronous database operations, combined with structured error handling and custom error classes, provides a robust foundation for CRUD operations on user data.