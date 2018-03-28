import cors from '@koa/cors';
import { CORS } from 'configuration';

const whitelist = CORS;

const checkOriginAgainstWhitelist = (ctx) => {
  const requestOrigin = ctx.accept.headers.origin;
  if (!whitelist.includes(requestOrigin)) {
    return ctx.throw(`${requestOrigin} is not a valid origin`);
  }
  return requestOrigin;
};

const options = {
  origin: (whitelist == '*') ? '*' : checkOriginAgainstWhitelist,
};

export default (app) => {
  app.use(cors(options));
};
