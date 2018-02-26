export default {
  method: 'get',
  path: '/books',
  name: 'Get all books',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {
    res.send({ message: 'Books works!' });
    next();
  },
};
