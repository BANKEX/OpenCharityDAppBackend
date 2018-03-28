import Router from 'koa-router';
import controller from './controller';

const router = new Router({ prefix: '/tag' });

router
  .post('/add', controller.add)
  .post('/del', controller.del)
  .post('/find', controller.find)
  .post('/edit', controller.edit)
  .get('/all', controller.all)
  .get('/all/:include', controller.all)
;

export default router.routes();
