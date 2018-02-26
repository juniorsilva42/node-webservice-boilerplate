export default {
  method: 'get',
  path: '/users',
  name: 'Get all users',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {
    res.send('Hello from users!');
    next();
  },
};
