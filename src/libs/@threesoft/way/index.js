import loadRoutesByPath from './load-routes-by-path';
import displayRoutes from './display-routes';
import registerRoute from './register-route';

/**
 * @method registerRoutesByPath
 * @param  {ExpressServer}      app  express instance
 * @param  {String}             dirName
 */
const registerRoutesByPath = (app, dirName) => {
  const routes = loadRoutesByPath(dirName);
  routes.forEach(route => registerRoute(app, route)); // 
  displayRoutes(routes);
};

module.exports = registerRoutesByPath;
