Tasks:
1. Environment Variable Configuration:

Modify the .env file to include a custom message for the homepage.
Update the server code to read and display this message on the homepage.

2. Dynamic About Page:

Extend the '/about' route to accept query parameters (e.g., name and skill).
Modify the About page to dynamically display these parameters.

3. Contact Form Enhancement:

Add error handling for the POST request in the '/contact' route.
Implement a feature to notify the user (on the webpage) when their message has been successfully saved.

4. Creating a New Route:

Add a new route '/portfolio' that displays a list of projects (use placeholder data).
Include navigation links on all pages to easily navigate between Home, About, Contact, and Portfolio.

5. Styling with CSS:

Create a CSS file to style the HTML pages.
Link this CSS file in the HTML headers of each page.

6. Refactoring:

Refactor the server code to use Express.js for better routing and handling of static files.
Ensure all existing functionality works with the new framework.

7. Adding Logging:

Implement logging for each request to the server, including the path accessed and the HTTP method used.
Save these logs to a file named 'access.log'.