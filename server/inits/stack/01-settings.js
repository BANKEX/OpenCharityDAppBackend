import fs from 'fs';
import { DIRS } from 'configuration';

export default () => {
  if (!fs.existsSync(DIRS.settings)) fs.mkdirSync(DIRS.settings);
};
