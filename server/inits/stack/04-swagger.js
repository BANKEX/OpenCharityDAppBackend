import app from 'app';
import { ADDRESS } from 'configuration';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  info: {
    title: 'OpenCharity Backend API',
    version: '1.0.0',
    description: 'Backend API for OpenCharityDApp.',
  },
  host: ADDRESS.external,
  basePath: '/api',
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./server/modules/tag/index.js', './server/modules/settings/index.js'],
};

export default () => {
  app.state.swaggerSpec = swaggerJSDoc(options);
};
