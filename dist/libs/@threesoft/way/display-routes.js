'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('table');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var head = ['method', 'path', 'name', 'version'];

/**
 * @method routeToRow
 * @param  {Object}   route
 * @return {Array<String>}
 */
var routeToRow = function routeToRow(route) {
  var method = route.method,
      path = route.path,
      name = route.name,
      version = route.version;

  return [method, path, name, version];
};

/**
 * @method parseRoutesToRows
 * @param  {Array<Object>}    routes
 * @return {Array<String>}
 */
var parseRoutesToRows = function parseRoutesToRows(routes) {
  var rows = routes.map(routeToRow);
  return [head].concat(_toConsumableArray(rows));
};

/**
 * @method displayRoutes
 * @param  {Array<Object>}     routes
 */
var displayRoutes = function displayRoutes(routes) {
  var rows = parseRoutesToRows(routes);

  console.log((0, _table.table)(rows));
};

exports.default = displayRoutes;