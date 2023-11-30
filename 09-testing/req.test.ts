import { request } from "./req";

test("responds with data", (done) => {
  request("http://not-an-error.com", (err, data) => {
    expect(err === null).toBe(true);
    expect(Buffer.isBuffer(data)).toBeTruthy();
    expect(data).toStrictEqual(Buffer.from("some data"));
    done();
  });
});

test("handles network errors", (done) => {
  request("http://error.com", (err, data) => {
    expect(err).toStrictEqual(Error("network error"));
    done();
  });
});
