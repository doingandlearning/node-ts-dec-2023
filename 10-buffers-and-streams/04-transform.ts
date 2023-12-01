import { createReadStream, createWriteStream, read } from "fs";
import { Transform, TransformCallback, PassThrough } from "stream";
import { createGzip } from "node:zlib";

// open the text file
// get rid of the word test
// write the solution to a new file

const readStream = createReadStream("longtext.txt");
const writeStream = createWriteStream("no-test.txt.gz");

const transformStream = new Transform({
  store: [],
  transform(chunk: Buffer, encoding: string, callback: TransformCallback) {
    const result = chunk.toString().replaceAll("test", "");
    if (this.store.length < 3) {
      this.store.push(chunk);
      callback();
    } else {
      this.store();
      this.push(result);
    }
  },
});

const monitor = new PassThrough();

monitor.on("data", (chunk) => {
  const data = chunk.toString();
  console.log("Contains test?", data.includes("test"));
  throw new Error("Whoops!");
});

monitor.on("error", () => console.log("whoops!"));

readStream
  .pipe(transformStream)
  .pipe(monitor)
  .pipe(createGzip())
  .pipe(writeStream)
  .on("finish", () => {
    console.log("all done");
  })
  .on("error", () => console.log("something went wrong"));
