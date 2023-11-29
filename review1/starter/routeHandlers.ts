// routeHandlers.ts
import { IncomingMessage, ServerResponse } from "http";
import * as fs from "fs";
import * as querystring from "querystring";
import { homepageHTML, aboutHTML } from "./htmlTemplates";

export const handleRoot = (req: IncomingMessage, res: ServerResponse) => {
  const shoutOutMessage = process.argv[2] || "";
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(homepageHTML(shoutOutMessage));
};

export const handleAbout = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(aboutHTML);
};

export const handleContact = (req: IncomingMessage, res: ServerResponse) => {
  // Implementation of contact handling...
};

// Add more handlers as needed...
