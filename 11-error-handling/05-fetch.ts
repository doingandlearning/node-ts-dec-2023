const fetchWithRetry = async (url: string, retryCount: number = 3) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      if (retryCount > 0) {
        console.log(`Retrying ... attempts left: ${retryCount}`);
        fetchWithRetry(url, retryCount - 1);
      } else {
        console.error(`Max retries reached. Operation failed: ${error}`);
      }
    });
};

fetchWithRetry("https://api.github.com", 3).then((response) =>
  console.log(response)
);
