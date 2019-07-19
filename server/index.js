const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();
const port = 3005;

//could use axios.create({}) to name variables for each url up here
//then inside my proxy endpoints, i send HTTP requests to those variables at
//given ID endpoints using req.param.id (or whatever i choose to name the url param)

app.use(express.static(__dirname + '/../dist/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.all('/reviews', (req, res) => {
  console.log("redirecting to reviews");
  apiProxy.web(req, res, {target: 'http://18.216.135.250/'});
});

app.all('/search', (req, res) => {
  console.log("redirecting to reviews");
  apiProxy.web(req, res, {target: 'http://18.216.135.250/'});
});

app.all('/getData', (req, res) => {
  console.log("redirecting to descriptions");
  apiProxy.web(req, res, {target: 'http://13.57.28.138/'})
});

app.all('/rooms/dates', (req, res) => {
  console.log("redirecting to checkout");
  apiProxy.web(req, res, {target: 'http://52.53.207.70/'});
});
