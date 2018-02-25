export default {
  method: 'get',
  path: '/services',
  name: 'services',
  useWrap: true,
  version: 't1.0.0',
  handler: (req, res, next) => {
    res.send('Services route!');
    next();
  },
};
