const Hapi = require('@hapi/hapi');
const authRoutes = require('./routes/authRoutes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
  });

  server.route(authRoutes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
