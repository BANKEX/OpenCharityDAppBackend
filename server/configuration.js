import config from 'config';

const ADDRESS = config.get('address');
const DIRS = config.get('dirs');
const MONGO_URI = config.get('mongoURI');
const META = config.get('metaServer');
const CORS = config.get('cors');

export {
  ADDRESS,
  DIRS,
  MONGO_URI,
  META,
  CORS,
};
