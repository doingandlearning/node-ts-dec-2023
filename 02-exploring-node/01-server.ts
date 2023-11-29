// const http = require("node:http"); CommonJS
import http, { IncomingMessage, ServerResponse } from "node:http"; // ESM

http
  .createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Node.js!!!! :) </h1>");
    res.end();
  })
  .listen(3000);

// tsx watch filename
// tsx --watch filename
