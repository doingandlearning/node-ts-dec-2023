import pino from "pino";
import GoodbyeFunction, { greeting, PI } from "./exports.js";
const logger = pino()

logger.info("Here I am!")
greeting("Thomas")
greeting("Gomathi!")
greeting("Kevin")
logger.warn(PI)

GoodbyeFunction("Paul")