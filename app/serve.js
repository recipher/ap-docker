/* eslint-disable no-console */
const express = require('express');
const request = require('request');
const path = require('path');
const http = require('http');
const router = require('express').Router();

const proxy = host => {
  return (req, res) => {
    const url = host + req.url.replace(/^\/api/, '');
    req.pipe(request(url)).pipe(res);
  }
};

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

const apiHost = process.env.API_HOST || 'http://localhost:4200';

app.use('/api', proxy(apiHost));

router.get('*', (req, res) => {
  const route = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(route);
});

app.use('/', router);

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));