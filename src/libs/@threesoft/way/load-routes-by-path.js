import path from 'path';
import filterFiles from 'filter-files';
import isDir from 'is-directory';
import flatten from 'lodash';

const isRouteFile = fileName => /((routes)|(route))\.js$/.test(fileName);

/**
 * @method getRoutesFilesFromDirname
 * @param  {String}            dirName
 * @return {Array<String>}
 *
 * The callback still contains the files and recurse
 */
const getRoutesFilesFromDirname = dirName => filterFiles.sync(dirName, (fp, dir) => {

  if (isRouteFile(fp))
    return true;

  return isDir.sync(path.join(dir, fp));
}, true);

/**
 * @method loadRoutesByPath
 * @param  {String}           dirName
 * @return {Array<Function>}   array of routes
 */
const loadRoutesByPath = (dirName) => {
  const routes = getRoutesFilesFromDirname(dirName).map(require);
  return flatten(routes);
};

export default loadRoutesByPath;
