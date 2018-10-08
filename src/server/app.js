import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import cors2 from '../app/configuration/cors';

import registerRoutesByPath from '../libs/@threesoft/way/';

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/*
 * Registra todas as rotas
*/
registerRoutesByPath(app, path.join(__dirname, '../app/http/routes/'));

export default app;
