const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

exports.start = function () {
  const app = express();
  app.use(serveStatic(path.join(__dirname, 'dist')));
  const port = parseInt(process.env.PORT, 10) || 8080;

  app.listen(port, function () {
    console.log('Server is up and running on port: ' + port);
  });
};
