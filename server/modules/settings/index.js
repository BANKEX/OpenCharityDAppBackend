import Router from 'koa-router';
import controller from './controller';

const router = new Router({ prefix: '/settings' });

router
  .post('/setOrganizationList', controller.setOrganizationList)
  .get('/getOrganizationList/:type', controller.getOrganizationList)
;

export default router.routes();
