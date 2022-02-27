import Router from '@koa/router';
import posts from './posts';

// const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

// const crawling = async (url) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(`https://www.statshow.com/www/${url}/`);
//   const pageData = await page.evaluate(() => {
//     return {
//       html: document.documentElement.innerHTML,
//     };
//   });

//   const $ = cheerio.load(pageData.html);
//   let data = {
//     // 초기 data
//     Daily: {
//       pageViews: '',
//       visitors: '',
//     },
//     Monthly: {
//       pageViews: '',
//       visitors: '',
//     },
//     Yearly: {
//       pageViews: '',
//       visitors: '',
//     },
//   };
//   const periods = ['Daily', 'Monthly', 'Yearly'];
//   const divisions = ['pageViews', 'visitors'];
//   $('.worth_left_box div').each(function (index) {
//     if (index >= 4) {
//       let key = periods[index - 4];
//       let arr = $(this).text().split(`${key}`);
//       for (let i = 1; i < 3; i++) {
//         data[key][divisions[i - 1]] = arr[i].split(': ')[1]; // data에 데이터 입력 부분
//       }
//     }
//   });

//   return data;

//   // const content = await page.content();
//   // await printConsole(content);
//   // await browser.close();
// };

// 크롤링 파트

// api.get('/data/:id', (ctx, next) => {
//   console.log(ctx.params.id);
//   const test = crawling(ctx.params.id);
// }).then(() => console.log());

export default api;
