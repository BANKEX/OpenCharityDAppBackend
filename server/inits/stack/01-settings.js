import fs from 'fs';
import { DIRS } from 'configuration';
import path from 'path';

export default () => {
  const settingsDIR = path.resolve(__dirname, '../../../', DIRS.settings);
  if (!fs.existsSync(settingsDIR)) fs.mkdirSync(settingsDIR);
};
