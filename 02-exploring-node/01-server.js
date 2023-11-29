"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require("node:http"); CommonJS
const node_http_1 = __importDefault(require("node:http")); // ESM
node_http_1.default
    .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Node.js!!!! :) </h1>");
    res.end();
})
    .listen(3000);
// tsx watch filename
// tsx --watch filename
