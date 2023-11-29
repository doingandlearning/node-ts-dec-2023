# --check (-c) to check the syntax
- The --check or -c flag in Node.js is used to check the syntax of a given file without executing it.
- It's a useful tool for quickly validating whether the JavaScript code has any syntax errors.
- This can be particularly helpful in development environments or as part of a testing or build process.
- Example usage: `node --check script.js` or `node -c script.js`.

# --eval (-e) / --print (-p)

- The --eval (or -e) flag allows you to execute code passed in as a string directly from the command line.
- This is useful for small snippets of code or for testing purposes.
- Example usage: `node -e "console.log('Hello World!')"`.
- The --print (or -p) flag is similar but also prints the result of evaluating the expression to the console.
- Example usage: `node -p "7 + 3"`.

# --require / -r - will preload anything you pass it!

- The --stack-trace-limit=n option sets the number of stack frames shown in a stack trace.
- By default, Node.js shows 10 frames. You can increase or decrease this number using this flag.
- This is particularly useful for debugging, as it allows you to see more (or fewer) details about the error stack.
- Example: `node --stack-trace-limit=100 script.js` will show up to 100 stack frames in a trace.
- Note that setting a very high number might impact performance during error handling.

# --stack-trace-limit=n

- The --stack-trace-limit=n option in Node.js is used to control the number of stack frames displayed when an exception occurs.
- By default, Node.js may limit the stack trace to a certain number of lines. This can sometimes make debugging challenging, especially in complex applications where the error might be deeply nested.
- By using --stack-trace-limit=n, you can set this limit to n stack frames. Setting n to a higher number can be helpful in tracing the root cause of errors.
- It's particularly useful when dealing with asynchronous code or when using many nested function calls.
- Keep in mind that increasing the stack trace limit may result in more verbose output and can potentially make the output harder to read if set too high.
- Example usage: node --stack-trace-limit=20 script.js would show up to 20 stack frames in the event of an error.
- Adjusting the stack trace limit is a balancing act - you'll want enough information to debug issues effectively, but not so much that the output becomes overwhelming.
- This option is a valuable tool for debugging in Node.js, allowing developers to gain deeper insights into the call stack when errors occur.


# Setting options with system environment variables

Node will look for a number of globally set environment variables on startup.

These can be found [here](https://nodejs.org/api/cli.html#environment-variables).

![](https://res.cloudinary.com/kc-cloud/image/upload/f_auto,q_auto/v1/raycast-uploads/hnxmswp2m8vzwr8ianvw) 

The NODE_OPTIONS is where you might programatically persist options across sessions

In a Mac/Linux environment this is likely to be done in your `.bashrc`, `.zshrc` or equivalent:

```bash
set NODE_OPTIONS=--inspect
```

If it has a space the value should be in quotes:

```bash
NODE_OPTIONS='--require "./my path/file.js"'
```

Having looked at the currently supported options (https://nodejs.org/api/cli.html#node_optionsoptions), it looks like `--stack-trace-limit` is not included as a valid option. However, `--stack-trace-limit` is technically a V8 Option and is allowed:

![allowed v8 options](https://res.cloudinary.com/kc-cloud/image/upload/f_auto,q_auto/v1/raycast-uploads/duia4q9bl8iupcdytncg)