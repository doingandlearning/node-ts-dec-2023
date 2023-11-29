// const http = require("node:http"); CommonJS
import http, { IncomingMessage, ServerResponse } from "node:http"; // ESM
import url from "node:url";

http
  .createServer((req: IncomingMessage, res: ServerResponse) => {
    const path = url.parse(req.url as string, true).pathname;
    let status = 200;
    let response: string;
    if (path === "/favicon.ico") {
      return res.end();
    } else if (path === "/") {
      response = "Home page";
    } else if (path === "/about") {
      response = "About page";
    } else {
      response = "Not found";
      status = 404;
    }
    res.writeHead(status, { "Content-Type": "text/html" });
    res.write(`<h1>${response}</h1>`);
    res.end();
  })
  .listen(3000);

// tsx watch filename
// tsx --watch filename
