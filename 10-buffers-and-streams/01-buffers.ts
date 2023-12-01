import fs from "node:fs/promises";

const buffer = Buffer.from("This is a string");

async function run() {
  const contents = await fs.readFile("./package.json");
  console.log(Buffer.from(contents.toJSON()));
}

run();
