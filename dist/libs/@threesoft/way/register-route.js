'use strict';

var _lodash = require('lodash');

var _wrapMiddleware = require('./wrap-middleware');

var _wrapMiddleware2 = _interopRequireDefault(_wrapMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toArray = function toArray(value) {
  return (0, _lodash.isArray)(value) ? value : [value];
};

/**
 * @method applyWrap
 * @param  {Array<Function>}  handlers array of middlewares
 * @return {Array<Function>}  array of middlewares
 */
var applyWrap = function applyWrap(handlers) {
  var last = handlers.pop();
  handlers.push((0, _wrapMiddleware2.default)(last));

  return handlers;
};

/**
 * @method getHandlers
 * @param  {Object}    route
 * @return {Array<Function>} array of middlewares
 */
var getHandlers = function getHandlers(route) {
  var useWrap = route.useWrap;

  var handlers = toArray(route.handler);

  if (useWrap) {
    handlers = applyWrap(handlers);
  }

  return handlers;
};

/**
 * @method registerRoute
 * @param  {RestifyServer}  server restify instance
 * @param  {Object}         route  route object
 */
var registerRoute = function registerRoute(server, route) {
  var method = route.method;

  var opts = (0, _lodash.pick)(route, ['path', 'name', 'version']);
  var handlers = getHandlers(route);

  //server[method](opts, handlers)
};

module.exports = registerRoute;