import Koa from 'koa';
import inits from 'inits';
import middlewares from 'middlewares';
import pages from 'pages';
import modules from 'modules';

const app = new Koa();
const start = async () => {
  await inits();
  middlewares(app);
  app.use(modules);
  app.use(pages);
};

setTimeout(start, 1000);

export default app;
