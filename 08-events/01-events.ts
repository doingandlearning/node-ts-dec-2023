import { EventEmitter } from "node:events";

const ee = new EventEmitter();

const smileWithReason = (reason: string) => {
  console.log("I noticed you are smiling!", `Is it because ${reason}?`);
};
ee.on("smile", smileWithReason);
ee.once("smile", () => {
  console.log("Stop smiling!");
});

ee.prependListener("smile", () => console.log("i'm called first"));

ee.on("error", () => {
  console.log("something went wrong");
});

// ee.removeAllListeners("smile");
ee.removeListener("smile", smileWithReason);

ee.emit("smile", "It's almost Friday.");
ee.emit("smile", "It's almost time for coffee.");
ee.emit("smile", "It's warm indoors.");

ee.emit("crying");
ee.emit("error");
