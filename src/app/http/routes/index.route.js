module.exports = {
  method: 'get',
  path: '/',
  name: 'index',
  useWrap: true,
  version: 't1.0.0',
  handler: (req, res) => {
    res.send('Enjoy the silence in Graph of the SICIR System');
  },
};
