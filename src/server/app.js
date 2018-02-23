import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import registerRoutesByPath from '../libs/@threesoft/way/';
import routesTest from '../app/routes.test';

const app = express();
const router = routesTest(app);

app.set('port', 7000);
app.use(bodyParser.json());

/*
 *
 * Registra todas as rotas
 *
*/
registerRoutesByPath(app, path.join(__dirname, '../app/http/routes/'));

export default app;
