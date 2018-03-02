import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import registerRoutesByPath from '../libs/@threesoft/way/';

const app = express();

app.set('port', 5000);
app.use(bodyParser.json());

/*
 * Registra todas as rotas
*/
registerRoutesByPath(app, path.join(__dirname, '../app/http/routes/'));

export default app;
