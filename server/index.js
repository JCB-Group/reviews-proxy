const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const port = 3005;

app.use(express.static(__dirname + '/../dist/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.all('/reviews', (req, res) => {
  console.log("redirecting to reviews");
  apiProxy.web(req, res, {target: 'http://localhost:3000'});
});

app.all('/search', (req, res) => {
  console.log("redirecting to reviews");
  apiProxy.web(req, res, {target: 'http://localhost:3000'});
});
