import fs from "node:fs/promises";

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

// What is a promise?

// a guarantee of a response ...
// something more reliable ...
// Java Future - Super Promise!

// pending or settled

// waiters
// -> pending
// -> resolved - rejected (settled)

fs.readFile("./user.json", "utf8")
  .then((userData) => {
    const user: User = JSON.parse(userData);
    return fs.readFile("./regions.json", "utf8").then((regionsData) => ({
      user,
      regionsData,
    }));
  })
  .then(({ user, regionsData }) => {
    const regions: Regions = JSON.parse(regionsData);
    const userRegionNewsIDs = regions[user.region];
    return fs.readFile("./news.json", "utf8").then((newsData) => ({
      userRegionNewsIDs,
      newsData,
    }));
  })
  .then(({ userRegionNewsIDs, newsData }) => {
    const allNews: NewsArticle[] = JSON.parse(newsData);
    const userNews = allNews.filter((article) =>
      userRegionNewsIDs.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("-----");
    });
  });

Promise.all([
  fs.readFile("./users.json", "utf8"),
  fs.readFile("./regions.json", "utf8"),
  fs.readFile("./news.json", "utf8"),
])
  .then(([userData, regionsData, newsData]) => {
    const user: User = JSON.parse(userData);
    const regions: Regions = JSON.parse(regionsData);
    const news: NewsArticle[] = JSON.parse(newsData);

    const userRegionNewsIDs = regions[user.region];
    const userNews = news.filter((article) =>
      userRegionNewsIDs.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("-----");
    });
  })
  .catch((error) => console.log(error));

// Timeout ??

// BBC, Bing, Google

// Promise.race([]).then()

// No! Not cancellable ...
