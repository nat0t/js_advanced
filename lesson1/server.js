const path = require('path');
const http = require('http');
const fs = require('fs');

const dir = path.join(__dirname, 'public');
const mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

const server = http.createServer((req, res) => {
  // console.log(req.url);
  const reqpath = req.url.toString();
  const file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
  const type = mime[path.extname(file).slice(1)] || 'text/plain';
  const s = fs.createReadStream(file);
  s.on('open', () => {
    res.setHeader('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', () => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end('Not found');
  });
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log(`Server started on port ${port}!`);