import uuid from 'uuid';

export default {
  method: 'get',
  path: '/',
  name: 'index',
  useWrap: true,
  version: 'v1.0.0',
  handler: (req, res, next) => {
    res.send({
      message: 'Enjoy the silence in Graph Sicirflex System. Should you really be here?',
      pass: uuid(),
      health: {
        state: 'cool',
        status: 1,
      },
    });
    next();
  },
};
