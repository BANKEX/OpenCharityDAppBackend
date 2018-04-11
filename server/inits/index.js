import setDIR from './stack/01-settings';
import mongo from './stack/02-mongo';
import syncro from './stack/03-dev-syncro';
import server from 'server';

export default async () => {
  return new Promise(async (resolve, reject) => {
    try {
      setDIR();
      await mongo();
      if (process.env.NODE_ENV == 'development') await syncro();
      resolve();
    } catch (e) {
      console.log(e);
      console.log('Server has been closed');
      server.close();
      reject();
    }
  });
};
