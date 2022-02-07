const Router = require('@koa/router');
const puppeteer = require('puppeteer');

const api = new Router();

api.get('/data', (ctx, next) => {
  // ctx.body = 'GET ' + ctx.request.path;
  ctx.body = {
    test: 
  };

  (async() => {
    const browser = await puppeteer.launch({
      headless: false
    });

    const page = await browser.newPage();
    await page.setViewport({
      width: 1500,
      height: 768
    });

    await page.goto('https://www.goodchoice.kr/product/search/2')
  })();
});

module.exports = api;