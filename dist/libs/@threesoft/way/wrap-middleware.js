'use strict';

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * call a middleware
 * @method tryCatch
 * @param  {Function} fn
 * @return {Promise}
 */
var tryCatch = function tryCatch(fn) {
  try {
    return Promise.resolve(fn());
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 * @method sendError
 * @param  {ResponseRestify}  res response instance
 * @param  {Error}            e
 */
var sendError = function sendError(res, e) {
  var output = _boom2.default.boomify(e).output;
  res.send(output.statusCode, output);
};

/**
 * @method wrapMiddleware
 * @param  {Function}       middleware route middleware
 * @return {Function}
 */
var wrapMiddleware = function wrapMiddleware(middleware) {
  return function (req, res) {
    var handler = function handler() {
      return middleware(req, res);
    };
    tryCatch(handler).then(function (result) {
      res.json(result);
    }).catch(sendError);
  };
};

module.exports = wrapMiddleware;