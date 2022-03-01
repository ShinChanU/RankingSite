import Post from '../../models/posts';
import crawling from './crawling';
import saveResults from './saveResult';

/*
  /api/posts
  {
    name: "naver",
    url: "naver.com",
    visitorData: [{}],
    ranking: {},
  }
*/

export const write = async (ctx) => {
  const { name, url } = ctx.request.body;
  const post = new Post({
    // Post 인스턴스 생성
    name,
    url,
  });
  try {
    await post.save(); // db에 저장
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const write2 = async (ctx) => {
  // crawling(ctx)
  // .then(data => {
  //   saveResults(data);
  // }).catch(console.error);
  // const data = require('./crawling');
  // const post = new data();
  const { name, url, visitorData, ranking } = ctx.request.body;
  const post = new Post({
    // Post 인스턴스 생성
    name,
    url,
    visitorData,
    ranking,
  });
  try {
    await post.save(); // db에 저장
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
