import favicon from 'koa-favicon';
import {DIRS} from 'configuration';
import path from 'path';

export default (app) => {
  const publicDIR = path.resolve(__dirname, '../../../', DIRS.public);
  app.use(favicon(publicDIR + 'favicon.png'));
};
