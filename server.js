'use strict';

const express = require('express');
const path = require('path');
const PORT = 3000;

// MIDDLEWARE
const bodyParser = require('body-parser');

// ROUTES GO HERE
const example = require('./routes/example');

const app = express();

app.disable('x-powered-by');

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/api', example);

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// error catch all 400
app.use((_req, res, _next) => {
  res.sendStatus(404);
});

// server error handler
app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'plain/text')
      .send(err.message);
  }

  console.error(err);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log('Served fresh daily on PORT', PORT);
});

module.exports = app;
