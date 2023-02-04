const axios = require("axios");
const cheerio = require("cheerio");

async function webScraping(url, selector) {
  let res = [];
  let html = await axios.get(url);
  let $ = cheerio.load(html.data);

  for (let v of $(selector)) {
    res.push($(v).text());
  }

  return res;
}

let url = "https://map.naver.com/v5/api/bookmark/sync";
let selector = "body > pre";

webScraping(url, selector).then((res) => {
  console.log(res);
});

export default webScraping;