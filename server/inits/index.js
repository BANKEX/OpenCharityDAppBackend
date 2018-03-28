import setDIR from './stack/01-settings';
import mongo from './stack/02-mongo';
import server from 'server';

export default async () => {
  return new Promise(async (resolve, reject) => {
    try {
      setDIR();
      await mongo();
      resolve();
    } catch (e) {
      console.log(e);
      console.log('Server has been closed');
      server.close();
      reject();
    }
  });
};
