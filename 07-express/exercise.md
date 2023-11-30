### Activity 1: Implement CRUD for Tasks

Build upon your existing knowledge of creating CRUD operations for the `User` model by applying the same principles to a new `Task` model.

1. **Define the Task Model**: Create a TypeScript interface for the `Task` model in a new file called `task.model.ts`. A task should have an id, description, and a completion status.

```typescript
export interface Task {
  id: number;
  description: string;
  isComplete: boolean;
}
```

2. **Set Up Task Data Store**: Similar to the users, create an in-memory array to store tasks.

```typescript
import { Task } from '../models/task.model';

let tasks: Task[] = [];
let taskId = 0;

function getNewId() {
  return ++taskId
}
export { tasks, getNewId };
```

3. **Task Controller**: Create a new file `task.controller.ts` and implement functions for creating, retrieving, updating, and deleting tasks.

```typescript
// src/controllers/task.controller.ts
import { Request, Response } from 'express';
import { tasks, taskId } from '../data/tasks';

// Implement createTask, getAllTasks, getTaskById, updateTask, and deleteTask functions
```

4. **Task Routes**: Create a new file `task.routes.ts` and define routes for each of the task operations. Use the functions from your task controller.

```typescript
// src/routes/task.routes.ts
import { Router } from 'express';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/task.controller';

const router = Router();

router.post('/', createTask);
router.get('/', getAllTasks);

// router.route('/').get(getAllTasks).post(createTask)
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
```

5. **Integrate with the Application**: Import the task routes into your `app.ts` and mount them.

```typescript
// src/app.ts
import taskRoutes from './routes/task.routes';

// ... other imports and middleware ...

app.use('/api/tasks', taskRoutes);

// ... rest of the file ...
```

6. **Manual Testing**: Test your task routes manually using Postman or curl to ensure they work as expected.

### Activity 2: Add Validation and Error Handling Middleware

Enhance your application by ensuring the integrity of the data and handling errors gracefully.

1. **Input Validation Middleware**: Create a middleware function that validates the request body for creating or updating tasks and users. 

```typescript
// src/middleware/validateInput.ts
import { Request, Response, NextFunction } from 'express';

export function validateUserInput(req: Request, res: Response, next: NextFunction) {
  // Check for required fields in req.body and validate them
  // If validation fails, send a 400 response with an error message
  // If validation succeeds, call next()
}
```

2. **Enhanced Error Handling Middleware**: Modify your error handling middleware to provide more detailed error messages, including which fields are missing or incorrectly formatted.

```typescript
// src/middleware/errorHandler.ts
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  // Log the error and respond with a user-friendly message
  // Customize the response based on the type of error
}
```

3. **Utilize Middleware**: Apply your validation middleware to the relevant routes in `user.routes.ts` and `task.routes.ts`.

```typescript
// src/routes/user.routes.ts and src/routes/task.routes.ts
import { validateTaskInput } from '../middleware/validateInput';

router.post('/', validateUserInput, createTask);
router.put('/:id', validateUserInput, updateTask);

// ... other route handlers ...
```

4. **Test Your Middleware**: Write tests for your validation and error handling middleware to ensure they behave as expected. You can use `supertest` to simulate requests and test the responses.

By completing these activities, you will have a more robust application that not only performs CRUD operations on multiple resources but also validates input data and handles errors effectively.