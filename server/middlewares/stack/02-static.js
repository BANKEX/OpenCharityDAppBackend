import serve from 'koa-static';
import {DIRS} from 'configuration';
import path from 'path';

export default (app) => {
  const publicDIR = path.resolve(__dirname, '../../../', DIRS.public);
  app.use(serve(publicDIR));
};
