const logger = require("pino")();
const { greeting } = require("./exports")


logger.info("Hello")

logger.info(__dirname)
logger.info(__filename)

// console.log(module)

greeting("Mohit!")

// 