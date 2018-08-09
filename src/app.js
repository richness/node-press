const http = require('http');
const conf = require('./config/defaultConfig');
const chalk = require('chalk');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('<html>');
  res.write('<body>');
  res.write('hello supervisor');
  res.write('</body>');
  res.end('</html>')
})

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.info(`Server start at ${chalk.red(addr)}`)
})