var express = require('express');

var app = express();
app.options('*', cors()) // include before other routes
app.use(cors())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(8080, function () {
    console.log('CORS-enabled web server listening on port 5000')
  })
  