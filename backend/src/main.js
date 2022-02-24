require('dotenv').config();
import Koa from 'koa';
import cors from '@koa/cors';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';

// eslint-disable-next-line no-undef
const { PORT, MONGO_URI } = process.env;

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());
app.use(cors());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

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
// 0214
// reference:  https://kb.objectrocket.com/mongo-db/how-to-create-a-web-scraper-with-mongoose-nodejs-axios-and-cheerio-part-2-221

// 0220
// data에 원하는 데이터를 담는 것에 성공함 이 데이터들을 DB에 저장해서 가공해서 사용하면 좋을 듯.
// 주소도 여러개를 사용할 수 있게 리팩토링 필요

// 0224 /api/posts 로 post 보내면 됨. models 형식에 맞춰서
// 이제 크롤링 함수를 정리해서, 먼저, 하나의 url으로 실행을 해서 DB에 넣는 작업 해보기
// 그 다음 배열에 여러 url을 넣어두고, 매일 데이터를 적재하도록 하자.
// 이벤트핸들러로 함수를 실행시킬지, 메서드를 사용해서 일정 주기로 넣을지는 고민해보자
// 데이터가 만들어지면 프론트 작업을 해보자.
