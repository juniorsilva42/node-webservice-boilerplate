export default {
  method: 'get',
  path: '/products',
  name: 'products',
  useWrap: true,
  version: 't1.0.0',
  handler: (req, res, next) => {
    res.send('Hello from products route!');
    next();
  },
};
