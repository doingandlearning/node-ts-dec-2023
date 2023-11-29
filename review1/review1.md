### Exercise: Complete the Refactoring and Add a New Route

#### Objective:
Refine the Node.js server by completing the refactoring process started earlier and add a new route to enhance its functionality.

#### Prerequisites:
- Basic understanding of Node.js, HTTP, and routing.
- Familiarity with JavaScript or TypeScript.
- Node.js environment set up for development.

Before you start, run `npm install` to install the dependencies used in the project.

#### Tasks:

1. **Complete the Refactoring**:
   - Ensure that all routes (`/`, `/about`, `/contact`) are managed by separate handler functions. (original in 02-exploring-node/student)
   - Modularize HTML templates used by these routes.
   - Place these handlers and templates in separate files (e.g., `routeHandlers.js` and `htmlTemplates.js`).

2. **Add a New Route - '/projects'**:
   - Create a new route handler for `/projects`.
   - This route should display a simple HTML page listing hypothetical projects or any content of your choice.
   - Ensure the page follows the same styling and layout conventions as the existing pages.

3. **Create HTML Template for '/projects'**:
   - In `htmlTemplates.js`, add a new function to generate the HTML for the projects page.
   - Use JavaScript to dynamically generate a list of projects.

4. **Update Navigation**:
   - Modify the HTML templates to include navigation links to all pages (Home, About, Contact, Projects).
   - Ensure these navigation links are present on every page for easy access.

5. **Implement Error Handling**:
   - In each route handler, add basic error handling to manage unexpected issues.
   - This could include try-catch blocks or checking for potential errors in request processing.

6. **Server Logging**:
   - Implement simple logging in the server. Log each request's URL path and method (GET, POST, etc.).
   - Optionally, log the timestamp of each request.

7. **Testing Your Server**:
   - Manually test your server by accessing each route in a web browser.
   - Check if navigation works correctly and all pages display the expected content.
   - Ensure that invalid routes (like `/nonexistent`) correctly display a 404 page.
