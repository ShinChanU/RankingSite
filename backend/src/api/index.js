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

api.get('/data', async (ctx, next) => {
  // ctx.body = 'GET ' + ctx.request.path;
  ctx.body = {
    test: 'Asd',
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

module.exports = api;

// https://www.statshow.com/

// 0214
// reference:  https://kb.objectrocket.com/mongo-db/how-to-create-a-web-scraper-with-mongoose-nodejs-axios-and-cheerio-part-2-221
// 현재고민..
// async await 이슈.. 에러 콘솔로그 해결.. 위의 코드를 참고했던 블로그 부터확인
// $.(선택자) 로 받아와서 .each 사용인데 jQuery 를 꼭 사용해야하느지..
// $이 잘 작동하는지도 의문..

// 0220
// data에 원하는 데이터를 담는 것에 성공함 이 데이터들을 DB에 저장해서 가공해서 사용하면 좋을 듯.
// 주소도 여러개를 사용할 수 있게 리팩토링 필요
