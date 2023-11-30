import pino from "pino";
import GoodbyeFunction, { greeting, PI } from "./exports.js";
const logger = pino();

console.time();
logger.info("Here I am!");
console.timeLog();

greeting("Gomathi!");
logger.warn(PI);
console.timeEnd();
GoodbyeFunction("Paul");

console.trace();

console.table({
  name: "Naz",
  location: "Cardiff",
  wantsToKnow: "Best Practices",
});

console.assert(
  typeof name === "string",
  "Was checking assert, expected something to be true"
);

console.count();
console.count();
