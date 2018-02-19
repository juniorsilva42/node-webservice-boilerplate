'use strict';

var corsMiddleware = require('restify-cors-middleware');

var cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
});

module.exports = cors;