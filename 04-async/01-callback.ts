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

// Callback hell

fs.readFile("./user.json", "utf8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }
  const user: User = JSON.parse(userData);
  fs.readFile(
    "./regions.json",
    "utf8",
    (error: Error | null, regionsData: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const regions: Regions = JSON.parse(regionsData);
      const userRegionsIDs = regions[user.region];
      fs.readFile(
        "./news.json",
        "utf8",
        (error: Error | null, newsData: string) => {
          if (error) {
            console.log(error);
            return;
          }
          const allNews: NewsArticle[] = JSON.parse(newsData);
          const userNews = allNews.filter((article) =>
            userRegionsIDs.includes(article.id)
          );

          userNews.forEach((news) => {
            console.log(news.headline);
            console.log(news.content);
            console.log("---");
          });
        }
      );
    }
  );
});
