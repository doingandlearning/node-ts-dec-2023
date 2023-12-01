import pino from "pino";
const logger = pino();
function doTask(amount: number) {
  if (typeof amount != "number") {
    throw new TypeError("Must be a number");
  }
  if (amount % 2 !== 0) {
    throw new RangeError("must be even");
  }
  return amount / 2;
}

try {
  console.log(doTask(1));
} catch (error) {
  if (error instanceof RangeError) {
    logger.info("Someone tried to use it with an even number");
    doTask(2);
  } else {
    logger.fatal(error);
  }
}

class CompaniesHouseAPIError extends Error {
  constructor(name: string, public code: string = "API_ERROR") {
    super(name);
  }
}

try {
  throw new CompaniesHouseAPIError(
    "Something went wrong",
    "URGENT_API_PROBLEM"
  );
} catch (error) {
  if (
    error instanceof CompaniesHouseAPIError &&
    error.code === "URGENT_API_PROBLEM"
  ) {
    // email oncall
    // webhook
    logger.error(error);
  } else {
    throw error;
  }
}

// function httpApi
