'use strict';

var _loadRoutesByPath = require('./load-routes-by-path');

var _loadRoutesByPath2 = _interopRequireDefault(_loadRoutesByPath);

var _displayRoutes = require('./display-routes');

var _displayRoutes2 = _interopRequireDefault(_displayRoutes);

var _registerRoute = require('./register-route');

var _registerRoute2 = _interopRequireDefault(_registerRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @method registerRoutesByPath
 * @param  {RestifyServer}      server  restify instance
 * @param  {String}             dirName
 */
var registerRoutesByPath = function registerRoutesByPath(server, dirName) {
  var routes = (0, _loadRoutesByPath2.default)(dirName);
  routes.forEach(function (route) {
    return (0, _registerRoute2.default)(server, route);
  });
  (0, _displayRoutes2.default)(routes);
};

module.exports = registerRoutesByPath;