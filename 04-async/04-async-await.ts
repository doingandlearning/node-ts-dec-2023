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

async function printNews() {
  try {
    const [userData, regionsData, newsData] = await Promise.all([
      fs.readFile("./user.json", "utf8"),
      fs.readFile("./regions.json", "utf8"),
      fs.readFile("./news.json", "utf8"),
    ])
      .catch()
      .finally();

    // Promise.allSettled([])

    const user: User = JSON.parse(userData);
    const regions: Regions = JSON.parse(regionsData);
    const news: NewsArticle[] = JSON.parse(newsData);

    // // Read and parse the user data
    // const userDataString = await fs.readFile("./user.json", "utf8");
    // const user: User = JSON.parse(userDataString);

    // // Read and parse the regions data
    // const regionsDataString = await fs.readFile("./regions.json", "utf8");
    // const regions: Regions = JSON.parse(regionsDataString);
    // const userRegionNewsIDs = regions[user.region];

    // // Read and parse the news data
    // const newsDataString = await fs.readFile("./news.json", "utf8");
    // const news: NewsArticle[] = JSON.parse(newsDataString);

    const userRegionNewsIDs = regions[user.region];
    const userNews = news.filter((article) =>
      userRegionNewsIDs.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("-----");
    });
  } catch (error) {
    console.log(error);
  } finally {
    // clean up logic!
  }
}
printNews();
