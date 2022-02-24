import Router from '@koa/router';
import * as postCtrl from './posts.ctrl';

const posts = new Router();

posts.post('/', postCtrl.write);

export default posts;
