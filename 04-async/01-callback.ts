import fs from "node:fs";

type User = {
  name: string;
  age: string;
  region: string;
};

type Regions = {
  [key: string]: string[];
};

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

fs.readFile("./users.json", "utf8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }
});
