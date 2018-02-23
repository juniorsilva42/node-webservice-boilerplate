module.exports = {
  method: 'post',
  path: '/cars',
  name: 'create a car',
  useWrap: true,
  version: 't1.0.0',
  handler: (req, res, next) => {
    res.send('Enjoy the silence in Graph of the SICIR System');
    next();
  },
};
