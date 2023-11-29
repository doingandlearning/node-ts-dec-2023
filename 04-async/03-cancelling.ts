// AbortController

const API_KEY = "0de6bc7ec1efaff74b56d2bab3b38f6e";

const url = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

console.log(url("cardiff"));

const ac = new AbortController();

fetch(url("cardiff"), { signal: ac.signal })
  .then((data) => data.json())
  .then((data) => console.log(data));

setTimeout(() => ac.abort(), 5);

new Promise((resolve, reject) => {
  // resolve()
  // reject()
});
