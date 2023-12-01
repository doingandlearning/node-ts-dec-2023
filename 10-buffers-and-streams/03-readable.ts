import { createReadStream, read } from "fs";
import { EventEmitter } from "node:events";
import { Readable } from "node:stream";
import { ReadableOptions } from "stream";

const readStream = createReadStream("longtext.txt");

console.log(readStream instanceof EventEmitter);

// data
readStream.on("data", (chunk) => {
  console.log(chunk.length);
});
// end
readStream.on("end", () => {
  console.log("All done with the data!");
});

// close
readStream.on("close", () => {
  console.log("Close the file");
});
// error
readStream.on("error", (error) => {
  console.log("Something went wrong.", error.message);
});

class NumberStream extends Readable {
  current: number;
  max: number;
  constructor(max: number, options?: ReadableOptions) {
    super(options);
    this.current = 1;
    this.max = max;
  }

  _read() {
    const interval = setInterval(() => {
      if (this.current <= this.max) {
        console.log(`Pushing number: ${this.current}`);
        this.push(String(this.current));
        this.current += 1;
      } else {
        clearInterval(interval);
        this.push(null); // No more data
      }
    }, 1000); // Delay of 1 second between each push
  }
}

const CountDownReadable = new Readable({
  read() {
    setInterval(() => {
      this.push("Hello");
    }, 1000);
  },
});

const numberStream = new NumberStream(5);

numberStream.on("data", (chunk) => {});
CountDownReadable.on("data", (chunk) => console.log(chunk.toString()));
