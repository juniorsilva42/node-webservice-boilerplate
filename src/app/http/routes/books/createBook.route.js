export default {
  method: 'post',
  path: '/books',
  name: 'Create a book',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {
    res.send('create a book!');
    next();
  },
};
