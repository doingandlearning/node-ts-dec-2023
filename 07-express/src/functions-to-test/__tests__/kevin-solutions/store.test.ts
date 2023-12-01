import store from "../../store";

test("should return an object with an id when given a Buffer", (done) => {
  const buffer = Buffer.from("Test data");
  store(buffer, (error, data) => {
    expect(error).toBe(null);
    expect(data?.id).toBeDefined();
    expect(typeof data?.id).toBe("string");
    expect(data?.id.length).toBe(4);
    done();
  });
});

test("should call the callback with an error when the input is not a Buffer", (done) => {
  const input = "Not a buffer";
  store(input as any, (error, data) => {
    if (error instanceof Error) {
      expect(error.message).toEqual("input must be a buffer");
      expect(data).not.toBeDefined();
      done();
    }
  });
});
