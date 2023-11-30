import { fakeFetch } from "./req-promise";

test("responds with data", async () => {
  // Arrange/Act
  const data = await fakeFetch("http://exaple.com");

  // Assert

  expect(Buffer.isBuffer(data)).toBe(true);
  expect(data).toStrictEqual(Buffer.from("some data"));
});

test("handles network error", async () => {
  expect(() => fakeFetch("http://error.com")).rejects.toStrictEqual(
    Error("network error")
  );
});
