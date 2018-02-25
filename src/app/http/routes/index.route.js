import cuid from 'cuid';

export default {
  method: 'get',
  path: '/',
  name: 'index',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {
    res.send(`Enjoy the silence in Graph of the SICIR System <br> Access key: ${cuid()}`);
    next();
  },
};
