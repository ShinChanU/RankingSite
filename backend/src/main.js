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

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log(e);
  });

crawling('naver.com')
  .then((dataObj) => {
    saveResults(dataObj);
  })
  .catch(console.error);

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

// 0227
// 현 상황
// /api/posts/url로 { "url": "naver.com"} 으로 json, post 신호를 보내면 콘솔창으로 크롤링결과 출력까지 해봄
// 해야할것
// [주소 배열] 20개 정도, /api/posts/url/all 로 post 신호 전송시,
// 주소배열 1부터, 크롤링함수를 실행해서 mongodb 컬렉션에 적재를 함(/api/posts/url)
// 크롤링하는 시간이 있기 때문에, 신호를 보내고 완료가될때까지 기다리는건지,, 비동기식으로 처리를 할 수 있는지 고민..

/*
0301
종이에 그림을 그려가면서 다시 해보자
해야할것
  웹서버를 열고 -> postman or 자동 or 웹페이지(event) 로 post api를 전송(이때 post에는 데이터를 스크랩할 웹사이트의 주소(url)만 담아서)
  -> post 신호를 받으면 crawling 함수를 실행 (return 값은 daily, monthly, yearly ... 객체)
  -> 위 함수가 끝나면 (.then()) mongoose model에 스키마형식에 맞추서 mongodb에 save
  (여기에서 크롤링으로 얻은 data는 스키마에서 visitorDataSchema에 해당), name, url은 알고, ranking은 아직
  -> 함수로 얻은 데이터를 visitorDataSchema에 넣고 webSiteSchema를 만들어야하는지.. 학교 수업 자료 참고해야할듯.
*/
