import assert from "node:assert";

export function greet(name: string) {
  if (typeof name !== "string") {
    throw new Error("Must be string.");
  }
  return `Hello ${name}`;
}

/**
 * e2e
 * 	- Selenium
 *  - Cyprus
 *  - Puppeteer
 *
 * integration/unit
 * 	- Jest
 *  - Mocha
 *  - Tap
 *
 * - Code coverage
 * - PR -> 1 test
 * - Unit -> supertest
 *
 * Static Testing
 *  - linting
 *	- squigglies
    - type system
 */
const location = "Northern Ireland";
