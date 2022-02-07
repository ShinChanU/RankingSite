const Router = require('@koa/router');
const puppeteer = require('puppeteer');

const api = new Router();

api.get('/test', (ctx, next) => {
  // ctx.body = 'GET ' + ctx.request.path;
  ctx.body = 'test';

  (async() => {
    const browser = await puppeteer.launch({
      headless: false
    });

  })();
});

module.exports = api;