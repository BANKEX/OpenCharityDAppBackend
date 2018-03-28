import { MONGO_URI } from 'configuration';
import mongooseConnector from '../../services/mongoose-connector.js';

export default async () => {
  process.stdout.write('MongoDB...');
  const int = setInterval(() => {
    process.stdout.write('.');
  }, 200);
  await mongooseConnector(MONGO_URI);
  clearInterval(int);
  process.stdout.write('connected');
  console.log('');
};
