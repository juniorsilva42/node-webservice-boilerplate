export default {
  method: 'get',
  path: '/books',
  name: 'books',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {
    res.send('books!');
    next();
  },
};
