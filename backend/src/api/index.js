const Router = require('@koa/router');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const api = new Router();

const printConsole = async (content) => {
  const $ = cheerio.load(content);

  // // const Selector = '#box_1';
  // console.log($);
  // console.log($.data);

  var idioms = [];
  var links = [];
  var listItems = $("ul.idiKw li a");
  console.log(typeof(listItems));
  // .each(function(i, elem) {
  //     idioms.push($(elem).text());
  //     links.push("https://thefreedictionary.com/" + $(elem).attr("href"));
  // });

  // console.log(idioms);
  // console.log(links);
  // console.log(listItems);
};

api.get('/data', (ctx, next) => {
  // ctx.body = 'GET ' + ctx.request.path;
  ctx.body = {
    test: "Asd"
  };

  (async() => {
    const browser = await puppeteer.launch({
      headless: false
    });

    const page = await browser.newPage();
    // await page.setViewport({
    //   width: 1500,
    //   height: 768
    // });
    await page.goto('https://idioms.thefreedictionary.com/light')

    const content = await page.content();

    await printConsole(content);

    // await browser.close();
  })();
});

module.exports = api;

// 0214 
// reference:  https://kb.objectrocket.com/mongo-db/how-to-create-a-web-scraper-with-mongoose-nodejs-axios-and-cheerio-part-2-221
// 현재고민..
// async await 이슈.. 에러 콘솔로그 해결.. 위의 코드를 참고했던 블로그 부터확인
// $.(선택자) 로 받아와서 .each 사용인데 jQuery 를 꼭 사용해야하느지..
// $이 잘 작동하는지도 의문..