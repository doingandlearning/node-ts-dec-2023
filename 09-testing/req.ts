export function request(
  url: string,
  cb: (err: Error | null, data: Buffer | null) => void
) {
  setTimeout(() => {
    if (url === "http://error.com") cb(Error("network error"));
    else cb(null, Buffer.from("some data"));
  }, 300);
}
