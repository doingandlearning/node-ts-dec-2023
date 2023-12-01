function applyToInteger(
  func: (x: number) => number,
  integer: number,
  callback
) {
  if (typeof func !== "function") {
    callback(new TypeError("The first parameter must be a function."));
  }
  callback(null, func(integer));
}

applyToInteger(
  (x) => 10 * x,
  10,
  (error, data) => {
    if (error) {
      console.log(error);
      // calling out to logging
      // SQS -> Database -> ///
      // rethrow
      throw error;
      //
    } else {
      console.log(data);
    }
  }
);

const newError = new Error("this is a message");
newError.code = "ERR_API_PROBLEM_12345";
console.log(newError.message);
console.log(newError.name);
console.log(newError.code);
