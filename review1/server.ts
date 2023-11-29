// server.ts
import * as http from "http";
import * as url from "url";
import dotenv from "dotenv";
import { handleRoot, handleAbout, handleContact } from "./routeHandlers";

dotenv.config();

const port: string | number = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const pathName = req.url ? url.parse(req.url).pathname : "/";

  switch (pathName) {
    case "/":
      handleRoot(req, res);
      break;
    case "/about":
      handleAbout(req, res);
      break;
    case "/contact":
      handleContact(req, res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
