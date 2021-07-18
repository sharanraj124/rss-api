const Router = require('express').Router();
const api = require('../api');

Router

  .get('/', (req, res) => {
    res.send("rss feed")
  })
  .get('/search', api.getFeed);

module.exports = Router;