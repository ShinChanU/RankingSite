import Router from '@koa/router';
// import posts from './posts';
// const posts = require('./posts');

const api = new Router();

api.get('/test', (ctx) => {
  ctx.body = 'test 성공';
});

api.post('/data', async (ctx) => {
  ctx.body = 'Success';
  const { data } = ctx.request.body;
  console.log(data);
});

export default api;
