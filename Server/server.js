const http = require('http');
const fs = require('fs');
const port = 3228;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  fs.readFile('index.html', (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write('ERRORERRORERRORERRORERRORERRORERRORERROR');
    } else {
      res.write(data);
    }

    res.end();
  });
});

server.listen(port, (error) => {
  if (error) console.error('ERRORERRORERRORERRORERRORERRORERROR', error);
  else console.log(`Listening to ${port}.`);
});