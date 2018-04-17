import config from 'config';
import path from 'path';

const ADDRESS = config.get('address');
const DIRS = {};
DIRS.main = path.resolve();
DIRS.public = path.resolve('public');
DIRS.settings = path.isAbsolute(config.get('dirs').settings) 
  ? config.get('dirs').settings 
  : path.resolve(config.get('dirs').settings);

const MONGO_URI = config.get('mongoURI');
const CORS = config.get('cors');
const TOKEN = config.get('token');

export {
  ADDRESS,
  DIRS,
  MONGO_URI,
  CORS,
  TOKEN,
};
