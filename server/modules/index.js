import Router from 'koa-router';
import tag from './tag';
import source from './source';
import settings from './settings';

const router = new Router({ prefix: '/api' });

router
  .use(tag)
  .use(source)
  .use(settings);

export default router.routes();
