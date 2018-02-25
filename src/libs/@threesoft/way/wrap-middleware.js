import Boom from 'boom';

/**
 * @method sendError
 * @param  {ResponseRestify}  res response instance
 * @param  {Error}            e
 */
const sendError = (res, e) => {
  const { output } = Boom.boomify(e);
  res.send(output.statusCode, output);
};

/**
 * @method wrapMiddleware
 * @param  {Function}       middleware route middleware
 * @return {Function}
 */
const wrapMiddleware = middleware => async (req, res, next) => {
  try {
    await middleware(req, res, next);
  } catch (e) {
    sendError();
  }
};

export default wrapMiddleware;
