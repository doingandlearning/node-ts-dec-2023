"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.greeting = void 0;
function greeting(name) {
    console.log(`Hello ${name}`);
}
exports.greeting = greeting;
exports.PI = Math.PI;
function goodbye(name) {
    console.log(`Goodbye ${name}`);
}
exports.default = goodbye;
