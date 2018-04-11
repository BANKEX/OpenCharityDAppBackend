import rp from 'request-promise';
import fs from 'fs';
import { DIRS } from 'configuration';
import path from 'path';
import Tag from '../../modules/tag/model';
import Source from '../../modules/source/model';

rp.defaults({
  simple: false,
  resolveWithFullResponse: true,
  encoding: 'utf-8',
});

const options0 = {
  method: 'GET',
  uri: 'https://opencharity.staging.bankex.team/api/settings/getOrganizationList/0',
};
const options1 = {
  method: 'GET',
  uri: 'https://opencharity.staging.bankex.team/api/settings/getOrganizationList/-1',
};
/*
const optionsT = {
  method: 'GET',
  uri: 'https://opencharity.staging.bankex.team/api/tag/all',
};
const optionsS = {
  method: 'GET',
  uri: 'https://opencharity.staging.bankex.team/api/source/all',
};
*/

export default async () => {
  process.stdout.write('Syncro with stage...');
  const int = setInterval(() => process.stdout.write('.'), 200);
  try {
    const load0 = await rp(options0);
    fs.writeFileSync(path.join(DIRS.settings, '0.json'), load0);
    const load1 = await rp(options1);
    fs.writeFileSync(path.join(DIRS.settings, '-1.json'), load1);
    /*
    const loadT = JSON.parse(await rp(optionsT));
    await Tag.remove();
    console.log(loadT);
    await Tag.create(loadT);
    */
    clearInterval(int);
    process.stdout.write('done\n');
  } catch (e) {
    clearInterval(int);
    process.stdout.write('crashed\n');
    throw e;
  }
};
