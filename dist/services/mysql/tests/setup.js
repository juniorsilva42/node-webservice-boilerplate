'use strict';

var mysqlServer = require('mysql');
var dotenv = require('dotenv').config();

var connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_TEST_DATABASE
});

var errorHandler = function errorHandler(error, msg, rejectFunction) {
  console.log(error);
  rejectFunction({ error: msg });
};

module.exports = { connection: connection, errorHandler: errorHandler };