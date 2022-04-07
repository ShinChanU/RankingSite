require('dotenv').config();
import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';
import crawling from './api/posts/crawling';
import saveResults from './api/posts/saveResult';

// eslint-disable-next-line no-undef
const { PORT, MONGO_URI } = process.env;

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// 핵심 로직
// data에 사이트정보가 담긴 배열 저장
// 각 사이트마다 crawling 함수를 실행해서 saveResults함수로 mongoDB 저장 // 0312
router.post('/api/data', async (ctx) => {
  ctx.body = 'Success';
  const { data } = ctx.request.body;
  console.log('test');
  // data.map((e) => {
  //   console.log(e.name, e.url);
  //   crawling(e.url)
  //     .then((dataObj) => saveResults(dataObj, e.name, e.url))
  //     .catch((e) => console.log(e));
  // });
  // ctx.body = 'test';
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`listen to port ${PORT}, 서버 가동 중`);
});

// https://www.statshow.com/
// reference:  https://kb.objectrocket.com/mongo-db/how-to-create-a-web-scraper-with-mongoose-nodejs-axios-and-cheerio-part-2-221
