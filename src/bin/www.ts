import app from '../app';
import config from '../config';

const port = config.server.port || 8090;

process.on('uncaughtException', function(err) {
  console.log(err.stack);
  console.log('NOT exit...');
});

app.listen(port);
console.log(`app started at port ${port}...`);