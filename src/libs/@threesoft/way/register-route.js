import { pick, isArray } from 'lodash';
import wrapMiddleware from './wrap-middleware';

const toArray = value => (isArray(value) ? value : [value]);

/**
 * @method applyWrap
 * @param  {Array<Function>}  handlers array of middlewares
 * @return {Array<Function>}  array of middlewares
 */
const applyWrap = (handlers) => {
  const last = handlers.pop();
  handlers.push(wrapMiddleware(last));

  return handlers;
};

/**
 * @method getHandlers
 * @param  {Object}    route
 * @return {Array<Function>} array of middlewares
 */
const getHandlers = (route) => {
  const { useWrap } = route;
  let handlers = toArray(route.handler);

  if (useWrap) {
    handlers = applyWrap(handlers);
  }

  return handlers;
};

/**
 * @method registerRoute
 * @param  {ExpressServer}  app express instance
 * @param  {Object}         route  route object
 */
const registerRoute = (app, route) => {
  const { method } = route;
  const opts = pick(route, ['path']);
  const handlers = getHandlers(route);

  app.route(opts)[method]( handlers );
};

module.exports = registerRoute;
