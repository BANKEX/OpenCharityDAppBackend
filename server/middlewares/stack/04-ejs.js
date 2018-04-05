import render from 'koa-ejs';
import { DIRS } from 'configuration';
import path from 'path';

const publicDIR = path.resolve(__dirname, '../../../', DIRS.public);
const options = {
  root: publicDIR,
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false,
};

export default (app) => render(app, options);
