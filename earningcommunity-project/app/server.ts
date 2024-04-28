import fs from 'fs';
import https from 'https';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt'),
};

app.prepare().then(() => {
  https.createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(3000, (err?: Error) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:3000');
  });
});