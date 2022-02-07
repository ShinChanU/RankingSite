const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('@koa/router');
const api = require('./api');
const app = new Koa();
const router = new Router();
const port = 8080;

app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', (ctx, next) => {
  ctx.body = '홈';  
});

router.use('/api', api.routes());

app.listen(port, () => {
  console.log('listen to port 8080', '서버 가동 중');
});