"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const http = require("node:http"); CommonJS
const node_http_1 = __importDefault(require("node:http")); // ESM
const node_url_1 = __importDefault(require("node:url"));
node_http_1.default
    .createServer((req, res) => {
    const path = node_url_1.default.parse(req.url, true).pathname;
    let status = 200;
    let response;
    if (path === "/favicon.ico") {
        return res.end();
    }
    else if (path === "/") {
        response = "Home page";
    }
    else if (path === "/about") {
        response = "About page";
    }
    else {
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
