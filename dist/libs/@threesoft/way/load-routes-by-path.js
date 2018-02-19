'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _filterFiles = require('filter-files');

var _filterFiles2 = _interopRequireDefault(_filterFiles);

var _isDirectory = require('is-directory');

var _isDirectory2 = _interopRequireDefault(_isDirectory);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRouteFile = function isRouteFile(fileName) {
  return (/((routes)|(route))\.js$/.test(fileName)
  );
};

/**
 * @method getRoutesFilesFromDirname
 * @param  {String}            dirName
 * @return {Array<String>}
 */
var getRoutesFilesFromDirname = function getRoutesFilesFromDirname(dirName) {
  return _filterFiles2.default.sync(dirName, function (fp, dir, files, recurse) {
    if (isRouteFile(fp)) return true;

    return _isDirectory2.default.sync(_path2.default.join(dir, fp));
  }, true);
};

/**
 * @method loadRoutesByPath
 * @param  {String}           dirName
 * @return {Array<Function>}   array of routes
 */
var loadRoutesByPath = function loadRoutesByPath(dirName) {
  var routes = getRoutesFilesFromDirname(dirName).map(require);
  return (0, _lodash2.default)(routes);
};

module.exports = loadRoutesByPath;