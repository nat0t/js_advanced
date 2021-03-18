// const path = require('path');
// const http = require('http');
// const fs = require('fs');

// // const dir = path.join(__dirname, 'public');
// const dir = __dirname;
// const mime = {
//   html: 'text/html',
//   txt: 'text/plain',
//   css: 'text/css',
//   gif: 'image/gif',
//   jpg: 'image/jpeg',
//   png: 'image/png',
//   svg: 'image/svg+xml',
//   js: 'application/javascript'
// };

// const server = http.createServer((req, res) => {
//   // console.log(req.url);
//   const reqpath = req.url.toString();
//   const file = path.join(dir, reqpath.replace(/\/$/, '/index.html'));
//   const type = mime[path.extname(file).slice(1)] || 'text/plain';
//   const s = fs.createReadStream(file);
//   s.on('open', () => {
//     res.setHeader('Content-Type', type);
//     s.pipe(res);
//   });
//   s.on('error', () => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.statusCode = 404;
//     res.end('Not found');
//   });
// });

// const port = process.env.PORT || 3000;
// server.listen(port);
// console.log(`Server started on port ${port}!`);

const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./'));
app.use(bodyParser.json());

app.get('/itemsList', (req, res) => {
  fs.readFile('./public/database/items.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/itemsList', (req, res) => {
  const offset = 0;
  const filePath = './public/database/items.json';
  fs.readFile(filePath, 'utf8', (err, data) => {
    const list = JSON.parse(data || {});
    const amountOfData = Object.keys(list).length;
    const newID = offset + amountOfData + 1;
    const newItem = req.body;
    newItem.id = newID;
    list[newID] = newItem;
    fs.writeFile(filePath, JSON.stringify(list), (err) => {
      if (err) {
        console.log(err);
      }
      res.send(list);
    })
  })
});

app.listen(4000, () => {
  console.log('Server started');
});