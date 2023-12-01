import pino from "pino";
const logger = pino();
try {
  // do some work
  levelOne();
} catch (error) {
  // catch any problem here
  logger.fatal("Error from top-level catch!");
  process.exit(1);
} finally {
  // always do this
}

function levelOne() {
  levelTwo();
}

function levelTwo() {
  try {
    levelThree();
  } catch (error) {
    if (error instanceof RangeError) {
      logger.info("There was a problem - I've got it!");
      return;
    }
    throw error;
  }
}

function levelThree() {
  // RangeError();
  // TypeError();
  // SyntaxError();
  // URIError();
  // EvalError();
  // ReferenceError();

  throw new EvalError("An error has occurred!");
}
