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
  var listItems = $('ul.idiKw li a');
  console.log(typeof listItems);
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
    test: 'Asd',
  };

  (async () => {
    const browser = await puppeteer.launch({
      headless: false,
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: 800,
      height: 600,
    });
    await page.goto('https://www.statshow.com/www/naver.com');

    let data = await page.$('.worth_left_box');
    let evalData = await page.evaluate((element) => {
      return element.textContent;
    }, data);
    console.log(evalData);

    // let ehList = await page.$$('.worth_left_box');
    // console.log(ehList[0].childNodes);
    // for (let i = 0; i < ehList.length; i++) {
    //   let traffic = await ehList[i].$eval(`#box_${i + 1}`, (el) => {
    //     return el.innerText;
    //   });
    //   console.log(traffic);
    // }
    // // console.log(ehList);
    // ehList.map(async (eh, i) => {
    //   let index = i + 1;
    //   console.log(index);
    //   let traffic = await eh.$eval(`#box_${index}`, (el) => {
    //     return el.innerText;
    //   });

    //   console.log(traffic);
    // });

    // for (let eh of ehList) {
    //   let traffic = await eh.$eval('#box_1', (el) => {
    //     return el.innerText;
    //   });
    //   console.log(traffic);
    // }

    // box_1 : daily, box_2 : monthly, box_3 : yearly
    // #box_1 > span:nth-child(4) : daily PageViews
    // #box_1 > span:nth-child(6) : daily Visitors
    // #box_1 > span:nth-child(8) : daily Ads Revenue

    // #box_2 > span:nth-child(4) : monthly PageViews
    // #box_2 > span:nth-child(6) : monthly Visitors
    // #box_2 > span:nth-child(8) : monthly Ads Revenue

    // #box_3 > span:nth-child(4) : yearly PageViews
    // #box_3 > span:nth-child(6) : yearly Visitors
    // #box_3 > span:nth-child(8) : yearly Ads Revenue

    // const content = await page.content();

    // await printConsole(content);

    // await browser.close();
  })();
});

module.exports = api;

// https://www.statshow.com/
// 0214
// reference:  https://kb.objectrocket.com/mongo-db/how-to-create-a-web-scraper-with-mongoose-nodejs-axios-and-cheerio-part-2-221
// 현재고민..
// async await 이슈.. 에러 콘솔로그 해결.. 위의 코드를 참고했던 블로그 부터확인
// $.(선택자) 로 받아와서 .each 사용인데 jQuery 를 꼭 사용해야하느지..
// $이 잘 작동하는지도 의문..
