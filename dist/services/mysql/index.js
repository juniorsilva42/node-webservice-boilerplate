'use strict';

var mysqlServer = require('mysql');

var connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

var errorHandler = function errorHandler(error, msg, rejectFunction) {
  console.log(error);
  rejectFunction({ error: msg });
};

var categoryModule = require('./categories')({ connection: connection, errorHandler: errorHandler });
var userModule = require('./users')({ connection: connection, errorHandler: errorHandler });

module.exports = {
  categories: function categories() {
    return categoryModule;
  },
  users: function users() {
    return userModule;
  }
};