import { DIRS } from 'configuration';
import fs from 'fs';
import AppError from '../../utils/AppErrors.js';

const setOrganizationList = async (ctx) => {
  if (ctx.request.header['content-type']!='application/json' &&
    ctx.request.header['content-type']!='application/x-www-form-urlencoded') throw new AppError(400, 10);
  if (!ctx.request.body.list || ctx.request.body.type===undefined || !ctx.request.body.abis) throw new AppError(406, 601);
  const list = ctx.request.body.list;
  const type = Number(ctx.request.body.type);
  const abis = ctx.request.body.abis;
  if (!Array.isArray(list) ||
    !(type==0 || type==-1) ||
    !abis.Organization ||
    !abis.CharityEvent ||
    !abis.IncomingDonation ||
    !abis.OpenCharityToken
  ) throw new AppError(406, 600);

  const listObject = { list, type, abis };
  const path = DIRS.settings+type+'.json';
  if (fs.existsSync(path)) delete require.cache[require.resolve(path)];
  fs.writeFileSync(path, JSON.stringify(listObject));
  ctx.body = 'Ok';
};

const getOrganizationList = async (ctx) => {
  const type = Number(ctx.params.type);
  if (type!=0 && type!=-1) throw new AppError(406, 600);
  const path = DIRS.settings+type+'.json';
  ctx.body = require(path);
};

export default {
  setOrganizationList,
  getOrganizationList,
};
