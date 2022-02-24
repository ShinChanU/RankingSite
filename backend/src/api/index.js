// const Router = require('@koa/router');
import Router from '@koa/router';
import posts from './posts';
// import { Puppeteer } from 'puppeteer';
// import { Cheerio } from 'cheerio';
// const puppeteer = require('puppeteer');
// const cheerio = require('cheerio');
// const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

// 크롤링 파트
api.get('/data', async (ctx) => {
  // ctx.body = 'GET ' + ctx.request.path;
  ctx.body = {
    test: 'test',
  };

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.statshow.com/www/google.com/');
    const pageData = await page.evaluate(() => {
      return {
        html: document.documentElement.innerHTML,
      };
    });

    const $ = cheerio.load(pageData.html);
    let data = {
      // 초기 data
      Daily: {
        pageViews: '',
        visitors: '',
      },
      Monthly: {
        pageViews: '',
        visitors: '',
      },
      Yearly: {
        pageViews: '',
        visitors: '',
      },
    };
    const periods = ['Daily', 'Monthly', 'Yearly'];
    const divisions = ['pageViews', 'visitors'];
    $('.worth_left_box div').each(function (index) {
      if (index >= 4) {
        let key = periods[index - 4];
        let arr = $(this).text().split(`${key}`);
        for (let i = 1; i < 3; i++) {
          data[key][divisions[i - 1]] = arr[i].split(': ')[1]; // data에 데이터 입력 부분
        }
      }
    });
    console.log(data);

    // const content = await page.content();

    // await printConsole(content);

    // await browser.close();
  })();
});

export default api;

// const printConsole = async (content) => {
//   const $ = cheerio.load(content);

//   // // const Selector = '#box_1';
//   // console.log($);
//   // console.log($.data);

//   var idioms = [];
//   var links = [];
//   var listItems = $('ul.idiKw li a');
//   console.log(typeof listItems);
//   // .each(function(i, elem) {
//   //     idioms.push($(elem).text());
//   //     links.push("https://thefreedictionary.com/" + $(elem).attr("href"));
//   // });

//   // console.log(idioms);
//   // console.log(links);
//   // console.log(listItems);
// };

// module.exports = api;
// export default api;
