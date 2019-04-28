import Hapi from 'hapi';
import mongoose from 'mongoose';

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: '0.0.0.0'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Ran, the world is yours!';
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
