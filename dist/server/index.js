'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('./cors');

var _cors2 = _interopRequireDefault(_cors);

var _way = require('../libs/@threesoft/way');

var _way2 = _interopRequireDefault(_way);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _restify2.default.createServer();

server.pre(_cors2.default.preflight);
server.use(_cors2.default.actual);
server.use(_restify2.default.plugins.bodyParser());

/*
 *
 * Registra todas as rotas
 * 
*/
(0, _way2.default)(server, _path2.default.join(__dirname, '../http/routes'));

exports.default = server;