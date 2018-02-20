import express from 'express';
import path from 'path';
import registerRoutesByPath from '../libs/@threesoft/way';
import bodyParser from 'body-parser';

const app = express();
app.set('port', 7000);
app.use(bodyParser.json());

app.route('/books')
  .get((req, res, next) => {
    res.json([{
      id: 1,
      name: 'Default Book',
    }]);
    next();
  })
  .post((req, res, next) => {
    res.send({ status: 'ok' });
    next();
  });

/*
 *
 * Registra todas as rotas
 *
*/
// registerRoutesByPath(app, path.join(__dirname, '../http/routes'))

export default app;
