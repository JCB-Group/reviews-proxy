const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const port = 3005;

app.use(express.static(__dirname + '/../dist/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.all('/reviews', (req, res) => {
  console.log("redirecting to reviews");
  console.log(req.params.id);
  apiProxy.web(req, res, {target: 'http://localhost:3004'});
});

app.all('/search', (req, res) => {
  console.log("redirecting to reviews");
  apiProxy.web(req, res, {target: 'http://localhost:3004'});
});

// app.all('/descriptions', (req, res) => {
//   console.log("redirecting to descriptions");
//   apiProxy.web(req, res, {target: 'http://localhost:3001'})
// });

app.all('/rooms/dates', (req, res) => {
  console.log("redirecting to checkout");
  apiProxy.web(req, res, {target: 'http://localhost:3002'});
});
